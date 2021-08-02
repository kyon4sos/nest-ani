import { PickType, OmitType } from '@nestjs/swagger';
import { User } from '../user.entity';

export class LoginDto extends PickType(User, [
  'username',
  'password',
] as const) {}
