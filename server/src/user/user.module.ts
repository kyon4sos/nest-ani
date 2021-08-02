import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { RoleModule } from 'src/role/role.module';
import { UserController } from './user.controller';
import { UserProviders } from './user.provider';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule, RoleModule],
  controllers: [UserController],
  providers: [UserService, ...UserProviders],
  exports: [UserService],
})
export class UserModule {}
