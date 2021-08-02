import { OmitType } from '@nestjs/swagger';
import { User } from '../user.entity';

// export class UserCreateDto extends OmitType(User, ['id']) {}
export class UserCreateDto extends OmitType(User, ['id'] as const) {}
