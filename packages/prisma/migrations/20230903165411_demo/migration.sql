/*
  Warnings:

  - You are about to drop the column `bio` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `stars` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `workingAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Applied` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Bookmarks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PostsToTags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_follow` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `updatedAt` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Applied" DROP CONSTRAINT "Applied_postId_fkey";

-- DropForeignKey
ALTER TABLE "Applied" DROP CONSTRAINT "Applied_userId_fkey";

-- DropForeignKey
ALTER TABLE "Bookmarks" DROP CONSTRAINT "Bookmarks_postId_fkey";

-- DropForeignKey
ALTER TABLE "Bookmarks" DROP CONSTRAINT "Bookmarks_userId_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_postId_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_userId_fkey";

-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_userId_fkey";

-- DropForeignKey
ALTER TABLE "_PostsToTags" DROP CONSTRAINT "_PostsToTags_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostsToTags" DROP CONSTRAINT "_PostsToTags_B_fkey";

-- DropForeignKey
ALTER TABLE "_follow" DROP CONSTRAINT "_follow_A_fkey";

-- DropForeignKey
ALTER TABLE "_follow" DROP CONSTRAINT "_follow_B_fkey";

-- DropIndex
DROP INDEX "User_userName_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "bio",
DROP COLUMN "location",
DROP COLUMN "password",
DROP COLUMN "stars",
DROP COLUMN "userName",
DROP COLUMN "verified",
DROP COLUMN "workingAt",
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- DropTable
DROP TABLE "Applied";

-- DropTable
DROP TABLE "Bookmarks";

-- DropTable
DROP TABLE "Comments";

-- DropTable
DROP TABLE "Posts";

-- DropTable
DROP TABLE "Tags";

-- DropTable
DROP TABLE "_PostsToTags";

-- DropTable
DROP TABLE "_follow";
