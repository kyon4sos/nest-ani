"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateDto = void 0;
const role_entity_1 = require("../role.entity");
const swagger_1 = require("@nestjs/swagger");
class RoleCreateDto extends swagger_1.OmitType(role_entity_1.Role, ['id']) {
}
exports.RoleCreateDto = RoleCreateDto;
//# sourceMappingURL=createRole.dto.js.map