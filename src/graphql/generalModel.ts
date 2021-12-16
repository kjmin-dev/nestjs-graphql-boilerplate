import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GeneralModel {
  @Field((type) => Int)
  idx: number;

  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
