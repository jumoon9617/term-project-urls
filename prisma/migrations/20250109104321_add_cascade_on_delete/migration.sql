-- DropForeignKey
ALTER TABLE "UrlClicked" DROP CONSTRAINT "UrlClicked_url_id_fkey";

-- DropForeignKey
ALTER TABLE "Urls" DROP CONSTRAINT "Urls_message_id_fkey";

-- AddForeignKey
ALTER TABLE "Urls" ADD CONSTRAINT "Urls_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "Messages"("message_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UrlClicked" ADD CONSTRAINT "UrlClicked_url_id_fkey" FOREIGN KEY ("url_id") REFERENCES "Urls"("url_id") ON DELETE CASCADE ON UPDATE CASCADE;
