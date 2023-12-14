import { Controller, Get, Inject, Injectable, Module } from '@nestjs/common';

@Controller('useFactory')
class MyUseFactoryController {
  constructor(
    @Inject('CONNECTION') private readonly dbConnection: Record<string, any>,
  ) {}
  @Get()
  getConnection() {
    const dbCon = this.dbConnection;
    return dbCon; //{ type: 'mariadb', port: 9098, option1: 1, option2: 2 }
  }
}

@Injectable()
export class OptionsProvider {
  get(): any {
    return {
      option1: 1,
      option2: 2,
    };
  }
}

@Module({
  providers: [
    // NOTE: 동적으로 'CONNECTION' 객체를 생성하기 위한 팩토리 프로바이더
    {
      provide: 'CONNECTION',
      useFactory: (options: OptionsProvider) => {
        // 옵션을 사용하여 새로운 데이터베이스 연결 객체를 생성한다.
        const newDatabaseConnection = {
          type: 'mariadb',
          port: 9098,
          ...options.get(), // OptionsProvider에서 옵션을 가져와 병합
        };
        return newDatabaseConnection;
      },
      inject: [OptionsProvider], // NOTE: useFactory에 OptionsProvider를 주입
      // inject: [{ token: OptionsProvider, optional: false }], 👌
    },
    OptionsProvider, // NOTE: useFactory에서 사용하기 위해 OptionsProvider를 주입
  ],
  controllers: [MyUseFactoryController],
  exports: ['CONNECTION'],
})
export class MyUseFactoryModule {}

// INFO: `exports` 다른 모듈에서 사용
@Injectable()
export class SomeOtherService {
  constructor(
    @Inject('CONNECTION')
    private readonly connectionFactory: Record<string, any>,
  ) {
    const connection = this.connectionFactory;
    console.log('SomeOtherService-connection:', connection); // 여기서 생성된 연결을 사용할 수 있습니다.
  }
}
@Module({
  imports: [MyUseFactoryModule], // MyUseFactoryModule import합니다.
  providers: [SomeOtherService],
})
export class SomeOtherModule {} // 다른 모듈을 정의합니다.
