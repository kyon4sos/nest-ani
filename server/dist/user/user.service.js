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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
const util_1 = require("../util");
const base_exception_1 = require("./../exception/base.exception");
let UserService = class UserService {
    constructor(userRespository) {
        this.userRespository = userRespository;
    }
    async getUserByUsername(username) {
        return await this.userRespository.findOne({
            where: { username: username },
        });
    }
    getUserById(uid) {
        return this.userRespository.findByPk(uid);
    }
    async create(userDto) {
        const hash = util_1.hashPasswordSync(userDto.password);
        const user = this.userRespository.build(Object.assign(Object.assign({}, userDto), { password: hash }));
        return await user.save();
    }
    async updatePassword(orginalPassword, newPassword, req) {
        const user = await this.userRespository.findByPk(req.user['id']);
        if (!user) {
            throw new base_exception_1.BaseException('用户不存在');
        }
        if (util_1.compareSyncSync(orginalPassword, user.password)) {
            user.password = util_1.hashPasswordSync(newPassword);
            user.save();
            return util_1.ok();
        }
        throw new base_exception_1.BaseException('密码不正确');
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.USER_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map