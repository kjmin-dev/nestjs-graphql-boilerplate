import 'reflect-metadata';
import { ObjectType, Field, Int, InputType, PickType } from '@nestjs/graphql';
import { GeneralModel } from '../generalModel';

@InputType({ isAbstract: true })
@ObjectType()
export class TodoList extends GeneralModel {
  @Field()
  title: string;

  @Field((type) => Int)
  priority: number;

  @Field((type) => [TodoItem], { nullable: true })
  items?: [TodoItem] | null;
}

@InputType({ isAbstract: true })
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

@InputType()
export class TodoListCreateInput extends PickType(TodoList, ['title']) {}

@InputType()
export class TodoItemCreateInput extends PickType(TodoItem, [
  'description',
  'isDone',
]) {}
