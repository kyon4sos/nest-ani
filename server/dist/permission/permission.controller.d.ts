import { PermissCreateDto } from './dto/permiss.create';
import { SecurityService } from 'src/security/security.service';
export declare class PermissionController {
    private readonly securityService;
    constructor(securityService: SecurityService);
    delete(param: any): Promise<Resp>;
    create(permissCreateDto: PermissCreateDto): Promise<Resp>;
}
