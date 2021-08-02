import { Adapter, newEnforcer } from 'casbin';
import { SequelizeAdapter } from 'casbin-sequelize-adapter';
import * as path from 'path';
import { dbConfig } from 'src/config';
const model = path.resolve(__dirname, '../config/rbac_model.conf');
export const casbinProviders = [
  {
    provide: 'casbin',
    useFactory: async (adapter: SequelizeAdapter) =>
      await newEnforcer(model, adapter),
    inject: ['adapter'],
  },
  {
    provide: 'adapter',
    useFactory: async () => await SequelizeAdapter.newAdapter(dbConfig),
  },
];
