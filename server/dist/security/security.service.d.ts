import { Enforcer, Adapter } from 'casbin';
export declare class SecurityService {
    private readonly enforcer;
    private readonly adapter;
    constructor(enforcer: Enforcer, adapter: Adapter);
    checkPermiss(uid: number, obj: string, action: string): Promise<boolean>;
    addRoleForUser(uid: number, rid: number): Promise<void>;
    delAllRoleForUser(uid: number): Promise<void>;
    addPermissionForUser(uid: number): Promise<boolean>;
    createPermiss(rid: number, url: string, action: string): Promise<boolean>;
}
