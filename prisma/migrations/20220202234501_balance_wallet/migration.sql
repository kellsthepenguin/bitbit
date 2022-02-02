/*
  Warnings:

  - You are about to drop the `Balance` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Balance";

-- CreateTable
CREATE TABLE "Wallet" (
    "ownerId" TEXT NOT NULL,
    "krw" BIGINT NOT NULL DEFAULT 1000000,
    "usd" INTEGER NOT NULL DEFAULT 1000,
    "coins" JSONB NOT NULL DEFAULT '{}',
    "idx" SERIAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_idx_key" ON "Wallet"("idx");
