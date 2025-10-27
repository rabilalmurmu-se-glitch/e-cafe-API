/*
  Warnings:

  - Added the required column `status` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_price` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('CREATED', 'ORDERED');

-- AlterTable
ALTER TABLE "Categories" ADD COLUMN     "photo" TEXT;

-- AlterTable
ALTER TABLE "Items" ADD COLUMN     "photo" TEXT;

-- AlterTable
ALTER TABLE "ListItems" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "OrderList" ADD COLUMN     "status" "OrderStatus" NOT NULL DEFAULT 'CREATED';

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "total_price" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "about" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "photo" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "address" DROP NOT NULL;
