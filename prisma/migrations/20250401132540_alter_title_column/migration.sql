/*
  Warnings:

  - You are about to drop the column `tittle` on the `animes` table. All the data in the column will be lost.
  - Added the required column `title` to the `animes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "animes" DROP COLUMN "tittle",
ADD COLUMN     "title" TEXT NOT NULL;
