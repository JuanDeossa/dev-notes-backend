-- AlterTable
ALTER TABLE "Note" ADD COLUMN     "images" TEXT[] DEFAULT ARRAY[]::TEXT[];
