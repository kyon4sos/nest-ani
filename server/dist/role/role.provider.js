"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleProvider = void 0;
const constants_1 = require("../constants");
const role_entity_1 = require("./role.entity");
exports.RoleProvider = [
    {
        provide: constants_1.ROLE_REPOSITORY,
        useValue: role_entity_1.Role,
    },
];
//# sourceMappingURL=role.provider.js.map