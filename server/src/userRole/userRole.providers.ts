import { USER_ROLE_REPOSITORY } from 'src/constants';
import { UserRole } from './userRole.entity';

export const UserRoleProviders = [
  {
    provide: USER_ROLE_REPOSITORY,
    useValue: UserRole,
  },
];
