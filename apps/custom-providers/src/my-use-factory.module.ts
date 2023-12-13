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
})
export class MyUseFactoryModule {}
