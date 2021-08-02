"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const video_entity_1 = require("../video.entity");
class VideoCreateDto extends swagger_1.OmitType(video_entity_1.Video, ['id']) {
}
exports.VideoCreateDto = VideoCreateDto;
//# sourceMappingURL=video.dto.js.map