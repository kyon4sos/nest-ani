import { UserRole } from 'src/userRole/userRole.entity';
import { UserRoleService } from 'src/userRole/userRole.service';
import { RoleCreateDto } from './dto/createRole.dto';
import { Role } from './role.entity';
export declare class RoleService {
    private readonly roleRepository;
    private readonly userRoleService;
    private readonly userRoleRepository;
    constructor(roleRepository: typeof Role, userRoleService: UserRoleService, userRoleRepository: typeof UserRole);
    findAll(): Promise<Role[]>;
    create(roleDto: RoleCreateDto): Promise<Role>;
    getRolesByUid(uid: any): Promise<Role[]>;
    updateUserRole(userId: any, roleId: any[]): Promise<void>;
}
