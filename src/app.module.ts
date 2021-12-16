import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './services/prisma.service';
import { DateScalar } from './graphql/scalars/DateScalar';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
    }),
  ],
  controllers: [],
  providers: [PrismaService, DateScalar],
})
export class AppModule {}
