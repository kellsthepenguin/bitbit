-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "pw" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "idx" SERIAL NOT NULL
);

-- CreateTable
CREATE TABLE "Balance" (
    "ownerId" INTEGER NOT NULL,
    "krw" BIGINT NOT NULL DEFAULT 0,
    "usd" INTEGER NOT NULL DEFAULT 0,
    "coins" JSONB NOT NULL DEFAULT '{}',
    "idx" SERIAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_idx_key" ON "User"("idx");

-- CreateIndex
CREATE UNIQUE INDEX "Balance_idx_key" ON "Balance"("idx");
