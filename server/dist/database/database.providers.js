"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const video_entity_1 = require("../video/video.entity");
const user_entity_1 = require("./../user/user.entity");
const role_entity_1 = require("./../role/role.entity");
const config_1 = require("../config");
const userRole_entity_1 = require("../userRole/userRole.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize(config_1.dbConfig);
            const models = [video_entity_1.Video, user_entity_1.User, role_entity_1.Role, userRole_entity_1.UserRole];
            init(models, sequelize);
            sequelize.addModels(models);
            await sequelize.sync();
            return sequelize;
        },
    },
];
const init = (modle, sequelize) => {
    modle.forEach((m) => m.init({}, {
        version: true,
        sequelize,
    }));
};
//# sourceMappingURL=database.providers.js.map