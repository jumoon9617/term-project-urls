import { PrismaClient, Messages, Urls, UrlClicked } from '@prisma/client'
import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import styles from './route.module.css'

const prisma = new PrismaClient()

export const mete: MetaFunction = () => {
  return [
    { title: 'Remix Start' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
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
    <div>
      <div className={styles.title}>Welcome to Term Project!</div>
      <div>This is top page</div>
      <hr />
      <div>Messages</div>
      <ul>
        {messages.map((message) => (
          <li key={message.message_id}>{message.message_text}</li>
        ))}
      </ul>
    </div>
  )
}
