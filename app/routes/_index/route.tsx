import { PrismaClient, Messages, Urls, UrlClicked } from '@prisma/client'
import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { getMessages } from '~/db.server'


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
  return { messages }
}

const handleLargeClicked = () => {
  window.location.href = '/urls'
}

export default function Index() {
  return (
    <div className="min-w-full">
      <div className='bg-light-gray h-[600px]'>
        <div className='text-white pt-24 mx-8 flex justify-center text-2xl font-bold'>
          ここは見逃しちゃったURLたちを管理しちゃおう！っていうページです。
        </div>
        <div className='text-white mt-8 mx-8 flex justify-center text-xl'>
          制作者: kazuma, ryotaro
        </div>
        <div className='text-white mt-16 mx-8 flex justify-center text-xl'>
          このボタンでURL一覧見れます
        </div>
        <div className='flex justify-center'>
          <Button text="URL一覧はこちら！" size="large"  onClick={handleLargeClicked} />
        </div>
        <div className='flex justify-center mt-24 mx-8 text-white'>この下にも最近の投稿とかあるのでぜひ見てほしい、おねがいしますん</div>
      </div>
      <div className='bg-golden-yellow h-[800px]'>
        <div className='flex justify-center pt-48 text-2xl'>～最近の投稿～</div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title="RIGHT" url="URL" date="2025/1/3" position="right" />
        </div>
        <div className='flex justify-center mt-8'>
          <Fukidashi title="LEFT" url="https://game-tabi.com/shirodora-badge/charset.php#google_vignette" date="2025/1/7" position="left" />
        </div>
      </div>
    </div>
  )
}
