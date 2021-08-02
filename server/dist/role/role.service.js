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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
const constants_1 = require("../constants");
const userRole_entity_1 = require("../userRole/userRole.entity");
const userRole_service_1 = require("../userRole/userRole.service");
const role_entity_1 = require("./role.entity");
let RoleService = class RoleService {
    constructor(roleRepository, userRoleService, userRoleRepository) {
        this.roleRepository = roleRepository;
        this.userRoleService = userRoleService;
        this.userRoleRepository = userRoleRepository;
    }
    async findAll() {
        return this.roleRepository.findAll();
    }
    async create(roleDto) {
        const role = role_entity_1.Role.build(Object.assign({ id: 0 }, roleDto));
        return role.save();
    }
    async getRolesByUid(uid) {
        const urs = await this.userRoleRepository.findAll({
            where: { userId: uid },
        });
        const rids = urs.map((u) => u.roleId);
        return await this.roleRepository.findAll({
            where: {
                id: {
                    [sequelize_1.Op.in]: rids,
                },
            },
        });
    }
    async updateUserRole(userId, roleId) {
        this.userRoleRepository.destroy({
            where: {
                userId: userId,
            },
        });
        const urs = roleId.map((r) => {
            return { userId, roleId: r };
        });
        this.userRoleRepository.bulkCreate(urs);
    }
};
RoleService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.ROLE_REPOSITORY)),
    __param(2, common_1.Inject(constants_1.USER_ROLE_REPOSITORY)),
    __metadata("design:paramtypes", [Object, userRole_service_1.UserRoleService, Object])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map