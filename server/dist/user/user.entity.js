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
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const sequelize_typescript_1 = require("sequelize-typescript");
const role_entity_1 = require("../role/role.entity");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    class_validator_1.Length(6, 20, { message: '用户名为6-20个字符' }),
    sequelize_typescript_1.Length({ min: 6, max: 20, msg: '用户名为6-20个字符' }),
    swagger_1.ApiProperty(),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    class_validator_1.Length(6, 20, { message: '密码为6-20个字符' }),
    sequelize_typescript_1.Length({ min: 6, max: 128, msg: '密码为6-20个字符' }),
    swagger_1.ApiProperty(),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    class_validator_1.Length(2, 10, { message: '昵称为2-10个字符' }),
    sequelize_typescript_1.Length({ min: 2, max: 10, msg: '昵称为2-10个字符' }),
    swagger_1.ApiProperty(),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "nickname", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], User.prototype, "version", void 0);
User = __decorate([
    sequelize_typescript_1.Table
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map