import { Model } from 'sequelize-typescript';
export declare class UserRole extends Model {
    id: number;
    userId: number;
    roleId: number;
    version: number;
}
