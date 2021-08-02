import { Inject, Injectable } from '@nestjs/common';
import { Enforcer, Adapter } from 'casbin';

const ROLE_PREFIX = 'role:';
const USER_PREFIX = 'user:';

@Injectable()
export class SecurityService {
  constructor(
    @Inject('casbin')
    private readonly enforcer: Enforcer,
    @Inject('adapter')
    private readonly adapter: Adapter,
  ) {}

  async checkPermiss(uid: number, obj: string, action: string) {
    try {
      const { subject } = transform(uid);
      console.log(subject, obj, action);
      return await this.enforcer.enforce(subject, obj, action);
    } catch (e) {
      console.log(e);
    }
  }
  async addRoleForUser(uid: number, rid: number) {
    try {
      const { subject, role } = transform(uid);
      await this.enforcer.addRoleForUser(subject, role);
    } catch (e) {
      console.log(e);
    }
  }
  async delAllRoleForUser(uid: number) {
    try {
      const { subject } = transform(uid, 0);
      await this.enforcer.deleteRolesForUser(subject);
      this.enforcer.loadPolicy();
    } catch (e) {
      console.log(e);
    }
  }
  async addPermissionForUser(uid: number) {
    try {
      const { subject } = transform(uid, 0);
      return await this.enforcer.addPermissionForUser(subject, 'a', 'b', 'c');
    } catch (e) {
      console.log(e);
    }
  }
  async createPermiss(rid: number, url: string, action: string) {
    try {
      const { role } = transform(rid);
      return await this.enforcer.addPolicy(role, url, action);
    } catch (e) {
      console.log(e);
    }
  }
}

const transform = (uid: number, rid: number = 0) => {
  const subject = USER_PREFIX + uid;
  const role = ROLE_PREFIX + rid;
  return { subject, role };
};
