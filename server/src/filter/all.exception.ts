// import { ValidationError } from 'sequelize/types';
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';

import { BaseException } from 'src/exception/base.exception';
import { ForbiddenException } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    if (process.env.NODE_ENV == 'development') {
      console.log('异常', exception);
    }
    const { code, msg } = handleException(exception);
    response.status(200).json({
      code,
      msg,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}

const handleException = (exception) => {
  let code = 5000;
  let msg = '系统异常';
  if (exception instanceof NotFoundException) {
    code = 40000;
    msg = 'not found';
  }
  if (exception instanceof BadRequestException) {
    msg = exception.getResponse()['message'][0];
    code = 40000;
  }
  if (exception instanceof BaseException) {
    msg = exception.message;
    code = exception.getStatus();
  }
  if (exception instanceof JsonWebTokenError) {
    msg = '无效token';
    code = 40001;
  }
  if (exception instanceof TokenExpiredError) {
    msg = 'token过期,请重新登录';
    code = 40002;
  }
  if (exception instanceof ForbiddenException) {
    msg = '权限不足';
    code = 40003;
  }
  return { code, msg };
};
