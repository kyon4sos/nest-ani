import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { useSwagger } from './swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //数据校验
  app.useGlobalPipes(new ValidationPipe());
  //文档
  if (process.env.NODE_ENV == 'development') {
    useSwagger(app);
  }

  // useCasbin();

  await app.listen(3000, () => {
    Logger.log(`app is running in ${process.env.NODE_ENV}`);
  });
}
bootstrap();
