import { PrismaClient } from "@prisma/client";

// Prisma
function getPrisma() {
  const prisma = new PrismaClient();
  return prisma;
}

// Messages
export async function getMessages() {
  const prisma = getPrisma()
  return prisma.messages.findMany();
}

export async function getMessage(message_id: number){
  const prisma = getPrisma();
  return prisma.messages.findUnique({ where: { message_id: message_id } });
}

export async function updateMessage(message_id: number, message_text: string){
  const prisma = getPrisma();
  return prisma.messages.update({ where: { message_id: message_id }, data: { message_text: message_text } });
}

export async function deleteMessage(message_id: number){
  const prisma = getPrisma();
  return prisma.messages.delete({ where: { message_id: message_id } });
}

export async function createMessage(message_text: string, send_user_name: string){
  const prisma = getPrisma();
  return prisma.messages.create({ data: { message_text: message_text , send_user_name: send_user_name} });
}

// Urls
export async function getUrls() {
  const prisma = getPrisma()
  return prisma.urls.findMany();
}

export async function getUrl(url_id: number){
  const prisma = getPrisma();
  return prisma.urls.findUnique({ where: { url_id: url_id } });
}

export async function updateUrl(url_id: number, url: string){
  const prisma = getPrisma();
  return prisma.urls.update({ where: { url_id: url_id }, data: { url: url } });
}

export async function deleteUrl(url_id: number){
  const prisma = getPrisma();
  return prisma.urls.delete({ where: { url_id: url_id } });
}

export async function createUrl(url: string, message_id: number){
  const prisma = getPrisma();
  return prisma.urls.create({ data: { url: url , message_id: message_id} });
}

export async function getUrlsLate(num: number){
  const prisma = getPrisma();
  return prisma.urls.findMany({ take: num, orderBy: { extracted_at: 'desc' } });
}

export async function getUrlsByPageNum(pageNum: number){
  const prisma = getPrisma();
  return prisma.urls.findMany({ skip: (pageNum - 1) * 10, take: 10, orderBy: { extracted_at: 'desc' } });
}

// UrlClicked
export async function getUrlClicked() {
  const prisma = getPrisma()
  return prisma.urlClicked.findMany();
}

export async function getUrlClickedById(clicked_id: number){
  const prisma = getPrisma();
  return prisma.urlClicked.findUnique({ where: { clicked_id: clicked_id } });
}

export async function updateUrlClickedTimes(clicked_id: number, clicked_times: number){
  const prisma = getPrisma();
  return prisma.urlClicked.update({ where: { clicked_id: clicked_id }, data: { clicked_times: clicked_times } });
}

export async function deleteUrlClicked(clicked_id: number){
  const prisma = getPrisma();
  return prisma.urlClicked.delete({ where: { clicked_id: clicked_id } });
}

export async function createUrlClicked(url_id: number, clicked_times: number){
  const prisma = getPrisma();
  return prisma.urlClicked.create({ data: { url_id: url_id , clicked_times: clicked_times} });
}
