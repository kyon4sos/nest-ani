import { JwtService } from '@nestjs/jwt';
export declare class TokenService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    sign(payload: object): string;
    verify(token: string): any;
    decode(token: string): string | {
        [key: string]: any;
    };
}
