import { Adapter } from 'casbin';
import { SequelizeAdapter } from 'casbin-sequelize-adapter';
export declare const casbinProviders: ({
    provide: string;
    useFactory: (adapter: Adapter) => Promise<import("casbin").Enforcer>;
    inject: string[];
} | {
    provide: string;
    useFactory: () => Promise<SequelizeAdapter>;
    inject?: undefined;
})[];
