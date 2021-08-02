"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_ROLE_REPOSITORY = exports.USER_REPOSITORY = exports.ROLE_REPOSITORY = exports.VIDEO_REPOSITORY = exports.jwtConstants = exports.ERROR_LOGIN_CODE = exports.ERROR_LOGIN_MSG = exports.ERROR_MSG = exports.ERROR_CODE = exports.SUCESS_MSG = exports.SUCESS_CODE = exports.AUTH_PREFIX = exports.AUTH_HEADER = void 0;
const AUTH_HEADER = 'authorization';
exports.AUTH_HEADER = AUTH_HEADER;
const AUTH_PREFIX = 'Bearer ';
exports.AUTH_PREFIX = AUTH_PREFIX;
const SUCESS_CODE = 20000;
exports.SUCESS_CODE = SUCESS_CODE;
const SUCESS_MSG = 'ok';
exports.SUCESS_MSG = SUCESS_MSG;
const ERROR_CODE = 40000;
exports.ERROR_CODE = ERROR_CODE;
const ERROR_MSG = 'error';
exports.ERROR_MSG = ERROR_MSG;
const ERROR_LOGIN_MSG = '用户名或密码不正确';
exports.ERROR_LOGIN_MSG = ERROR_LOGIN_MSG;
const ERROR_LOGIN_CODE = 40000;
exports.ERROR_LOGIN_CODE = ERROR_LOGIN_CODE;
const jwtConstants = {
    secret: 'secretKey',
};
exports.jwtConstants = jwtConstants;
const VIDEO_REPOSITORY = 'VIDEO_REPOSITORY ';
exports.VIDEO_REPOSITORY = VIDEO_REPOSITORY;
const USER_REPOSITORY = 'USER_REPOSITORY';
exports.USER_REPOSITORY = USER_REPOSITORY;
const ROLE_REPOSITORY = 'ROLE_REPOSITORY';
exports.ROLE_REPOSITORY = ROLE_REPOSITORY;
const USER_ROLE_REPOSITORY = 'USER_ROLE_REPOSITORY';
exports.USER_ROLE_REPOSITORY = USER_ROLE_REPOSITORY;
//# sourceMappingURL=constants.js.map