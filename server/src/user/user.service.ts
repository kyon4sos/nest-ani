import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/constants';
import { UserCreateDto } from './dto/user.create.dto';
import { User } from './user.entity';
import { Request } from 'express';
import { hashPasswordSync, compareSyncSync, ok } from 'src/util';
import { BaseException } from './../exception/base.exception';

@Injectable()
export class UserService {
  private readonly req;
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRespository: typeof User,
  ) {}
  async getUserByUsername(username: string): Promise<User> {
    return await this.userRespository.findOne({
      where: { username: username },
    });
  }
  getUserById(uid: number): Promise<User> {
    return this.userRespository.findByPk(uid);
  }
  async create(userDto: UserCreateDto) {
    const hash = hashPasswordSync(userDto.password);
    const user = this.userRespository.build({ ...userDto, password: hash });
    return await user.save();
  }

  /**
   *  修改密码
   * @param userDto
   */
  async updatePassword(
    orginalPassword: string,
    newPassword: string,
    req: Request,
  ) {
    const user = await this.userRespository.findByPk(req.user['id']);
    if (!user) {
      throw new BaseException('用户不存在');
    }
    if (compareSyncSync(orginalPassword, user.password)) {
      user.password = hashPasswordSync(newPassword);
      user.save();
      return ok();
    }
    throw new BaseException('密码不正确');
  }
}
