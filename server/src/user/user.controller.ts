import { Controller, Get, Param, Put, Query, Body, Req } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { ok } from 'src/util';
import { UserService } from 'src/user/user.service';
import { RoleService } from 'src/role/role.service';
import { UserUpdatePwdDto } from './dto/user.updatePwd.dto';

@ApiTags('UserController')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly roleService: RoleService,
  ) {}

  /**
   * 修改用户密码
   */

  @ApiOperation({
    summary: '修改用户密码',
  })
  @ApiBearerAuth()
  @Put('/password')
  async updatePassword(
    @Body() userDto: UserUpdatePwdDto,
    @Req() req,
  ): Promise<Resp> {
    const { orginalPassword, newPassword } = userDto;
    return await this.userService.updatePassword(
      orginalPassword,
      newPassword,
      req,
    );
  }
  /**
   * 获取用户角色
   * @param param
   * @returns Role
   */
  @ApiBearerAuth()
  @ApiParam({
    name: 'userId',
  })
  @Get(':userId/roles')
  async getRoleById(@Param() param): Promise<Resp> {
    const roles = await this.roleService.getRolesByUid(param.userId);
    return ok(roles);
  }

  @ApiBearerAuth()
  @ApiParam({
    name: 'userId',
  })
  @ApiBody({
    type: [Number],
    description: 'role id array',
  })
  @Put(':userId/roles')
  async updateRole(
    @Body() roleids: any[],
    @Param() param
  ): Promise<Resp> {
    console.log(roleids);
    const { userId } = param;
    const res = await this.roleService.updateUserRole(userId, roleids);
    return ok(res);
  }
}
