"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const userRole_module_1 = require("../userRole/userRole.module");
const role_controller_1 = require("./role.controller");
const role_provider_1 = require("./role.provider");
const role_service_1 = require("./role.service");
let RoleModule = class RoleModule {
};
RoleModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, userRole_module_1.UserRoleModule],
        controllers: [role_controller_1.RoleController],
        providers: [role_service_1.RoleService, ...role_provider_1.RoleProvider],
        exports: [role_service_1.RoleService, ...role_provider_1.RoleProvider],
    })
], RoleModule);
exports.RoleModule = RoleModule;
//# sourceMappingURL=role.module.js.map