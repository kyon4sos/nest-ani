"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../user.entity");
class UserCreateDto extends swagger_1.OmitType(user_entity_1.User, ['id']) {
}
exports.UserCreateDto = UserCreateDto;
//# sourceMappingURL=user.create.dto.js.map