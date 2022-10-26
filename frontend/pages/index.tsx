import { Note } from "@/components/Notes/Notes";
import styled from "@emotion/styled";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
// import Image from 'next/image'
// Note
// styled
import { Note as NoteType, Response } from "@/types";

const NoteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  margin: 2vw 1vw;
  width: 100vw;
`;

type NoteResponse = Response<NoteType[]>;

export const getStaticProps: GetStaticProps = async () => {
  const api_url = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const response = await fetch(`${api_url}/notes?populate=*`, {
    method: "GET",
  });
  const { data: notes, meta, error }: NoteResponse = await response.json();

  const status = error?.status;
  if (status && (status < 200 || status >= 300)) {
    return {
      props: {
        notes: [],
        meta: {},
      },
    };
  }
  return {
    props: {
      notes,
      meta: meta,
    },
  };
};

const Home: NextPage<{
  notes: NoteType[];
}> = ({ notes }) => (
  <>
    <Head>
      <title>mnplus</title>
      <meta name="description" content="created by generating a nextap" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NoteWrapper>
      {notes
        .map(() => (
          <Note
            key={Math.random()}
            header="marini po degjon balthazar"
            link="/balthazar"
            imageProps={{
              width: 1368,
              height: 770,
              alt: "random foto",
              src: "https://picsum.photos/seed/picsum/1368/770",
            }}
          >
            <>
              React is a weird library for javascript when people get overexited
              for something it can have more sense.
              <ul>
                <li>first what is react</li>
                <li>reason to switch to vue</li>
                <li>
                  things that meaby will make you switch that sometimes i fell{" "}
                </li>
              </ul>
            </>
          </Note>
        ))}
    </NoteWrapper>
  </>
);

export default Home;
