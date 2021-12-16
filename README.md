# Nestjs-graphql-boilerplate

## Description

Nest-based graphql backend boilerplate for rapid prototyping

## requirements
* [node](https://nodejs.org) ^16
* [pnpm](https://pnpm.io) ^6
* [docker & docker-compose](https://docs.docker.com/get-docker)

## Prime Components

* [nest.js](https://nestjs.com)
* [prisma](https://www.prisma.io)
* [apollo-server](https://www.apollographql.com)
* [apollo-server-fastify](https://www.npmjs.com/package/apollo-server-fastify)
* [typescript](https://www.typescriptlang.org)

## Installation

```bash
# Install dependencies
$ pnpm install

# Run postgresql container
$ docker-compose up -d

# Initialize DB schemas
$ pnpm prisma db push
```

## Running the app

```bash
# development
$ npm run start

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

## License

[MIT licensed](LICENSE).
