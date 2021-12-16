import 'reflect-metadata';
import { Inject } from '@nestjs/common';
import { Resolver, ResolveField, Root, Query, Args } from '@nestjs/graphql';
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

  @Query((returns) => [TodoList], { nullable: true })
  async allTodoLists() {
    return this.prismaService.todoList.findMany();
  }

  @Query((returns) => [TodoItem], { nullable: true })
  async todoList(@Args('id') listId: string) {
    return this.prismaService.todoList.findUnique({
      where: {
        id: listId,
      },
    });
  }
}
