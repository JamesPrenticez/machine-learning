import Head from 'next/head'
import { Collapsible } from '../components/index'
import { components } from '../components'

export default function Home() {
  return (
    <div className='flex justify-center'>
      <Head>
        <title>Machine Learning</title>
        <meta name="description" content="AI bb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='max-w-7xl w-full'>
        <h1 className='flex items-center justify-center text-3xl font-helvetica h-20 bg-blue-600'>Machine Learning</h1>

        {components.map((item, index) => {
          return(
            <Collapsible key={index} title={`${item.id}. ${item.name}`}>
              {item.component}
            </Collapsible>
          )
        })}
      </main>
    </div>
  )
}
