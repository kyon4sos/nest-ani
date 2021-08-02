import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserRoleModule } from 'src/userRole/userRole.module';
import { RoleController } from './role.controller';
import { RoleProvider } from './role.provider';
import { RoleService } from './role.service';

@Module({
  imports: [DatabaseModule, UserRoleModule],
  controllers: [RoleController],
  providers: [RoleService, ...RoleProvider],
  exports: [RoleService, ...RoleProvider],
})
export class RoleModule {}
