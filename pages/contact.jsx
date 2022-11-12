// Packages
import styled from "styled-components"
import React, { useRef } from "react"
import { motion } from "framer-motion"

// Components
import Main from "@/atoms/containers/Main"
import PageHeader from "@/organisms/general/PageHeader"
import HeadingUlr from "@/molecules/HeadingUlr"
import Paragraph from "@/atoms/text/Paragraph"
import IconLinks from "@/molecules/IconLinks"
import Input from "@/atoms/Input"

// Modules
import { sendEmail } from "@/utils/sendEmail"
import List from "@/atoms/List"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  min-height: 600px;
  border-radius: 8px;
`

const Section = styled.section`
  display: grid;
  gap: 3em;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const TextArea = styled(Input)`
  height: 100%;
`

function Contact() {
  const form = useRef()

  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Contact form for people with interest with my work"
      />
      <Main>
        <Section>
          <Container>
            <HeadingUlr>Send me a message</HeadingUlr>
            <Paragraph>
              Intersted in my work? Please feel free to shoot me a message
              through the form, and Ill respond as soon as I can. Currently, I'm
              open to positions and inquries for:
            </Paragraph>
            <List
              isOrdered={false}
              data={[
                "Frontend Development",
                "Fullstack Development",
                "UX/UI Design",
              ]}
            ></List>
            <Paragraph>
              You can also contact me under my other platforms.
            </Paragraph>
            <IconLinks />
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
        </Section>
      </Main>
    </>
  )
}

// pages/index.js
export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Contact
