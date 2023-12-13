import { Controller, Get } from '@nestjs/common';
import { CustomProvidersService } from './custom-providers.service';

@Controller()
export class CustomProvidersController {
  constructor(
    private readonly customProvidersService: CustomProvidersService,
  ) {}

  @Get()
  getHello(): string {
    return this.customProvidersService.getHello();
  }
}
