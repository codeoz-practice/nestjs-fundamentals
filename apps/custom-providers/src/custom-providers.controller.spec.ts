import { Test, TestingModule } from '@nestjs/testing';
import { CustomProvidersController } from './custom-providers.controller';
import { CustomProvidersService } from './custom-providers.service';

describe('CustomProvidersController', () => {
  let customProvidersController: CustomProvidersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CustomProvidersController],
      providers: [CustomProvidersService],
    }).compile();

    customProvidersController = app.get<CustomProvidersController>(CustomProvidersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(customProvidersController.getHello()).toBe('Hello World!');
    });
  });
});
