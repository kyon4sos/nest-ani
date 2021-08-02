import { Model, Sequelize } from 'sequelize-typescript';
import { Video } from '../video/video.entity';
import { User } from './../user/user.entity';
import { Role } from './../role/role.entity';
import { dbConfig } from 'src/config';
import { UserRole } from '../userRole/userRole.entity';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(dbConfig);
      const models = [Video, User, Role, UserRole];
      init(models, sequelize);
      sequelize.addModels(models);
      await sequelize.sync();
      return sequelize;
    },
  },
];

const init = (modle: typeof Model[], sequelize) => {
  modle.forEach((m) =>
    m.init(
      {},
      {
        version: true,
        sequelize,
      },
    ),
  );
};
