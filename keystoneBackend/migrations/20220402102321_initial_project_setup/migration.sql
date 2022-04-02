-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL DEFAULT E'',
    "subjectId" TEXT NOT NULL DEFAULT E'',
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "locale" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_subjectId_key" ON "User"("subjectId");
