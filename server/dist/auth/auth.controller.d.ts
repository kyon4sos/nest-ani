import { AuthService } from './auth.service';
import { LoginDto } from 'src/user/dto/login.dto';
import { UserCreateDto } from 'src/user/dto/user.create.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto, req: any): Promise<Resp>;
    register(userDto: UserCreateDto): Promise<Resp>;
}
