import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';
import { ok } from 'src/util';

@ApiBearerAuth()
@ApiTags('TaskController')
@Controller('videos')
export class TaskController {
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
    return ok();
  }
}
