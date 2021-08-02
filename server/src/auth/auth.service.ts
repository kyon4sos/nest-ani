import { Injectable } from '@nestjs/common';
import { BaseException } from 'src/exception/base.exception';
import { TokenService } from 'src/security/token.service';
import { UserService } from 'src/user/user.service';
import { compareSyncSync } from 'src/util';
import { UserCreateDto } from './../user/dto/user.create.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.getUserByUsername(username);
    if (!user) {
      throw new BaseException('用名称或密码错误', 4000);
    }
    if (compareSyncSync(password, user.password)) {
      return user;
    }
    throw new BaseException('用名称或密码错误', 4000);
  }

  async login(username: string, password: string, req) {
    const user = await this.validateUser(username, password);
    req.user = user;
    const payload = { username: user.username, sub: user.id };
    const { nickname } = user;
    return {
      nickname,
      username,
      access_token: this.tokenService.sign(payload),
    };
  }
  async register(userCreateDto: UserCreateDto) {
    let user = await this.userService.getUserByUsername(userCreateDto.username);
    if (user) {
      throw new BaseException('用户名已经被注册了', 4000);
    }

    user = await this.userService.create(userCreateDto);
    const { username, nickname } = user;
    const payload = { username, sub: user.id };

    return {
      nickname,
      username,
      access_token: this.tokenService.sign(payload),
    };
  }
}
