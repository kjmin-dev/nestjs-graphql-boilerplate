import 'reflect-metadata';
import { Inject } from '@nestjs/common';
import { Resolver, ResolveField, Root, Context } from '@nestjs/graphql';
import { PrismaService } from 'src/services/prisma.service';
import {
  TodoList,
  TodoListCreateInput,
  TodoItem,
  TodoItemCreateInput,
} from './todo.model';

@Resolver(TodoList)
export class TodoListResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @ResolveField()
  async items(
    @Root() todoList: TodoList,
    // @Context() ctx,
  ): Promise<TodoItem[]> {
    return this.prismaService.todoList
      .findUnique({
        where: {
          id: todoList.id,
        },
      })
      .items();
  }
}
