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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const util_1 = require("../util");
let TaskController = class TaskController {
    async findAll(page = 1, size = 0) {
        return util_1.ok();
    }
};
__decorate([
    swagger_1.ApiQuery({
        name: 'page',
        type: 'number',
        description: '页码',
    }),
    swagger_1.ApiQuery({
        description: '分页大小',
        name: 'size',
        type: 'number',
    }),
    common_1.Get(''),
    __param(0, common_1.Query('page')),
    __param(1, common_1.Query('size')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "findAll", null);
TaskController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('TaskController'),
    common_1.Controller('videos')
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map