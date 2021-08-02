import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { VideoProviders } from './video.provider';
import { DatabaseModule } from './../database/database.module';
@Module({
  imports: [DatabaseModule],
  providers: [VideoService, ...VideoProviders],
  controllers: [VideoController],
})
export class VideoModule {}
