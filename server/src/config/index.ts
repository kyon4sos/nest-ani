import { SequelizeOptions } from 'sequelize-typescript';
export const dbConfig: SequelizeOptions = {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'ani',
};
