/*
  Warnings:

  - You are about to drop the column `name` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Student` table. All the data in the column will be lost.
  - Added the required column `address` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `program` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Student` DROP COLUMN `name`,
    DROP COLUMN `phone`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `program` VARCHAR(191) NOT NULL;
