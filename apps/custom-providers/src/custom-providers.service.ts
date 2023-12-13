import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomProvidersService {
  getHello(): string {
    return 'Hello World!';
  }
}
