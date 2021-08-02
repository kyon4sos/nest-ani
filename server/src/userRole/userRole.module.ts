import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserRoleProviders } from './userRole.providers';
import { UserRoleService } from './userRole.service';
@Module({
  imports: [DatabaseModule],
  providers: [UserRoleService, ...UserRoleProviders],
  exports: [UserRoleService, ...UserRoleProviders],
})
export class UserRoleModule {}
