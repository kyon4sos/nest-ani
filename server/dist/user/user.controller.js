"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const util_1 = require("../util");
const user_service_1 = require("./user.service");
const role_service_1 = require("../role/role.service");
const user_updatePwd_dto_1 = require("./dto/user.updatePwd.dto");
let UserController = class UserController {
    constructor(userService, roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }
    async updatePassword(userDto, req) {
        const { orginalPassword, newPassword } = userDto;
        return await this.userService.updatePassword(orginalPassword, newPassword, req);
    }
    async getRoleById(param) {
        const roles = await this.roleService.getRolesByUid(param.userId);
        return util_1.ok(roles);
    }
    async updateRole(roleids, param) {
        console.log(roleids);
        const { userId } = param;
        const res = await this.roleService.updateUserRole(userId, roleids);
        return util_1.ok(res);
    }
};
__decorate([
    swagger_1.ApiOperation({
        summary: '修改用户密码',
    }),
    swagger_1.ApiBearerAuth(),
    common_1.Put('/password'),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_updatePwd_dto_1.UserUpdatePwdDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updatePassword", null);
__decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiParam({
        name: 'userId',
    }),
    common_1.Get(':userId/roles'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getRoleById", null);
__decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiParam({
        name: 'userId',
    }),
    swagger_1.ApiBody({
        type: [Number],
        description: 'role id array',
    }),
    common_1.Put(':userId/roles'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateRole", null);
UserController = __decorate([
    swagger_1.ApiTags('UserController'),
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        role_service_1.RoleService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map