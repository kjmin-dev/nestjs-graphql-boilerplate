-- CreateTable
CREATE TABLE "TodoList" (
    "idx" SERIAL NOT NULL,
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "priority" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "TodoList_pkey" PRIMARY KEY ("idx")
);

-- CreateTable
CREATE TABLE "TodoItem" (
    "idx" SERIAL NOT NULL,
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "parentTodoListId" TEXT,

    CONSTRAINT "TodoItem_pkey" PRIMARY KEY ("idx")
);

-- CreateIndex
CREATE UNIQUE INDEX "TodoList_id_key" ON "TodoList"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TodoItem_id_key" ON "TodoItem"("id");

-- AddForeignKey
ALTER TABLE "TodoItem" ADD CONSTRAINT "TodoItem_parentTodoListId_fkey" FOREIGN KEY ("parentTodoListId") REFERENCES "TodoList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
