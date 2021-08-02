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
exports.SecurityGuard = void 0;
const common_1 = require("@nestjs/common");
const security_service_1 = require("../security/security.service");
const token_service_1 = require("../security/token.service");
const util_1 = require("../util");
const whiteUrls = ['/auth/login', '/auth/register', '/video'];
let SecurityGuard = class SecurityGuard {
    constructor(tokenService, securityService) {
        this.tokenService = tokenService;
        this.securityService = securityService;
    }
    canActivate(ctx) {
        const req = ctx.switchToHttp().getRequest();
        if (ignore(req, whiteUrls)) {
            return true;
        }
        const token = util_1.getTokenFromHeader(req);
        const res = this.tokenService.verify(token);
        const { username, sub } = res;
        const { method, url } = req;
        req.user = { username, id: sub };
        return this.securityService.checkPermiss(sub, url, method);
    }
};
SecurityGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [token_service_1.TokenService,
        security_service_1.SecurityService])
], SecurityGuard);
exports.SecurityGuard = SecurityGuard;
const ignore = (req, urls) => {
    return urls.some((u) => req.url.startsWith(u));
};
//# sourceMappingURL=security.guard.js.map