import { Controller, Get, Injectable, Module } from '@nestjs/common';

// 트스트용 가짜 MyUseValueService 객체
export const MockMyUseValueService = {
  getServiceName: () => 'MockMyUseValueService',
};

@Injectable()
export class MyUseValueService {
  getServiceName = (): string => {
    return 'MyUseValueService';
  };
}

@Controller('useValue')
export class UseValueController {
  constructor(private readonly myUseValueService: MyUseValueService) {}

  @Get()
  useMyValue() {
    return this.myUseValueService.getServiceName();
  }
}
@Module({
  providers: [
    {
      provide: MyUseValueService,
      useValue: MockMyUseValueService, // 가짜 서비스 객체를 제공합니다.
      // useClass: MyUseValueService, // 실제 서비스를 사용할 경우 사용합니다.
    },
  ],
  controllers: [UseValueController],
})
export class MyUseValueModule {}
