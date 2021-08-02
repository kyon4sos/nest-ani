import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { VideoService } from './video.service';
import { ok } from '../util';
import { VideoCreateDto } from './dto/video.dto';
import { ApiTags, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('VideoController')
@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  // @ApiTags('获取视频信息')
  @ApiQuery({
    name: 'page',
    type: 'number',
    description: '页码',
  })
  @ApiQuery({
    description: '分页大小',
    name: 'size',
    type: 'number',
  })
  @Get('')
  async findAll(
    @Query('page') page = 1,
    @Query('size') size = 0,
  ): Promise<Resp> {
    console.log(page, size);

    const res = await this.videoService.findAll();
    return ok(res);
  }

  @Post()
  async create(@Body() video: VideoCreateDto): Promise<Resp> {
    const res = this.videoService.create(video);
    return ok(res);
  }
}
