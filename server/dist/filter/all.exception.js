"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const common_1 = require("@nestjs/common");
const base_exception_1 = require("../exception/base.exception");
const common_2 = require("@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    async catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        if (process.env.NODE_ENV == 'development') {
            console.log('异常', exception);
        }
        const { code, msg } = handleException(exception);
        response.status(200).json({
            code,
            msg,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
};
AllExceptionsFilter = __decorate([
    common_1.Catch()
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
const handleException = (exception) => {
    let code = 5000;
    let msg = '系统异常';
    if (exception instanceof common_1.NotFoundException) {
        code = 40000;
        msg = 'not found';
    }
    if (exception instanceof common_1.BadRequestException) {
        msg = exception.getResponse()['message'][0];
        code = 40000;
    }
    if (exception instanceof base_exception_1.BaseException) {
        msg = exception.message;
        code = exception.getStatus();
    }
    if (exception instanceof jsonwebtoken_1.JsonWebTokenError) {
        msg = '无效token';
        code = 40001;
    }
    if (exception instanceof jsonwebtoken_1.TokenExpiredError) {
        msg = 'token过期,请重新登录';
        code = 40002;
    }
    if (exception instanceof common_2.ForbiddenException) {
        msg = '权限不足';
        code = 40003;
    }
    return { code, msg };
};
//# sourceMappingURL=all.exception.js.map