/*
  Warnings:

  - You are about to drop the column `Is_paid` on the `Transactions` table. All the data in the column will be lost.
  - You are about to drop the column `Payment_link` on the `Transactions` table. All the data in the column will be lost.
  - You are about to drop the column `Address` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `Profile_picture` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `payment_link` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "Is_paid",
DROP COLUMN "Payment_link",
ADD COLUMN     "date_transaction" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_paid" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "payment_link" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "Address",
DROP COLUMN "Password",
DROP COLUMN "Profile_picture",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "profile_picture" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
