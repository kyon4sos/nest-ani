"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const home_module_1 = require("./home/home.module");
const video_module_1 = require("./video/video.module");
const database_module_1 = require("./database/database.module");
const schedule_1 = require("@nestjs/schedule");
const task_module_1 = require("./task/task.module");
const file_module_1 = require("./file/file.module");
const user_module_1 = require("./user/user.module");
const core_1 = require("@nestjs/core");
const all_exception_1 = require("./filter/all.exception");
const auth_module_1 = require("./auth/auth.module");
const role_module_1 = require("./role/role.module");
const permission_module_1 = require("./permission/permission.module");
const config_module_1 = require("./config/config.module");
const security_guard_1 = require("./guard/security.guard");
const guard_module_1 = require("./guard/guard.module");
const security_module_1 = require("./security/security.module");
const userRole_module_1 = require("./userRole/userRole.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            database_module_1.DatabaseModule,
            config_module_1.ConfigModule.register({ folder: './config' }),
            schedule_1.ScheduleModule.forRoot(),
            home_module_1.HomeModule,
            video_module_1.VideoModule,
            task_module_1.TaskModule,
            file_module_1.FileModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            role_module_1.RoleModule,
            permission_module_1.PermissionModule,
            guard_module_1.GuardModule,
            security_module_1.SecurityModule,
            userRole_module_1.UserRoleModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: security_guard_1.SecurityGuard,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: all_exception_1.AllExceptionsFilter,
            },
            app_service_1.AppService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map