import { ApiProperty } from '@nestjs/swagger';
import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table
export class Role extends Model {
  @ApiProperty()
  @AutoIncrement
  @Unique
  @PrimaryKey
  @Column
  id: number;

  @ApiProperty()
  @Column
  name: string;

  @Column
  version: number;
}
