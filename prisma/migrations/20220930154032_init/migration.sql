/*
  Warnings:

  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `car` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `birth_date` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `encrypted_password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_adrress` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verified` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `car` DROP FOREIGN KEY `Car_userId_fkey`;

-- DropIndex
DROP INDEX `User_username_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `password`,
    DROP COLUMN `username`,
    ADD COLUMN `birth_date` DATETIME(3) NOT NULL,
    ADD COLUMN `encrypted_password` VARCHAR(191) NOT NULL,
    ADD COLUMN `image_adrress` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_email` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `verified` BOOLEAN NOT NULL;

-- DropTable
DROP TABLE `car`;

-- CreateIndex
CREATE UNIQUE INDEX `User_user_name_key` ON `User`(`user_name`);

-- CreateIndex
CREATE UNIQUE INDEX `User_user_email_key` ON `User`(`user_email`);
