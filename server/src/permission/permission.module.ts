import { SecurityModule } from 'src/security/security.module';
import { Module } from '@nestjs/common';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';

@Module({
  imports: [SecurityModule],
  controllers: [PermissionController],
  providers: [PermissionService],
})
export class PermissionModule {}
