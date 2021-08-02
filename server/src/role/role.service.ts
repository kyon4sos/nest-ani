import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { ROLE_REPOSITORY, USER_ROLE_REPOSITORY } from 'src/constants';
import { UserRole } from 'src/userRole/userRole.entity';
import { UserRoleService } from 'src/userRole/userRole.service';
import { RoleCreateDto } from './dto/createRole.dto';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
  constructor(
    @Inject(ROLE_REPOSITORY) private readonly roleRepository: typeof Role,
    private readonly userRoleService: UserRoleService,
    @Inject(USER_ROLE_REPOSITORY)
    private readonly userRoleRepository: typeof UserRole,
  ) {}
  async findAll(): Promise<Role[]> {
    return this.roleRepository.findAll();
  }
  async create(roleDto: RoleCreateDto) {
    const role = Role.build({ id: 0, ...roleDto });
    return role.save();
  }
  /**
   * 获取用户角色
   * @param uid 用户ID
   * @returns
   */
  async getRolesByUid(uid: any): Promise<Role[]> {
    const urs = await this.userRoleRepository.findAll<UserRole>({
      where: { userId: uid },
    });
    const rids = urs.map((u) => u.roleId);
    return await this.roleRepository.findAll({
      where: {
        id: {
          [Op.in]: rids,
        },
      },
    });
  }
  async updateUserRole(userId, roleId: any[]) {
    this.userRoleRepository.destroy<UserRole>({
      where: {
        userId: userId,
      },
    });
    const urs = roleId.map((r) => {
      return { userId, roleId: r };
    });
    this.userRoleRepository.bulkCreate(urs);
  }
}
