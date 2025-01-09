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

const handleSmallClickedHome = () => {
  window.location.href = '/'
}

const handleSmallClickedDetails = () => {
  window.location.href = '/urls_.$urlId'
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
    <div className="min-w-full">
      <div className='bg-light-gray h-[600px]'>
        <div className='text-white pt-24 mx-8 flex justify-center text-2xl font-bold'>
          ここはURL一覧のページです！
        </div>
        <div className='flex justify-center mt-8'>
            <Fukidashi title="RIGHT" url={urls[0].url} date="2025/1/3" position="right" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title="LEFT" url={urls[1].url} date="2025/1/7" position="left" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title="RIGHT" url={urls[2].url} date="2025/1/3" position="right" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title="LEFT" url={urls[3].url} date="2025/1/7" position="left" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title="RIGHT" url={urls[4].url} date="2025/1/3" position="right" />
        </div>
        <div className='fixed right-0 top-1/2'>
          <Button text="ホーム画面へ" size="small"  onClick={handleSmallClickedHome} />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title="LEFT" url={urls[5].url} date="2025/1/7" position="left" />
        </div>
        <div className='fixed right-0 top-1/2'>
          <Button text="ホーム画面へ" size="small"  onClick={handleSmallClickedHome} />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title="LEFT" url={urls[6].url} date="2025/1/7" position="right" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title="LEFT" url={urls[7].url} date="2025/1/7" position="left" />
        </div>
      </div>
      <div className='bg-golden-yellow h-[800px]'>
        
      </div>
      <div className='bg-rust-red h-[800px]'>

          <div className='flex justify-between items-center h-full px-5'>
            <div className='flex justify-start'>
              <Button text="前のページへ" size="small"  onClick={handleSmallClickedHome} />
            </div>
            <div className='flex justify-end'>
              <Button text="次のページへ" size="small"  onClick={handleSmallClickedDetails} />
            
          </div>
        </div>
      </div>
    </div>
  )
}
