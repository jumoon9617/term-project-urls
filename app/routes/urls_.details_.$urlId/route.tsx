import type { MetaFunction, LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import DetailsTitle from '~/components/DetailsTitleComponent/DetailsTitle'
import { getMessage, getUrl } from '~/db.server'

import Button from '~/components/ButtonComponent/Button'

export const mete: MetaFunction = () => {
  return [
    { title: 'URL Details' },
    { content: 'this is url details page' },
  ]
}

const handleLargeClicked = () => {
  window.location.href = '/'
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const urlId = parseInt(params.urlId || '0')
  if (isNaN(urlId) || urlId <= 0) {
    throw new Response("Invalid URL ID", { status: 400 })
  }
  const url = await getUrl(urlId)
  if (!url) {
    throw new Response("URL not found", { status: 404 })
  }

  const userName = await getUserByUrl(urlId)
  const date = formatDate(url.extracted_at)
  return { url, userName, date }
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため+1する
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}

async function getUserByUrl(urlId: number){
  const url = await getUrl(urlId)
  if  (!url) throw new Error('url not found')
  const message_id = url.message_id
  if (!message_id) throw new Error('message_id not found')
  const message = await getMessage(message_id)
  if (!message) throw new Error('message not found')
  const message_user = message.send_user_name
  if (!message_user) throw new Error('message_user not found')
  return message_user
}

export default function Index() {
  const { url, userName, date } = useLoaderData<typeof loader>()
  return (
    <div className="min-w-full">
      <div className='bg-light-gray h-[700px]'>
        <div className='text-white pt-24 mx-8 flex justify-center text-2xl font-bold'>
          ここはURL詳細のページです！
        </div>
        <div className='fixed right-0 top-1/2 mr-4'>
          <Button text="ホーム画面へ" size="small"  onClick={handleLargeClicked} />
        </div>
        <div className='mx-6 pt-12 text-2xl font-bold '>
          <DetailsTitle title={url.title} url={url.url} userName={userName} date={date} />
        </div>
      </div>
      <div className='bg-golden-yellow h-[700px]'>
      
      </div>
      <div className='bg-rust-red h-[700px]'>
      </div>
    </div>
  )
}
