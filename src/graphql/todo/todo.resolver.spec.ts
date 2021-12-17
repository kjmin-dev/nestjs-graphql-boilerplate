import { Test } from '@nestjs/testing';
import { PrismaService } from '../../services/prisma.service';
import { TodoListResolver } from './todo.resolver';

describe('TodoResolver', () => {
  let todoListResolver: TodoListResolver;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [],
      providers: [PrismaService, TodoListResolver],
    }).compile();
    todoListResolver = moduleRef.get<TodoListResolver>(TodoListResolver);
    todoListResolver; // remove unused warning
  });
  describe('Create', () => {
    it('should be true', () => {
      expect(true).toBe(true);
    });
  });
  describe('Read', () => {
    it('should be true', () => {
      expect(true).toBe(true);
    });
  });
  describe('Update', () => {
    it('should be true', () => {
      expect(true).toBe(true);
    });
  });
  describe('Delete', () => {
    it('should be true', () => {
      expect(true).toBe(true);
    });
  });
});
