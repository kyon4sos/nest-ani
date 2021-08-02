import { ApiProperty } from '@nestjs/swagger';
import { Length as Len } from 'class-validator';

import {
  Table,
  Model,
  Column,
  Length,
  PrimaryKey,
  Unique,
  AutoIncrement,
} from 'sequelize-typescript';
import { Role } from 'src/role/role.entity';

@Table
export class User extends Model {
  @AutoIncrement
  @Unique
  @PrimaryKey
  @Column
  id: number;

  @Len(6, 20, { message: '用户名为6-20个字符' })
  @Length({ min: 6, max: 20, msg: '用户名为6-20个字符' })
  @ApiProperty()
  @Column
  username: string;

  @Len(6, 20, { message: '密码为6-20个字符' })
  @Length({ min: 6, max: 128, msg: '密码为6-20个字符' })
  @ApiProperty()
  @Column
  password: string;

  @Len(2, 10, { message: '昵称为2-10个字符' })
  @Length({ min: 2, max: 10, msg: '昵称为2-10个字符' })
  @ApiProperty()
  @Column
  nickname: string;

  role: Role[];

  @Column
  version: number;
}
