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
exports.PermissionController = void 0;
const permiss_create_1 = require("./dto/permiss.create");
const util_1 = require("../util");
const security_service_1 = require("../security/security.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let PermissionController = class PermissionController {
    constructor(securityService) {
        this.securityService = securityService;
    }
    async delete(param) {
        const { uid } = param;
        const res = await this.securityService.delAllRoleForUser(uid);
        return util_1.ok(res);
    }
    async create(permissCreateDto) {
        const { subjectId, url, action } = permissCreateDto;
        const res = await this.securityService.createPermiss(subjectId, url, action);
        return util_1.ok(res);
    }
};
__decorate([
    swagger_1.ApiParam({
        name: 'uid',
    }),
    common_1.Delete(':uid/permiss'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "delete", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [permiss_create_1.PermissCreateDto]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "create", null);
PermissionController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('权限'),
    common_1.Controller('permission'),
    __metadata("design:paramtypes", [security_service_1.SecurityService])
], PermissionController);
exports.PermissionController = PermissionController;
//# sourceMappingURL=permission.controller.js.map