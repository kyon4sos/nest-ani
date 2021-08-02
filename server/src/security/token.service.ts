import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}
  sign(payload: object): string {
    return this.jwtService.sign(payload);
  }
  verify(token: string) {
    return this.jwtService.verify(token);
  }
  decode(token: string) {
    return this.jwtService.decode(token);
  }
}
