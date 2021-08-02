import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SecurityService } from 'src/security/security.service';
import { TokenService } from 'src/security/token.service';
import { getTokenFromHeader } from 'src/util';

const whiteUrls = ['/auth/login', '/auth/register', '/video'];

@Injectable()
export class SecurityGuard implements CanActivate {
  constructor(
    private readonly tokenService: TokenService,
    private readonly securityService: SecurityService,
  ) {}
  canActivate(
    ctx: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = ctx.switchToHttp().getRequest();
    if (ignore(req, whiteUrls)) {
      return true;
    }
    const token = getTokenFromHeader(req);
    const res = this.tokenService.verify(token);
    const { username, sub } = res;
    const { method, url } = req;
    req.user = { username, id: sub };
    return this.securityService.checkPermiss(sub, url, method);
  }
}

const ignore = (req: Request, urls): boolean => {
  return urls.some((u) => req.url.startsWith(u));
};
