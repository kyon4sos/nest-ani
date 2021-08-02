import { UserCreateDto } from './dto/user.create.dto';
import { User } from './user.entity';
import { Request } from 'express';
export declare class UserService {
    private readonly userRespository;
    private readonly req;
    constructor(userRespository: typeof User);
    getUserByUsername(username: string): Promise<User>;
    getUserById(uid: number): Promise<User>;
    create(userDto: UserCreateDto): Promise<User>;
    updatePassword(orginalPassword: string, newPassword: string, req: Request): Promise<Resp>;
}
