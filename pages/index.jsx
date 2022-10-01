// Packages
import styled from 'styled-components'
import Head from 'next/head'
import { Sidebar } from './components/organisms/Sidebar'

const Main = styled.main`
  display:grid;
  grid-template-areas: "sidebar content";
  grid-template-columns: repeat(4, 1fr);
`

const Content = styled.div`
  grid-area: content;
  grid-column: span 2;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Sidebar/>
        <Content/>
      </Main>
    </div>
  )
}
