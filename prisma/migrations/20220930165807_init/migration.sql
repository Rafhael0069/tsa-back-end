/*
  Warnings:

  - You are about to drop the column `birth_date` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `encrypted_password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `image_adrress` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_name` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userName]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userEmail]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `birthDate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `encryptedPassword` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageAdrress` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userEmail` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_user_email_key` ON `user`;

-- DropIndex
DROP INDEX `User_user_name_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `birth_date`,
    DROP COLUMN `encrypted_password`,
    DROP COLUMN `image_adrress`,
    DROP COLUMN `user_email`,
    DROP COLUMN `user_name`,
    ADD COLUMN `birthDate` VARCHAR(191) NOT NULL,
    ADD COLUMN `encryptedPassword` VARCHAR(191) NOT NULL,
    ADD COLUMN `imageAdrress` VARCHAR(191) NOT NULL,
    ADD COLUMN `userEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `userName` VARCHAR(191) NOT NULL,
    MODIFY `verified` BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX `User_userName_key` ON `User`(`userName`);

-- CreateIndex
CREATE UNIQUE INDEX `User_userEmail_key` ON `User`(`userEmail`);
