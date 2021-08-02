import { ROLE_REPOSITORY } from 'src/constants';
import { Role } from './role.entity';

export const RoleProvider = [
  {
    provide: ROLE_REPOSITORY,
    useValue: Role,
  },
];
