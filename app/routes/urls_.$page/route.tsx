import { PrismaClient } from '@prisma/client'
import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import Button from '~/components/ButtonComponent/Button'
import Fukidashi from '~/components/FukidashiComponent/Fukidashi'

const prisma = new PrismaClient()

export const mete: MetaFunction = () => {
  return [
    { title: 'Remix Start' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

const handleLargeClicked = () => {
  window.location.href = '/'
}

const handleSmallClickedNext = () => {
  window.location.href = '/urls/'
}

const handleSmallClickedBefore = () => {
  window.location.href = '/urls/'
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため+1する
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}

export const loader = async () => {
  const messages = await prisma.messages.findMany()
  const urls = await prisma.urls.findMany()
  const urlClicked = await prisma.urlClicked.findMany()
  return { messages, urls, urlClicked }
}

export default function Index() {
  const { messages, urls, urlClicked } = useLoaderData<typeof loader>()
  return (
    <div className="min-w-full relative">
      <div className='bg-light-gray h-[600px]'>
        <div className='text-white pt-24 mx-8 flex justify-center text-2xl font-bold'>
          ここはURL一覧のページです！
        </div>
        <div className='fixed right-0 top-1/2 mr-4'>
          <Button text="ホーム画面へ" size="small"  onClick={handleLargeClicked} />
        </div>
        <div className='flex justify-center mt-8'>
            <Fukidashi title={urls[0].title} url={urls[0].url} date={formatDate(urls[0].extracted_at)} position="right" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title={urls[1].title}url={urls[1].url} date={formatDate(urls[1].extracted_at)} position="left" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title={urls[2].title} url={urls[2].url} date={formatDate(urls[2].extracted_at)} position="right" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title={urls[3].title} url={urls[3].url} date={formatDate(urls[3].extracted_at)} position="left" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title={urls[4].title} url={urls[4].url} date={formatDate(urls[4].extracted_at)} position="right" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title={urls[5].title} url={urls[5].url} date={formatDate(urls[5].extracted_at)} position="left" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title={urls[6].title} url={urls[6].url} date={formatDate(urls[6].extracted_at)} position="right" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title={urls[7].title} url={urls[7].url} date={formatDate(urls[7].extracted_at)} position="left" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title={urls[8].title} url={urls[8].url} date={formatDate(urls[8].extracted_at)} position="right" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title={urls[9].title} url={urls[9].url} date={formatDate(urls[9].extracted_at)} position="left" />
        </div>
      </div>
      <div className='bg-golden-yellow h-[800px]'>
        
      </div>
      <div className='bg-rust-red h-[800px]'>
          <div className='absolute bottom-5 w-full flex justify-between px-5'>
            <div className='flex justify-start'>
              <Button text="前のページへ" size="small"  onClick={handleSmallClickedBefore} />
            </div>
            <div className='flex justify-end'>
              <Button text="次のページへ" size="small"  onClick={handleSmallClickedNext} />
          </div>
        </div>
      </div>
    </div>
  )
}
