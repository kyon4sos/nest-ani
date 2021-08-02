"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("./swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    if (process.env.NODE_ENV == 'development') {
        swagger_1.useSwagger(app);
    }
    await app.listen(3000, () => {
        common_1.Logger.log(`app is running in ${process.env.NODE_ENV}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map