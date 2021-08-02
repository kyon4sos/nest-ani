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
exports.VideoController = void 0;
const common_1 = require("@nestjs/common");
const video_service_1 = require("./video.service");
const util_1 = require("../util");
const video_dto_1 = require("./dto/video.dto");
const swagger_1 = require("@nestjs/swagger");
let VideoController = class VideoController {
    constructor(videoService) {
        this.videoService = videoService;
    }
    async findAll(page = 1, size = 0) {
        console.log(page, size);
        const res = await this.videoService.findAll();
        return util_1.ok(res);
    }
    async create(video) {
        const res = this.videoService.create(video);
        return util_1.ok(res);
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
], VideoController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [video_dto_1.VideoCreateDto]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "create", null);
VideoController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('VideoController'),
    common_1.Controller('video'),
    __metadata("design:paramtypes", [video_service_1.VideoService])
], VideoController);
exports.VideoController = VideoController;
//# sourceMappingURL=video.controller.js.map