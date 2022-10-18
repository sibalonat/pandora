import { Note } from '@/components/Notes/Notes'
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
// Note
// styled

const NoteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  margin: 2vw 1vw;
  width: 100vw;
`

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>mnplus</title>
        <meta name='description' content='created by generating a nextap' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NoteWrapper>
        {Array(4)
        .fill("")
        .map(() => (
           <Note
           key={Math.random()}
           header='marini po degjon balthazar'
           link='/balthazar'
           imageProps={{
             width: 1368,
             height: 770,
             alt: "random foto",
             src: "https://picsum.photos/seed/picsum/1368/770"
           }}
         >
           <>
             React is a weird library for javascript when people get overexited for something it can have more sense.
             <ul>
               <li>first what is react</li>
               <li>reason to switch to vue</li>
               <li>things that meaby will make you switch that sometimes i fell </li>
             </ul>
           </>
         </Note>
        ))}
      </NoteWrapper>
    </>
  )
}

export default Home
