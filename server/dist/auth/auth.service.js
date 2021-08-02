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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const base_exception_1 = require("../exception/base.exception");
const token_service_1 = require("../security/token.service");
const user_service_1 = require("../user/user.service");
const util_1 = require("../util");
let AuthService = class AuthService {
    constructor(userService, tokenService) {
        this.userService = userService;
        this.tokenService = tokenService;
    }
    async validateUser(username, password) {
        const user = await this.userService.getUserByUsername(username);
        if (!user) {
            throw new base_exception_1.BaseException('用名称或密码错误', 4000);
        }
        if (util_1.compareSyncSync(password, user.password)) {
            return user;
        }
        throw new base_exception_1.BaseException('用名称或密码错误', 4000);
    }
    async login(username, password, req) {
        const user = await this.validateUser(username, password);
        req.user = user;
        const payload = { username: user.username, sub: user.id };
        const { nickname } = user;
        return {
            nickname,
            username,
            access_token: this.tokenService.sign(payload),
        };
    }
    async register(userCreateDto) {
        let user = await this.userService.getUserByUsername(userCreateDto.username);
        if (user) {
            throw new base_exception_1.BaseException('用户名已经被注册了', 4000);
        }
        user = await this.userService.create(userCreateDto);
        const { username, nickname } = user;
        const payload = { username, sub: user.id };
        return {
            nickname,
            username,
            access_token: this.tokenService.sign(payload),
        };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        token_service_1.TokenService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map