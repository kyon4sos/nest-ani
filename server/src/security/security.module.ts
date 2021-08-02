import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants';
import { TokenService } from './token.service';
import { casbinProviders } from './security.provider';
import { SecurityService } from './security.service';
@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '3600s',
      },
    }),
  ],
  providers: [...casbinProviders, TokenService, SecurityService],
  exports: [SecurityService, TokenService],
})
export class SecurityModule {}
