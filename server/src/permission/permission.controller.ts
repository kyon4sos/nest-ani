import { PermissCreateDto } from './dto/permiss.create';
import { ok } from 'src/util';
import { SecurityService } from 'src/security/security.service';
import {
  Body,
  Controller,
  Delete,
  Injectable,
  Param,
  Post,
} from '@nestjs/common';
import { ApiParam, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('权限')
@Controller('permission')
export class PermissionController {
  constructor(private readonly securityService: SecurityService) {}

  @ApiParam({
    name: 'uid',
  })
  @Delete(':uid/permiss')
  async delete(@Param() param) {
    const { uid } = param;
    const res = await this.securityService.delAllRoleForUser(uid);
    return ok(res);
  }

  @Post()
  async create(@Body() permissCreateDto: PermissCreateDto) {
    const { subjectId, url, action } = permissCreateDto;
    const res = await this.securityService.createPermiss(
      subjectId,
      url,
      action,
    );
    return ok(res);
  }
}
