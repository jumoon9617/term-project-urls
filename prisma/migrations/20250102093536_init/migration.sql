-- CreateTable
CREATE TABLE "Message" (
    "message_id" SERIAL NOT NULL,
    "message_text" INTEGER NOT NULL,
    "send_user_name" TEXT NOT NULL,
    "extracted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("message_id")
);

-- CreateTable
CREATE TABLE "Urls" (
    "url_id" SERIAL NOT NULL,
    "message_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "extracted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Urls_pkey" PRIMARY KEY ("url_id")
);

-- CreateTable
CREATE TABLE "UrlClicked" (
    "clicked_id" SERIAL NOT NULL,
    "url_id" INTEGER NOT NULL,
    "clicked_times" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "UrlClicked_pkey" PRIMARY KEY ("clicked_id")
);

-- AddForeignKey
ALTER TABLE "Urls" ADD CONSTRAINT "Urls_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "Message"("message_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UrlClicked" ADD CONSTRAINT "UrlClicked_url_id_fkey" FOREIGN KEY ("url_id") REFERENCES "Urls"("url_id") ON DELETE RESTRICT ON UPDATE CASCADE;
