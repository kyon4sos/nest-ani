import { Video } from './video.entity';
export declare class VideoService {
    private readonly videoRepository;
    constructor(videoRepository: typeof Video);
    findAll(): Promise<Video[]>;
    create(video: any): Promise<Video>;
}
