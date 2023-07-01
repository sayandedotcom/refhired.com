/*
  Warnings:

  - You are about to drop the column `contents` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `endindRange` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `User` table. All the data in the column will be lost.
  - Added the required column `title` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Applied" ADD COLUMN     "message" TEXT;

-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "contents",
DROP COLUMN "endindRange",
ADD COLUMN     "acceptingReferralsNo" INTEGER,
ADD COLUMN     "endingRange" INTEGER,
ADD COLUMN     "normalPost" BOOLEAN DEFAULT false,
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "fullName",
ADD COLUMN     "location" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "verified" BOOLEAN DEFAULT false,
ALTER COLUMN "stars" SET DEFAULT 0;
