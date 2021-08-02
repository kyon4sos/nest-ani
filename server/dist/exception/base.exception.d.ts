import { HttpException } from '@nestjs/common';
export declare class BaseException extends HttpException {
    constructor(msg: string, code?: number);
}
