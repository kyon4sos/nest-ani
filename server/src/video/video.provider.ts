import { Video } from './video.entity';
import { VIDEO_REPOSITORY } from 'src/constants';
export const VideoProviders = [
  {
    provide: VIDEO_REPOSITORY,
    useValue: Video,
  },
];
