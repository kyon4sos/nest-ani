import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';
import { VideoModule } from './video/video.module';
import { DatabaseModule } from './database/database.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskModule } from './task/task.module';
import { FileModule } from './file/file.module';
import { UserModule } from './user/user.module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AllExceptionsFilter } from './filter/all.exception';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { ConfigModule } from './config/config.module';
import { SecurityGuard } from './guard/security.guard';
import { GuardModule } from './guard/guard.module';
import { SecurityModule } from './security/security.module';
import { UserRoleModule } from './userRole/userRole.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.register({ folder: './config' }),
    ScheduleModule.forRoot(),
    HomeModule,
    VideoModule,
    TaskModule,
    FileModule,
    UserModule,
    AuthModule,
    RoleModule,
    PermissionModule,
    GuardModule,
    SecurityModule,
    UserRoleModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: SecurityGuard,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    AppService,
  ],
})
export class AppModule {}
