import { Inject, Injectable } from '@nestjs/common';
import { VIDEO_REPOSITORY } from 'src/constants';
import { Video } from './video.entity';

@Injectable()
export class VideoService {
  constructor(
    @Inject(VIDEO_REPOSITORY) private readonly videoRepository: typeof Video,
  ) {}

  async findAll(): Promise<Video[]> {
    return this.videoRepository.findAll<Video>();
  }
  async create(video): Promise<Video> {
    return this.videoRepository.create<Video>(video);
  }
}
