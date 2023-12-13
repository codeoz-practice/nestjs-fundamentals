import { Module } from '@nestjs/common';
import { CustomProvidersController } from './custom-providers.controller';
import { CustomProvidersService } from './custom-providers.service';

@Module({
  imports: [],
  controllers: [CustomProvidersController],
  providers: [CustomProvidersService],
})
export class CustomProvidersModule {}
