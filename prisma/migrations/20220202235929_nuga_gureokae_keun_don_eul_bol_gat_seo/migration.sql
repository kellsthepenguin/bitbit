/*
  Warnings:

  - You are about to alter the column `krw` on the `Wallet` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Wallet" ALTER COLUMN "krw" SET DEFAULT 1000000,
ALTER COLUMN "krw" SET DATA TYPE INTEGER;
