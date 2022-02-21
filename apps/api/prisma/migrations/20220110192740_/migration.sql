/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "DogSex" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "AkcRegistrationType" AS ENUM ('AKCREGNUMBER', 'AKCPALNUMBER', 'FOREIGNREGNUMBER');

-- CreateEnum
CREATE TYPE "AkcHeightCard" AS ENUM ('NONE', 'TEMP', 'PERM');

-- DropTable
DROP TABLE "Test";

-- CreateTable
CREATE TABLE "Dog" (
    "id" TEXT NOT NULL,
    "callName" TEXT NOT NULL,
    "akcBreed" TEXT NOT NULL,
    "sex" "DogSex" NOT NULL,
    "birthdate" TIMESTAMP(3),
    "birthplace" TEXT,
    "akcRegisteredName" TEXT,
    "akcTitlePrefix" TEXT,
    "akcTitleSuffix" TEXT,
    "akcRegistrationType" "AkcRegistrationType",
    "akcHeightCard" "AkcHeightCard" NOT NULL DEFAULT E'NONE',
    "akcMeasuredHeight" INTEGER,
    "registrationNumber" TEXT,
    "breederName" TEXT,
    "sireName" TEXT,
    "damName" TEXT,
    "primaryOwnerId" TEXT NOT NULL,
    "handler" TEXT,
    "isOfficiallyMeasured" BOOLEAN NOT NULL DEFAULT false,
    "jumpHeight" INTEGER,
    "preferredClasses" BOOLEAN,

    CONSTRAINT "Dog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DogToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_DogToUser_AB_unique" ON "_DogToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_DogToUser_B_index" ON "_DogToUser"("B");

-- AddForeignKey
ALTER TABLE "_DogToUser" ADD FOREIGN KEY ("A") REFERENCES "Dog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DogToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
