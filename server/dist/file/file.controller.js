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
exports.FileController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const multer = require("multer");
const util_1 = require("../util");
const dto_1 = require("./dto");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload');
    },
    filename: function (req, file, cb) {
        const { originalname } = file;
        const exendName = originalname.substring(originalname.lastIndexOf('.'));
        cb(null, `${file.fieldname}-${Date.now()}${exendName}`);
    },
});
const option = {
    storage,
    limits: {
        fileSize: 100 * 100 * 100,
    },
    fileFilter,
};
let FileController = class FileController {
    upload(file) {
        return util_1.ok(file);
    }
};
__decorate([
    swagger_1.ApiConsumes('multipart/form-data'),
    swagger_1.ApiBody({
        type: dto_1.FileUploadDto,
    }),
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', option)),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileController.prototype, "upload", null);
FileController = __decorate([
    swagger_1.ApiTags('图片上传'),
    common_1.Controller('file')
], FileController);
exports.FileController = FileController;
function fileFilter(req, file, cb) {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    }
    else {
        cb(new common_1.BadRequestException('不支持的文件'));
    }
}
//# sourceMappingURL=file.controller.js.map