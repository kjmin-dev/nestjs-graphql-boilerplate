import 'reflect-metadata';
import { Inject } from '@nestjs/common';
import {
  Resolver,
  ResolveField,
  Root,
  Query,
  Args,
  Mutation,
} from '@nestjs/graphql';
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

  @Query(() => [TodoList], { nullable: true })
  async allTodoLists() {
    return this.prismaService.todoList.findMany();
  }

  @Query(() => [TodoItem], { nullable: true })
  async todoList(@Args('id') listId: string) {
    return this.prismaService.todoList.findUnique({
      where: {
        id: listId,
      },
    });
  }

  @Mutation(() => TodoList)
  async createTodoList(
    @Args('data') data: TodoListCreateInput,
  ): Promise<TodoList> {
    return this.prismaService.todoList.create({
      data: {
        title: data.title,
      },
    });
  }

  @Mutation(() => TodoItem)
  async createTodoItem(
    @Args('data') data: TodoItemCreateInput,
    @Args('listId') listId: string,
  ): Promise<TodoItem> {
    return this.prismaService.todoItem.create({
      data: {
        description: data.description,
        isDone: data.isDone,
        parentTodo: {
          connect: {
            id: listId,
          },
        },
      },
    });
  }
}
