import { Body, Controller, Get, Post } from '@nestjs/common';
import { ok } from 'src/util';
import { RoleService } from './role.service';
import { ApiTags, ApiOperation, ApiBody, ApiProperty } from '@nestjs/swagger';
import { RoleCreateDto } from './dto/createRole.dto';

const apiOperation = {
  summary: '获取角色',
};

class Permiss {
  @ApiProperty()
  subject: string;
  @ApiProperty()
  obj: string;
  @ApiProperty()
  action: string;
}

@ApiTags('RoleController')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}
  @ApiOperation(apiOperation)
  @Get()
  async findAll() {
    const roles = this.roleService.findAll();
    return ok(roles);
  }
  @ApiOperation({ summary: '新增角色' })
  @Post()
  async create(@Body() roleDto: RoleCreateDto) {
    await this.roleService.create(roleDto);
  }
}
