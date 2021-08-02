"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.casbinProviders = void 0;
const casbin_1 = require("casbin");
const casbin_sequelize_adapter_1 = require("casbin-sequelize-adapter");
const path = require("path");
const config_1 = require("../config");
const model = path.resolve(__dirname, '../config/rbac_model.conf');
exports.casbinProviders = [
    {
        provide: 'casbin',
        useFactory: async (adapter) => await casbin_1.newEnforcer(model, adapter),
        inject: ['adapter'],
    },
    {
        provide: 'adapter',
        useFactory: async () => await casbin_sequelize_adapter_1.SequelizeAdapter.newAdapter(config_1.dbConfig),
    },
];
//# sourceMappingURL=casbin.provider.js.map