import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const initialData: Prisma.TodoListCreateInput[] = [
  {
    title: 'To Do',
    items: {
      create: [
        {
          description: 'Learn GraphQL',
          isDone: true,
        },
        {
          description: 'Learn Code-first approach',
          isDone: true,
        },
        {
          description: 'Learn apollo-federation',
        },
        {
          description: 'Learn apollo-client for React',
        },
      ],
    },
  },
  {
    title: 'To Watch',
    items: {
      create: [
        {
          description: 'Deview 2021',
        },
        {
          description: 'Reveal 2021',
        },
      ],
    },
  },
  {
    title: 'To Eat',
    items: {
      create: [
        {
          description: 'Pizza',
          isDone: true,
        },
        {
          description: 'Pasta',
        },
        {
          description: 'Pilaf',
        },
      ],
    },
  },
];
async function _main() {
  console.log(`Start seeding ${initialData.length} lists...`);
  for (const todoList of initialData) {
    const result = await prisma.todoList.create({
      data: todoList,
    });
    console.log(`Created TodoList '${result.title}' with id ${result.id}`);
  }
  console.log(`Seeding finished.`);
}

_main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
