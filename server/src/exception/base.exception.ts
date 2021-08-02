import { HttpException } from '@nestjs/common';

export class BaseException extends HttpException {
  constructor(msg: string, code = 40000) {
    super(msg, code);
  }
}
