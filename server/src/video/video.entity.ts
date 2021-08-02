import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  Unique,
} from 'sequelize-typescript';
@Table
export class Video extends Model {
  @ApiProperty()
  @AutoIncrement
  @Unique
  @PrimaryKey
  @Column
  id: number;

  @ApiProperty()
  @Column
  thumbnail: string;

  @IsNotEmpty({ message: '标题不能为空' })
  @ApiProperty()
  @Column
  title: string;

  @ApiProperty()
  @Column
  total: number;

  @ApiProperty()
  @Column
  area: string;

  @ApiProperty()
  @Column
  catalog: string;

  @ApiProperty()
  @Column
  originalName: string;

  @ApiProperty()
  @Column
  author: string;

  @ApiProperty()
  @Column
  works: string;

  @ApiProperty()
  @Column
  firstShow: Date;

  @ApiProperty()
  @Column
  showStatus: string;

  @ApiProperty()
  @Column
  kind: string;

  @ApiProperty()
  @Column
  tag: string;

  @ApiProperty()
  @Column
  website: string;

  @ApiProperty()
  @Column
  rank: number;
  @ApiProperty()
  @Column
  retry: number;

  // @ApiProperty()
  // @Column
  // createdAt: Date;

  // @ApiProperty()
  // @Column
  // updatedAt: Date;

  @ApiProperty()
  @Column
  version: number;
}
