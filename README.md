## Description

[Nest-CustomProviders](https://docs.nestjs.com/fundamentals/custom-providers)

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ nest new nestjs-fundamentals

# CustomProviders workspace 생성
$ nest g app CustomProviders 
```

## Git create a new repository on the command line

```bash
$ git init
$ git add .
$ git commit -m "first commit"

#  현재 체크아웃된 브랜치를 main으로 이름을 변경(로컬 저장소에 있는 브랜치의 이름만을 변경)
$ git branch -M main

# 현재 작업 중인 로컬 저장소에 origin이라는 이름으로 새로운 원격 저장소를 추가
$ git remote add origin https://github.com/yongseok/nestjs-fundamentals.git

# 현재 로컬의 main 브랜치의 변경 사항을 origin이라는 원격 저장소에 푸시하여 업데이트
# 만약 원격 저장소에 main 브랜치가 없는 경우, 이 명령은 원격 저장소에 main 브랜치를 생성하고 로컬의 변경 사항을 반영
$ git push -u origin main
```

## Running the app

```bash
# development : 
$ npm run start

# Run CustomProviders
$ npm run start CustomProviders

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
