import { PrismaClient, Messages, Urls, UrlClicked } from '@prisma/client'
import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { getMessages, getUrlsLate } from '~/db.server'


import Button from '~/components/ButtonComponent/Button'
import Fukidashi from '~/components/FukidashiComponent/Fukidashi'


export const mete: MetaFunction = () => {
  return [
    { title: 'Remix Start' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export const loader = async () => {
  const messages = await getMessages()
  const urlsLate = await getUrlsLate(3)

  return { messages, urlsLate}
}

const handleLargeClicked = () => {
  window.location.href = '/urls'
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため+1する
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}

export default function Index() {
  const { messages, urlsLate } = useLoaderData<typeof loader>()
  return (
    <div className="min-w-full">
      <div className='bg-light-gray h-[700px]'>
        <div className='text-white pt-24 mx-8 flex justify-center text-2xl font-bold'>
          ここは見逃しちゃったURLたちを管理しちゃおう！っていうページです。
        </div>
        <div className='text-white mt-8 mx-8 flex justify-center text-xl'>
          制作者: kazuma, ryotaro
        </div>
        <div className='text-white mt-16 mx-8 flex justify-center text-xl'>
          このボタンでURL一覧見れます
        </div>
        <div className='flex justify-center mt-8'>
          <Button text="URL一覧はこちら！" size="large"  onClick={handleLargeClicked} />
        </div>
        <div className='flex justify-center mt-24 mx-8 text-white'>この下にも最近の投稿とかあるのでぜひ見てほしい、おねがいしますん</div>
      </div>
      <div className='bg-golden-yellow h-[700px]'>
        <div className='flex justify-center pt-12 text-2xl font-bold'>～最近の投稿～</div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title={urlsLate[0].title} url={urlsLate[0].url} date={formatDate(urlsLate[0].extracted_at)} position="right" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title={urlsLate[1].title} url={urlsLate[1].url} date={formatDate(urlsLate[1].extracted_at)} position="left" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title={urlsLate[2].title} url={urlsLate[2].url} date={formatDate(urlsLate[2].extracted_at)} position="right" />
        </div>
      </div>
      <div className='bg-rust-red h-[700px]'>
      <div className='flex justify-center pt-12 text-2xl font-bold'>～統計情報～</div>
      </div>
    </div>
  )
}
