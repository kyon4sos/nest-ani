import { TokenService } from 'src/security/token.service';
import { UserService } from 'src/user/user.service';
import { UserCreateDto } from './../user/dto/user.create.dto';
export declare class AuthService {
    private readonly userService;
    private readonly tokenService;
    constructor(userService: UserService, tokenService: TokenService);
    validateUser(username: string, password: string): Promise<import("../user/user.entity").User>;
    login(username: string, password: string, req: any): Promise<{
        nickname: string;
        username: string;
        access_token: string;
    }>;
    register(userCreateDto: UserCreateDto): Promise<{
        nickname: string;
        username: string;
        access_token: string;
    }>;
}
