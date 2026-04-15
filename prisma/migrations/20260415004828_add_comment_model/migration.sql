-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "private" BOOLEAN DEFAULT false,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);
