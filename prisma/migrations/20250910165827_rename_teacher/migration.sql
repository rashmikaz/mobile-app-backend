/*
  Warnings:

  - You are about to drop the `teacher` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `teacher`;

-- CreateTable
CREATE TABLE `Teacher` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nic` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `subject` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Teacher_email_key`(`email`),
    UNIQUE INDEX `Teacher_nic_key`(`nic`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
