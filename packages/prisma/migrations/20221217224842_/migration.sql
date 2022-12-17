-- AlterTable
ALTER TABLE "ChannelKitOverlay" ALTER COLUMN "backgroundColorPrimary" DROP DEFAULT,
ALTER COLUMN "backgroundColorSecondary" DROP DEFAULT,
ALTER COLUMN "textColorPrimary" DROP DEFAULT,
ALTER COLUMN "textColorSecondary" DROP DEFAULT,
ALTER COLUMN "textColorAccent" DROP DEFAULT;

-- CreateTable
CREATE TABLE "WarzoneTwoKitOptionTuning" (
    "id" TEXT NOT NULL,
    "kitId" TEXT NOT NULL,
    "kitOptionId" TEXT NOT NULL,
    "horz" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "vert" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "WarzoneTwoKitOptionTuning_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WarzoneTwoKitOptionTuning" ADD CONSTRAINT "WarzoneTwoKitOptionTuning_kitId_fkey" FOREIGN KEY ("kitId") REFERENCES "WarzoneTwoKit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarzoneTwoKitOptionTuning" ADD CONSTRAINT "WarzoneTwoKitOptionTuning_kitOptionId_fkey" FOREIGN KEY ("kitOptionId") REFERENCES "WarzoneTwoKitOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;
