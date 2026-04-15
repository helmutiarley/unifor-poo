/*
  Warnings:

  - You are about to drop the column `userId` on the `Book` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_userId_fkey";

-- DropIndex
DROP INDEX "Book_userId_idx";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "userId";
