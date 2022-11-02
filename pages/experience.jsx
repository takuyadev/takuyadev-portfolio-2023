// Packages
import styled from "styled-components"

// Components
import PageHeader from "@/organisms/general/PageHeader"
import Heading from "@/atoms/text/Heading"
import Heading2 from "@/atoms/text/Heading2"
import Subtitle from "@/atoms/text/Subtitle"
import Paragraph from "@/atoms/text/Paragraph"

// Animations
import {
  staggerAnimation,
  staggerItem,
} from "@/modules/config/animation/staggerFade"

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;
`
const List = styled.ul``

const Item = styled.li``

function Experience() {
  return (
    <>
      <PageHeader
        title="Experience"
        subtitle="My experience and achievements in both educational and work environments"
      />
      <Article>
        <Heading>Education</Heading>
        <Section>
          <Heading2>Digital Design & Development</Heading2>
          <Subtitle>British Columbia, Institute of Technology</Subtitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
            sollicitudin metus. Suspendisse rutrum magna sollicitudin gravida
            ornare. Quisque orci nisl, tempus vel dui eget, maximus venenatis
            urna. Morbi gravida non ex et sodales. Nulla vestibulum urna in
            massa ornare convallis. Nunc convallis laoreet eros in dignissim.
            Nunc commodo venenatis dictum. Nunc sollicitudin lorem a ligula
            cursus, eget ultrices sapien auctor.
          </Paragraph>
          <List>
            <Item>hello</Item>
            <Item>hello</Item>
            <Item>hello</Item>
            <Item>hello</Item>
            <Item>hello</Item>
          </List>
        </Section>{" "}
        <Section>
          <Heading2>The Frontend Developer Career Path</Heading2>
          <Subtitle>Scrimba</Subtitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
            sollicitudin metus. Suspendisse rutrum magna sollicitudin gravida
            ornare. Quisque orci nisl, tempus vel dui eget, maximus venenatis
            urna. Morbi gravida non ex et sodales. Nulla vestibulum urna in
            massa ornare convallis. Nunc convallis laoreet eros in dignissim.
            Nunc commodo venenatis dictum. Nunc sollicitudin lorem a ligula
            cursus, eget ultrices sapien auctor.
          </Paragraph>
          <List>
            <Item>hello</Item>
            <Item>hello</Item>
            <Item>hello</Item>
            <Item>hello</Item>
            <Item>hello</Item>
          </List>
        </Section>
      </Article>
      <Article>
        <Heading>Work</Heading>
        <Section>
          <Heading2>ScopeX</Heading2>
          <Subtitle>British Columbia, Institute of Technology</Subtitle>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
            sollicitudin metus. Suspendisse rutrum magna sollicitudin gravida
            ornare. Quisque orci nisl, tempus vel dui eget, maximus venenatis
            urna. Morbi gravida non ex et sodales. Nulla vestibulum urna in
            massa ornare convallis. Nunc convallis laoreet eros in dignissim.
            Nunc commodo venenatis dictum. Nunc sollicitudin lorem a ligula
            cursus, eget ultrices sapien auctor.
          </Paragraph>
          <List>
            <Item>hello</Item>
            <Item>hello</Item>
            <Item>hello</Item>
            <Item>hello</Item>
            <Item>hello</Item>
          </List>
        </Section>{" "}
        <Section>
          <Heading2>Visionary Productions</Heading2>
          <Subtitle>British Columbia, Institute of Technology</Subtitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
            sollicitudin metus. Suspendisse rutrum magna sollicitudin gravida
            ornare. Quisque orci nisl, tempus vel dui eget, maximus venenatis
            urna. Morbi gravida non ex et sodales. Nulla vestibulum urna in
            massa ornare convallis. Nunc convallis laoreet eros in dignissim.
            Nunc commodo venenatis dictum. Nunc sollicitudin lorem a ligula
            cursus, eget ultrices sapien auctor.
          </Paragraph>
          <List>
            <Item>hello</Item>
            <Item>hello</Item>
            <Item>hello</Item>
            <Item>hello</Item>
            <Item>hello</Item>
          </List>
        </Section>
      </Article>
    </>
  )
}

export default Experience
