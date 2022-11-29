// Packages
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

function Contact({ service, isClosed, setIsClosed }) {
  return (
    <>
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
            <ContactForm />
          </ContactContainer>
        </ContactSection>
        <ServiceSection variants={stgerFadeDownItem}>
          <HeadingUlr>Services</HeadingUlr>
          <ServiceContainer></ServiceContainer>
          <ServiceGallery data={service} />
        </ServiceSection>
      </Main>
    </>
  )
}

// Static Site Generation
export async function getStaticProps() {
  const { data } = await axios.get(`${process.env.WEBSITE_URL}/api/contacts`)

  return {
    props: {
      service: data.service,
    },
  }
}

export default Contact
