import { PrismaClient } from '@prisma/client'
import type { MetaFunction, LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData, useLocation, useNavigate } from '@remix-run/react'

import { getMessages, getUrls } from '~/db.server'

import Button from '~/components/ButtonComponent/Button'
import Fukidashi from '~/components/FukidashiComponent/Fukidashi'

const prisma = new PrismaClient()

export const meta: MetaFunction = () => {
  return [
    { title: 'urls' },
    { content: 'this is urls page' },
  ]
}

const handleLargeClicked = () => {
  window.location.href = '/'
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため+1する
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const pageNum = parseInt(params.page || '1'); // 初期ページは1
  if (isNaN(pageNum) || pageNum <= 0) {
    throw new Response("Invalid Page Number", { status: 400 });
  }
  const urls = await getUrls();
  return { urls, pageNum };
}

export default function Urls() {
  const { urls, pageNum } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  // 次のページに移動する
  const handleNextPage = () => {
    navigate(`/urls/${pageNum + 1}`);
  };

  // 前のページに移動する
  const handlePreviousPage = () => {
    if (pageNum > 1) {
      navigate(`/urls/${pageNum - 1}`);
    }
  };

  const handleFukidashiClicked = (id: number) => {
    window.location.href = `/urls/details/${id}`
  }

  return (
    <div className="min-w-full relative">
      <div className="bg-light-gray h-[600px]">
        <div className="text-white pt-24 mx-8 flex justify-center text-2xl font-bold">
          ここはURL一覧のページです！
        </div>
        <div className="fixed right-0 top-1/2 mr-4">
          <Button text="ホーム画面へ" size="small" onClick={handleLargeClicked} />
        </div>
        {urls.map((url, index) => (
          <div key={url.url_id} className="flex justify-center mt-8">
            <Fukidashi
              title={url.title}
              url={url.url}
              date={formatDate(url.extracted_at)}
              position={index % 2 === 0 ? "right" : "left"}
              urlId={url.url_id}
              onClick={handleFukidashiClicked}
            />
          </div>
        ))}
      </div>
      <div className="bg-golden-yellow h-[800px]"></div>
      <div className="bg-rust-red h-[800px]">
        <div className="absolute bottom-5 w-full flex justify-between px-5">
          <div className="flex justify-start">
            <Button
              text="前のページへ"
              size="small"
              onClick={handlePreviousPage}
              disabled={pageNum === 1} // 1ページ目では無効化
            />
          </div>
          <div className="flex justify-end">
            <Button
              text="次のページへ"
              size="small"
              onClick={handleNextPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
