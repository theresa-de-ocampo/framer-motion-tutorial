import Head from 'next/head'
import Box1 from '../components/Box1'
import Box2 from '../components/Box2'
import Box3 from '../components/Box3'
import Box4 from '../components/Box4'

export default function Home() {
  return (
    <>
      <Head>
        <title>Framer Motion</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box4 />
      <Box3 />
      <Box1 />
      <Box2 />
    </>
  )
}
