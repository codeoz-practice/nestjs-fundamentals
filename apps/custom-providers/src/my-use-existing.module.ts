/**
 * useExisting
 */

import { Injectable, Module, Inject } from '@nestjs/common';

@Injectable()
class LoggerService {
  getServiceName(): string {
    return `service is "LoggerService"`;
  }
}

/**
 * NOTE: useExisting 구문을 사용하면 기존 공급자에 대한 별칭을 만들 수 있습니다.
 */
const loggerAliasProvider = {
  provide: 'AliasedLoggerService', // 새로운 별칭
  useExisting: LoggerService, // 기존 공급자 클래스
};

@Injectable()
class useAliasProviderService {
  constructor(
    private readonly loggerService: LoggerService,
    @Inject('AliasedLoggerService') private aliasedLoggerService: LoggerService,
  ) {
    console.log('[loggerService] serviceName:', loggerService.getServiceName());
    console.log(
      '[aliasedLoggerService] serviceName:',
      aliasedLoggerService.getServiceName(),
    );
  }
}

@Module({
  providers: [
    LoggerService, // 기존 공급자
    loggerAliasProvider, // useExisting 구문을 사용하면 기존 공급자에 대한 별칭을 만들 수 있습니다.
    useAliasProviderService, //
  ],
})
export class myUseExistingModule {}
