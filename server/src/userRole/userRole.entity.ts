import { table } from 'console';
import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table({
  modelName: 'User_Role_Mid',
})
export class UserRole extends Model {
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column
  id: number;

  @Column
  userId: number;

  @Column
  roleId: number;

  @Column
  version: number;
}
