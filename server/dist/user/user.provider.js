"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProviders = void 0;
const constants_1 = require("../constants");
const user_entity_1 = require("./user.entity");
exports.UserProviders = [
    {
        provide: constants_1.USER_REPOSITORY,
        useValue: user_entity_1.User,
    },
];
//# sourceMappingURL=user.provider.js.map