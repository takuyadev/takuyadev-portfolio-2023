// Packages
import axios from "axios"
import styled from "styled-components"
import React, { useRef } from "react"

// Components
import Main from "@/atoms/containers/Main"
import PageHeader from "@/organisms/general/PageHeader"
import HeadingUlr from "@/molecules/HeadingUlr"
import Paragraph from "@/atoms/text/Paragraph"
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn"
import MailIcon from "@/atoms/icons/MailIcon"
import List from "@/atoms/List"
import GithubIcon from "@/atoms/icons/GithubIcon"
import LinkedInIcon from "@/atoms/icons/LinkedInIcon"
import Input from "@/atoms/Input"
import ServiceGallery from "@/organisms/contacts/ServiceGallery"

// Modules
import { sendEmail } from "@/utils/sendEmail"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  border-radius: 8px;
`

const Section = styled.section`
  gap: 3em;
`

const SectionRow = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

const ServiceSection = styled(Section)`
  display: grid;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const TextArea = styled(Input)`
  height: 100%;

  & > input {
    height: 100%;
  }
`

const ButtonContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 1em;

  & svg {
    fill: ${(props) => props.theme.colors.dark};
  }

  &:hover {
    fill: ${(props) => props.theme.colors.light};
  }
`
const InlineBtn = styled(PrimaryBtn)`
  width: fit-content;
`

function Contact({ service }) {
  const form = useRef()

  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Contact form for people with interest with my work"
      />
      <Main>
        <HeadingUlr>Send me a message</HeadingUlr>
        <SectionRow>
          <Container>
            <Paragraph>
              I'm always interested and would love to hear and be involved in
              your projects! If you are interested in contacting me, currently,
              I am open to working the following services:
            </Paragraph>
            <List isOrdered={false} data={service.map((item) => item.title)} />
            <Paragraph>
              You can also reach out to me at the platforms below. I look
              forward to hearing more from you!
            </Paragraph>
            <ButtonContainer>
              <InlineBtn icon={<MailIcon />} text="Email" />
              <InlineBtn icon={<GithubIcon />} text="Github" />
              <InlineBtn icon={<LinkedInIcon />} text="LinkedIn" />
            </ButtonContainer>
          </Container>
          <Form ref={form} onSubmit={(e) => sendEmail(e, form)}>
            <Input label="Name" placeholder="ex. John Doe" name="user_name" />
            <Input
              type="email"
              label="Email Address"
              placeholder="ex. example@address.com"
              name="email"
            />
            <TextArea type="textarea" label="Message" name="message" />
            <input type="submit" value="Send" />
          </Form>
        </SectionRow>
        <ServiceSection>
          <HeadingUlr>Services</HeadingUlr>
          <ServiceGallery data={service} />
        </ServiceSection>
      </Main>
    </>
  )
}

// Static Site Generation
export async function getStaticProps() {
  const { data } = await axios.get(`http://localhost:3000/api/contacts`)

  return {
    props: {
      service: data.service,
    },
  }
}

export default Contact
