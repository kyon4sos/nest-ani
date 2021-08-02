import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { ROLE_REPOSITORY, USER_ROLE_REPOSITORY } from 'src/constants';
import { Role } from 'src/role/role.entity';
import { UserRole } from './userRole.entity';

@Injectable()
export class UserRoleService {
  constructor(
    @Inject(USER_ROLE_REPOSITORY)
    private readonly userRoleRepository: typeof UserRole,
  ) {}
}
