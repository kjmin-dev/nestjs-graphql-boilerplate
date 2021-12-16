import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GeneralModel {
  @Field(() => Int)
  idx: number;

  @Field()
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
