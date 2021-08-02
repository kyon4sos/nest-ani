import { Model } from 'sequelize-typescript';
import { Role } from 'src/role/role.entity';
export declare class User extends Model {
    id: number;
    username: string;
    password: string;
    nickname: string;
    role: Role[];
    version: number;
}
