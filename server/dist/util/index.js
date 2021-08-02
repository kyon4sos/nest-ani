"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareSyncSync = exports.hashPasswordSync = exports.getTokenFromHeader = exports.err = exports.ok = void 0;
const bcrypt = require("bcrypt");
const base_exception_1 = require("../exception/base.exception");
const constants_1 = require("../constants");
const ok = (data = {}, code = constants_1.SUCESS_CODE, msg = constants_1.SUCESS_MSG) => {
    return {
        code,
        msg,
        data,
    };
};
exports.ok = ok;
const err = (code = constants_1.ERROR_CODE, msg = constants_1.ERROR_MSG, data = {}) => {
    return {
        code,
        msg,
        data,
    };
};
exports.err = err;
const getTokenFromHeader = (req) => {
    const token = req.headers[constants_1.AUTH_HEADER] || '';
    if (!token.startsWith(constants_1.AUTH_PREFIX)) {
        throw new base_exception_1.BaseException('请登录', 400001);
    }
    return token.split(constants_1.AUTH_PREFIX)[1];
};
exports.getTokenFromHeader = getTokenFromHeader;
const hashPasswordSync = (plainPassword, saltRounds = 10) => {
    return bcrypt.hashSync(plainPassword, saltRounds);
};
exports.hashPasswordSync = hashPasswordSync;
const compareSyncSync = (plainPassword, hash) => {
    return bcrypt.compareSync(plainPassword, hash);
};
exports.compareSyncSync = compareSyncSync;
//# sourceMappingURL=index.js.map