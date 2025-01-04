/*
  Warnings:

  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Urls" DROP CONSTRAINT "Urls_message_id_fkey";

-- DropTable
DROP TABLE "Message";

-- CreateTable
CREATE TABLE "Messages" (
    "message_id" SERIAL NOT NULL,
    "message_text" INTEGER NOT NULL,
    "send_user_name" TEXT NOT NULL,
    "extracted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("message_id")
);

-- AddForeignKey
ALTER TABLE "Urls" ADD CONSTRAINT "Urls_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "Messages"("message_id") ON DELETE RESTRICT ON UPDATE CASCADE;
