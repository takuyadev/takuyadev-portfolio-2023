// Packages
import Head from "next/head"
import axios from "axios"
import styled from "styled-components"
import { motion } from "framer-motion"

// Animation
import {
  stgerFadeDownAnim,
  stgerFadeDownItem,
} from "@/modules/animation/stgerFadeDown"

// Components
import Main from "@/atoms/containers/Main"
import Item from "@/atoms/text/Item"
import Paragraph from "@/atoms/text/Paragraph"
import List from "@/atoms/text/List"
import HeadingUlr from "@/molecules/text/HeadingUlr"
import PageHeader from "@/organisms/general/PageHeader"
import ContactForm from "@/organisms/contacts/ContactForm"
import ServiceGallery from "@/organisms/contacts/ServiceGallery"
import SocialButtons from "@/molecules/navigation/SocialBtns"
import { propsErrorHandler } from "@/utils/propsErrorHandler"

// Styled Components
const ContactSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1em;
`

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(450px, 450px) 1fr;
  gap: 2em;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

const TextContainer = styled.article`
  overflow-y: hidden;
  display: grid;
  gap: 1em;
  flex-direction: column;
`

const ServiceSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
`

const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
  padding-bottom: 2em;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

function Contact({ data, env, isClosed, setIsClosed }) {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta property="og:title" content="Contact" key="title" />
        <meta
          name="description"
          content="If you're interested in starting and creating a website, please feel free to contact me through this page!"
        />
      </Head>
      <PageHeader
        title="Contact"
        subtitle="Leave me a message for any work inquiries"
        isClosed={isClosed}
        setIsClosed={setIsClosed}
      />
      <Main variants={stgerFadeDownAnim} initial="hidden" animate="show">
        <ContactSection variants={stgerFadeDownItem}>
          <ContactContainer>
            <TextContainer>
              <HeadingUlr>Send me a message</HeadingUlr>
              <Paragraph>
                {"I'm"} always interested and would love to hear and be involved
                in your projects! If you are interested in contacting me,
                currently, I am open to working the following services:
              </Paragraph>
              <List isOrdered={false}>
                <Item>Front-end Developer</Item>
                <Item>Fullstack Developer</Item>
                <Item>UX/UI Developer</Item>
              </List>
              <Paragraph>
                You can also reach out to me at the platforms below. I look
                forward to hearing more from you!
              </Paragraph>
              <SocialButtons />
            </TextContainer>
            {env && <ContactForm env={env} />}
          </ContactContainer>
        </ContactSection>
        <ServiceSection variants={stgerFadeDownItem}>
          <HeadingUlr>Services</HeadingUlr>
          <ServiceContainer></ServiceContainer>
          {data && <ServiceGallery data={data.service} />}
        </ServiceSection>
      </Main>
    </>
  )
}

// Static Site Generation
export async function getStaticProps() {
  try {
    const { data } = await axios.get(`${process.env.WEBSITE_URL}/api/contacts`)
    return {
      props: {
        data: data,
        env: {
          TEMPLATE_ID: process.env.TEMPLATE_ID,
          PUBLIC_KEY: process.env.PUBLIC_KEY,
          SERVICE_ID: process.env.SERVICE_ID,
        },
      },
    }
  } catch (error) {
    return {
      props: {
        data: null,
        env: null,
      },
    }
  }
}

export default Contact
