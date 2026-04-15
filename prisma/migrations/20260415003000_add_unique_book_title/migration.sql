-- DropIndex
DROP INDEX "Book_title_idx";

-- CreateIndex
CREATE UNIQUE INDEX "Book_title_key" ON "Book"("title");
