"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const useSwagger = (app) => {
    const options = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('heitai application')
        .setDescription('The  API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('swagger', app, document);
};
exports.useSwagger = useSwagger;
//# sourceMappingURL=swagger.js.map