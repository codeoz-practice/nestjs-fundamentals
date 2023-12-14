import { Module } from '@nestjs/common';
import { MyUseValueModule } from './my-use-value.module';
import { MyUseFactoryModule, SomeOtherModule } from './my-use-factory.module';

@Module({
  imports: [MyUseValueModule, MyUseFactoryModule, SomeOtherModule],
  controllers: [],
  providers: [],
})
export class CustomProvidersModule {}
