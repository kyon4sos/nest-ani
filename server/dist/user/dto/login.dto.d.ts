import { User } from '../user.entity';
declare const LoginDto_base: import("@nestjs/common").Type<Pick<User, "username" | "password">>;
export declare class LoginDto extends LoginDto_base {
}
export {};
