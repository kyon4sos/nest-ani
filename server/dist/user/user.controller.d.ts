import { UserService } from 'src/user/user.service';
import { RoleService } from 'src/role/role.service';
import { UserUpdatePwdDto } from './dto/user.updatePwd.dto';
export declare class UserController {
    private readonly userService;
    private readonly roleService;
    constructor(userService: UserService, roleService: RoleService);
    updatePassword(userDto: UserUpdatePwdDto, req: any): Promise<Resp>;
    getRoleById(param: any): Promise<Resp>;
    updateRole(roleids: any[], param: any): Promise<Resp>;
}
