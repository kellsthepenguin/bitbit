-- AlterTable
ALTER TABLE "Wallet" ALTER COLUMN "krw" SET DEFAULT 1000000,
ALTER COLUMN "krw" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "usd" SET DEFAULT 1000,
ALTER COLUMN "usd" SET DATA TYPE DOUBLE PRECISION;