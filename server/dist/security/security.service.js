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
exports.SecurityService = void 0;
const common_1 = require("@nestjs/common");
const casbin_1 = require("casbin");
const ROLE_PREFIX = 'role:';
const USER_PREFIX = 'user:';
let SecurityService = class SecurityService {
    constructor(enforcer, adapter) {
        this.enforcer = enforcer;
        this.adapter = adapter;
    }
    async checkPermiss(uid, obj, action) {
        try {
            const { subject } = transform(uid);
            console.log(subject, obj, action);
            return await this.enforcer.enforce(subject, obj, action);
        }
        catch (e) {
            console.log(e);
        }
    }
    async addRoleForUser(uid, rid) {
        try {
            const { subject, role } = transform(uid);
            await this.enforcer.addRoleForUser(subject, role);
        }
        catch (e) {
            console.log(e);
        }
    }
    async delAllRoleForUser(uid) {
        try {
            const { subject } = transform(uid, 0);
            await this.enforcer.deleteRolesForUser(subject);
            this.enforcer.loadPolicy();
        }
        catch (e) {
            console.log(e);
        }
    }
    async addPermissionForUser(uid) {
        try {
            const { subject } = transform(uid, 0);
            return await this.enforcer.addPermissionForUser(subject, 'a', 'b', 'c');
        }
        catch (e) {
            console.log(e);
        }
    }
    async createPermiss(rid, url, action) {
        try {
            const { role } = transform(rid);
            return await this.enforcer.addPolicy(role, url, action);
        }
        catch (e) {
            console.log(e);
        }
    }
};
SecurityService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('casbin')),
    __param(1, common_1.Inject('adapter')),
    __metadata("design:paramtypes", [casbin_1.Enforcer, Object])
], SecurityService);
exports.SecurityService = SecurityService;
const transform = (uid, rid = 0) => {
    const subject = USER_PREFIX + uid;
    const role = ROLE_PREFIX + rid;
    return { subject, role };
};
//# sourceMappingURL=security.service.js.map