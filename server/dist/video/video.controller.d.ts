import { VideoService } from './video.service';
import { VideoCreateDto } from './dto/video.dto';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    findAll(page?: number, size?: number): Promise<Resp>;
    create(video: VideoCreateDto): Promise<Resp>;
}
