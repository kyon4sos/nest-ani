import { RoleService } from './role.service';
import { RoleCreateDto } from './dto/createRole.dto';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    findAll(): Promise<Resp>;
    create(roleDto: RoleCreateDto): Promise<void>;
}
