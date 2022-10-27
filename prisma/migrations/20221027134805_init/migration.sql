/*
  Warnings:

  - Made the column `status` on table `Requisition` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Requisition" ADD COLUMN     "read" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "status" SET NOT NULL;
