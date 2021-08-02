import { Request } from 'express';
declare const ok: (data?: any, code?: number, msg?: string) => Resp;
declare const err: (code?: number, msg?: string, data?: any) => Resp;
declare const getTokenFromHeader: (req: Request) => string;
declare const hashPasswordSync: (plainPassword: string, saltRounds?: number) => any;
declare const compareSyncSync: (plainPassword: string, hash: string) => any;
export { ok, err, getTokenFromHeader, hashPasswordSync, compareSyncSync };
