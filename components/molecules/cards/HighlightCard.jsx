// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import Image from "next/image"
import { HiGlobe } from "react-icons/hi"
import { BsGithub } from "react-icons/bs"

// Components
import FigureCard from "@/atoms/cards/FigureCard"
import Line from "@/atoms/other/Line"
import Caption from "@/atoms/text/Caption"
import Heading3 from "@/atoms/text/Heading3"
import Paragraph from "@/atoms/text/Paragraph"
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn"
import Anchor from "@/atoms/text/Anchor"
import NoSelectImage from "@/atoms/other/NoSelectImage"

// Styled Components
const StyledCard = styled(FigureCard)`
  display: flex;
  flex-direction: column;
  gap: 1em;
  background: #0c284099;
  & img {
    object-fit: cover;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 1em;
`

// ------------------- //

const StyledTitle = styled(Heading3)`
  white-space: nowrap;
`

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.light.main}99;
`

const StyledLine = styled(Line)`
  width: 80%;
  transform: translateY(calc(-1em + -2px));
`

const ButtonsCont = styled.div`
  display: flex;
  justify-content: space-between;
`

// Component
const HighlightCard = forwardRef(
  ({ img, title, description, href, className }, ref) => (
    <StyledCard ref={ref} className={className}>
      <NoSelectImage>
        <Image
          layout="responsive"
          height={50}
          width={100}
          src={img}
          alt={`${img}`}
          priority={true}
          style={{
            borderRadius: "8px 8px 0 0",
          }}
        />
      </NoSelectImage>

      <StyledLine />
      <Container>
        <Caption>
          <StyledTitle>{title}</StyledTitle>
          <StyledParagraph>{description}</StyledParagraph>
        </Caption>
        <ButtonsCont>
          <PrimaryBtn
            as="a"
            href={href}
            aria-label={`Check live website for ${title}`}
            icon={<HiGlobe />}
            target="_blank"
            rel="noopener noreferrer"
            text="Check live"
          />
          <Anchor
            icon={<BsGithub size={24} />}
            aria-label={`Github page for ${title}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          />
        </ButtonsCont>
      </Container>
    </StyledCard>
  )
)

// Settings & Exports
HighlightCard.displayName = "Highlight Card"

HighlightCard.defaultProps = {
  href: "/",
  img: "/img/dummy/1.webp",
  title: "title",
  description: "title",
}

export default HighlightCard
