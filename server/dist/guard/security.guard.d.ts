import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SecurityService } from 'src/security/security.service';
import { TokenService } from 'src/security/token.service';
export declare class SecurityGuard implements CanActivate {
    private readonly tokenService;
    private readonly securityService;
    constructor(tokenService: TokenService, securityService: SecurityService);
    canActivate(ctx: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
