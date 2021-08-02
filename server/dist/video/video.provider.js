"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoProviders = void 0;
const video_entity_1 = require("./video.entity");
const constants_1 = require("../constants");
exports.VideoProviders = [
    {
        provide: constants_1.VIDEO_REPOSITORY,
        useValue: video_entity_1.Video,
    },
];
//# sourceMappingURL=video.provider.js.map