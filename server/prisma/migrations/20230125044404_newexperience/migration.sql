-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthorsBooks" (
    "authorId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "AuthorsBooks_pkey" PRIMARY KEY ("authorId","bookId")
);

-- AddForeignKey
ALTER TABLE "AuthorsBooks" ADD CONSTRAINT "AuthorsBooks_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthorsBooks" ADD CONSTRAINT "AuthorsBooks_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
