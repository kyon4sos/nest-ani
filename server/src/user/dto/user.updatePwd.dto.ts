import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class UserUpdatePwdDto {
  @Length(6, 20, { message: '密码长度6-20个字符' })
  @ApiProperty()
  newPassword: string;

  @Length(6, 20, { message: '密码长度6-20个字符' })
  @ApiProperty()
  orginalPassword: string;
}
