-- AlterTable
ALTER TABLE "Messages" ALTER COLUMN "message_text" SET DEFAULT 'No message';

-- AlterTable
ALTER TABLE "Urls" ADD COLUMN     "title" TEXT NOT NULL DEFAULT 'No title';
