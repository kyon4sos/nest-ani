import { Body, Controller, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { LoginDto } from 'src/user/dto/login.dto';
import { UserCreateDto } from 'src/user/dto/user.create.dto';
import { ok } from 'src/util';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**登录 */
  @ApiTags('登录')
  @ApiOperation({
    summary: '用户登录',
  })
  @Post('login')
  async login(@Body() loginDto: LoginDto, @Request() req) {
    const { username, password } = loginDto;
    const res = await this.authService.login(username, password, req);
    return ok(res);
  }
  /**注册 */
  @ApiTags('注册')
  @ApiOperation({
    summary: '用户注册',
  })
  @Post('register')
  async register(@Body() userDto: UserCreateDto) {
    const res = await this.authService.register(userDto);
    return ok(res);
  }
}
