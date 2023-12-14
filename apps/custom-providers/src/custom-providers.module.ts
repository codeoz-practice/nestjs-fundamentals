import { Module } from '@nestjs/common';
import { MyUseValueModule } from './my-use-value.module';
import { MyUseFactoryModule, SomeOtherModule } from './my-use-factory.module';
import { myUseExistingModule } from './my-use-existing.module';

@Module({
  imports: [
    MyUseValueModule,
    MyUseFactoryModule,
    SomeOtherModule,
    myUseExistingModule,
  ],
  controllers: [],
  providers: [],
})
export class CustomProvidersModule {}
