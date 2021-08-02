import { OmitType } from '@nestjs/swagger';
import { Video } from '../video.entity';

export class VideoCreateDto extends OmitType(Video, ['id']) {}
