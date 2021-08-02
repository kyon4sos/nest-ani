"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleProviders = void 0;
const constants_1 = require("../constants");
const userRole_entity_1 = require("./userRole.entity");
exports.UserRoleProviders = [
    {
        provide: constants_1.USER_ROLE_REPOSITORY,
        useValue: userRole_entity_1.UserRole,
    },
];
//# sourceMappingURL=userRole.providers.js.map