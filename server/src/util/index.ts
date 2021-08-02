import * as bcrypt from 'bcrypt';
import { BaseException } from 'src/exception/base.exception';
import { Request } from 'express';
import {
  SUCESS_CODE,
  SUCESS_MSG,
  ERROR_CODE,
  ERROR_MSG,
  AUTH_HEADER,
  AUTH_PREFIX,
} from '../constants';

const ok = (
  data: any = {},
  code: number = SUCESS_CODE,
  msg: string = SUCESS_MSG,
): Resp => {
  return {
    code,
    msg,
    data,
  };
};
const err = (
  code: number = ERROR_CODE,
  msg: string = ERROR_MSG,
  data: any = {},
): Resp => {
  return {
    code,
    msg,
    data,
  };
};

const getTokenFromHeader = (req: Request) => {
  const token = req.headers[AUTH_HEADER] || '';
  if (!token.startsWith(AUTH_PREFIX)) {
    throw new BaseException('请登录', 400001);
  }
  return token.split(AUTH_PREFIX)[1];
};

const hashPasswordSync = (plainPassword: string, saltRounds = 10) => {
  return bcrypt.hashSync(plainPassword, saltRounds);
};

const compareSyncSync = (plainPassword: string, hash: string) => {
  return bcrypt.compareSync(plainPassword, hash);
};
export { ok, err, getTokenFromHeader, hashPasswordSync, compareSyncSync };
