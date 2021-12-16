import 'reflect-metadata';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GeneralModel } from '../generalModel';

@ObjectType()
export class TodoList extends GeneralModel {
  @Field()
  title: string;

  @Field((type) => Int)
  priority: number;

  @Field((type) => [TodoItem], { nullable: true })
  items?: [TodoItem] | null;
}

@ObjectType()
export class TodoItem extends GeneralModel {
  @Field()
  description: string;

  @Field()
  isDone: boolean;

  @Field((type) => Int)
  priority: number;

  @Field((type) => TodoList, { nullable: true })
  parentTodo?: TodoList | null;
}
