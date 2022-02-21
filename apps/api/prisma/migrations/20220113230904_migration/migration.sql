/*
  Warnings:

  - Added the required column `city` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `streetAddress` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AcceptanceMethod" AS ENUM ('RANDOMDRAW', 'FIRSTRECEIVED');

-- CreateEnum
CREATE TYPE "State" AS ENUM ('AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "akcJudgeId" TEXT,
ADD COLUMN     "akcLicense" TEXT,
ADD COLUMN     "akcSecretaryId" TEXT,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "emergencyContactName" TEXT,
ADD COLUMN     "emergencyContactPhone" TEXT,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "postalCode" TEXT NOT NULL,
ADD COLUMN     "state" "State" NOT NULL,
ADD COLUMN     "streetAddress" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Trial" (
    "id" TEXT NOT NULL,
    "hostingClubId" TEXT NOT NULL,
    "akcEventNumber" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "venueStreetAddress" TEXT NOT NULL,
    "venueCity" TEXT NOT NULL,
    "venueState" TEXT NOT NULL,
    "venuePostalCode" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "signUpOpenDatetime" TIMESTAMP(3) NOT NULL,
    "signUpCloseDateTime" TIMESTAMP(3) NOT NULL,
    "acceptanceMethod" "AcceptanceMethod" NOT NULL,
    "checksPayableTo" TEXT,
    "secretaryId" TEXT NOT NULL,
    "trialChairmanName" TEXT NOT NULL,
    "trialChairmanEmail" TEXT NOT NULL,
    "trialChairmanStreetAddress" TEXT NOT NULL,
    "trialChairmanCity" TEXT NOT NULL,
    "trialChairmanState" TEXT NOT NULL,
    "trialChairmanPostalCode" TEXT NOT NULL,
    "trialChairmanPhone" TEXT,
    "costFirstEntry" INTEGER NOT NULL,
    "costSecondEntry" INTEGER NOT NULL,
    "costThirdEntry" INTEGER NOT NULL,
    "costFourthEntry" INTEGER NOT NULL,
    "catalogFee" INTEGER NOT NULL,
    "juniorHandlerDiscount" INTEGER,
    "confirmationLetter" TEXT NOT NULL,

    CONSTRAINT "Trial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JudgesByTrials" (
    "judgeId" TEXT NOT NULL,
    "trialId" TEXT NOT NULL,

    CONSTRAINT "JudgesByTrials_pkey" PRIMARY KEY ("judgeId","trialId")
);

-- CreateTable
CREATE TABLE "TrialDay" (
    "id" TEXT NOT NULL,
    "trialId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "akcId" TEXT NOT NULL,
    "entryLimit" INTEGER NOT NULL,
    "mixedBreeds" BOOLEAN NOT NULL,

    CONSTRAINT "TrialDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ring" (
    "id" TEXT NOT NULL,
    "trialDayId" TEXT NOT NULL,

    CONSTRAINT "Ring_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Club" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Club_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ClassType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassTypeLevelsByTrials" (
    "classId" TEXT NOT NULL,
    "trialId" TEXT NOT NULL,

    CONSTRAINT "ClassTypeLevelsByTrials_pkey" PRIMARY KEY ("classId","trialId")
);

-- CreateTable
CREATE TABLE "Level" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Height" (
    "id" TEXT NOT NULL,
    "height" INTEGER NOT NULL,

    CONSTRAINT "Height_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassTypeByLevel" (
    "classId" TEXT NOT NULL,
    "levelId" TEXT NOT NULL,

    CONSTRAINT "ClassTypeByLevel_pkey" PRIMARY KEY ("classId","levelId")
);

-- CreateTable
CREATE TABLE "Run" (
    "id" TEXT NOT NULL,
    "dogId" TEXT NOT NULL,
    "scoreKeeperId" TEXT NOT NULL,
    "classTypeId" TEXT NOT NULL,
    "levelId" TEXT NOT NULL,
    "heightId" TEXT NOT NULL,
    "trialDayId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Run_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrialEntry" (
    "id" TEXT NOT NULL,
    "dogId" TEXT NOT NULL,
    "trialId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "juniorHandler" BOOLEAN NOT NULL DEFAULT false,
    "isPreferred" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TrialEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassEntriesByTrials" (
    "trialEntryId" TEXT NOT NULL,
    "trialId" TEXT NOT NULL,

    CONSTRAINT "ClassEntriesByTrials_pkey" PRIMARY KEY ("trialEntryId","trialId")
);

-- CreateTable
CREATE TABLE "TrialEntriesByTrialDays" (
    "trialEntryId" TEXT NOT NULL,
    "trialDayId" TEXT NOT NULL,

    CONSTRAINT "TrialEntriesByTrialDays_pkey" PRIMARY KEY ("trialEntryId","trialDayId")
);

-- AddForeignKey
ALTER TABLE "Trial" ADD CONSTRAINT "Trial_hostingClubId_fkey" FOREIGN KEY ("hostingClubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trial" ADD CONSTRAINT "Trial_secretaryId_fkey" FOREIGN KEY ("secretaryId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JudgesByTrials" ADD CONSTRAINT "JudgesByTrials_judgeId_fkey" FOREIGN KEY ("judgeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JudgesByTrials" ADD CONSTRAINT "JudgesByTrials_trialId_fkey" FOREIGN KEY ("trialId") REFERENCES "Trial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrialDay" ADD CONSTRAINT "TrialDay_trialId_fkey" FOREIGN KEY ("trialId") REFERENCES "Trial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ring" ADD CONSTRAINT "Ring_trialDayId_fkey" FOREIGN KEY ("trialDayId") REFERENCES "TrialDay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassTypeLevelsByTrials" ADD CONSTRAINT "ClassTypeLevelsByTrials_classId_fkey" FOREIGN KEY ("classId") REFERENCES "ClassType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassTypeLevelsByTrials" ADD CONSTRAINT "ClassTypeLevelsByTrials_trialId_fkey" FOREIGN KEY ("trialId") REFERENCES "Trial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassTypeByLevel" ADD CONSTRAINT "ClassTypeByLevel_classId_fkey" FOREIGN KEY ("classId") REFERENCES "ClassType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassTypeByLevel" ADD CONSTRAINT "ClassTypeByLevel_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Run" ADD CONSTRAINT "Run_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "Dog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Run" ADD CONSTRAINT "Run_scoreKeeperId_fkey" FOREIGN KEY ("scoreKeeperId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Run" ADD CONSTRAINT "Run_classTypeId_fkey" FOREIGN KEY ("classTypeId") REFERENCES "ClassType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Run" ADD CONSTRAINT "Run_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Run" ADD CONSTRAINT "Run_heightId_fkey" FOREIGN KEY ("heightId") REFERENCES "Height"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Run" ADD CONSTRAINT "Run_trialDayId_fkey" FOREIGN KEY ("trialDayId") REFERENCES "TrialDay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrialEntry" ADD CONSTRAINT "TrialEntry_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "Dog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrialEntry" ADD CONSTRAINT "TrialEntry_trialId_fkey" FOREIGN KEY ("trialId") REFERENCES "Trial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrialEntry" ADD CONSTRAINT "TrialEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassEntriesByTrials" ADD CONSTRAINT "ClassEntriesByTrials_trialEntryId_fkey" FOREIGN KEY ("trialEntryId") REFERENCES "TrialEntry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassEntriesByTrials" ADD CONSTRAINT "ClassEntriesByTrials_trialId_fkey" FOREIGN KEY ("trialId") REFERENCES "Trial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrialEntriesByTrialDays" ADD CONSTRAINT "TrialEntriesByTrialDays_trialEntryId_fkey" FOREIGN KEY ("trialEntryId") REFERENCES "TrialEntry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrialEntriesByTrialDays" ADD CONSTRAINT "TrialEntriesByTrialDays_trialDayId_fkey" FOREIGN KEY ("trialDayId") REFERENCES "TrialDay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
