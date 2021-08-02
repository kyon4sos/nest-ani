import { Role } from '../role.entity';
import { OmitType } from '@nestjs/swagger';

export class RoleCreateDto extends OmitType(Role, ['id'] as const) {}
