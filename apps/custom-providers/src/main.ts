import { NestFactory } from '@nestjs/core';
import { CustomProvidersModule } from './custom-providers.module';

async function bootstrap() {
  const app = await NestFactory.create(CustomProvidersModule);
  const nPort = 3000;
  await app.listen(nPort, () => {
    console.log(`⭐️ custom-providers] [port:${nPort}] The server has started`);
  });
}
bootstrap();
