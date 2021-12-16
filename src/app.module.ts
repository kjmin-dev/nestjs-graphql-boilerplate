import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PrismaService } from './services/prisma.service';
import { DateScalar } from './graphql/scalars/DateScalar';
import { TodoListResolver } from './graphql/todo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
    }),
  ],
  controllers: [],
  providers: [PrismaService, DateScalar, TodoListResolver],
})
export class AppModule {}
