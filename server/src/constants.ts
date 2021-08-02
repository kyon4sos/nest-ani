// reponse code msg
const AUTH_HEADER = 'authorization';
const AUTH_PREFIX = 'Bearer ';
const SUCESS_CODE = 20000;
const SUCESS_MSG = 'ok';
const ERROR_CODE = 40000;
const ERROR_MSG = 'error';

const ERROR_LOGIN_MSG = '用户名或密码不正确';
const ERROR_LOGIN_CODE = 40000;
const jwtConstants = {
  secret: 'secretKey',
};

// respository
const VIDEO_REPOSITORY = 'VIDEO_REPOSITORY ';
const USER_REPOSITORY = 'USER_REPOSITORY';
const ROLE_REPOSITORY = 'ROLE_REPOSITORY';

const USER_ROLE_REPOSITORY = 'USER_ROLE_REPOSITORY';
export {
  AUTH_HEADER,
  AUTH_PREFIX,
  SUCESS_CODE,
  SUCESS_MSG,
  ERROR_CODE,
  ERROR_MSG,
  ERROR_LOGIN_MSG,
  ERROR_LOGIN_CODE,
  jwtConstants,
  VIDEO_REPOSITORY,
  ROLE_REPOSITORY,
  USER_REPOSITORY,
  USER_ROLE_REPOSITORY,
};
