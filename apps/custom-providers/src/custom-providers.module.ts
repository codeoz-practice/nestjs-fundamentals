import { Module } from '@nestjs/common';
import { MyUseValueModule } from './my-use-value.module';
import { MyUseFactoryModule } from './my-use-factory.module';

@Module({
  imports: [MyUseValueModule, MyUseFactoryModule],
  controllers: [],
  providers: [],
})
export class CustomProvidersModule {}
