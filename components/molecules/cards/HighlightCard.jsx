// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import Image from "next/image"
import {
  HiAcademicCap,
  HiBriefcase,
  HiGlobe,
  HiUserCircle,
} from "react-icons/hi"
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
import Inline from "@/atoms/containers/Inline"
import HoverContext from "@/atoms/other/HoverContext"

// Styled Components
const StyledCard = styled(FigureCard)`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  min-height: fit-content;
  background: ${({ theme }) => theme.dark.dark};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  & img {
    object-fit: cover;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 1em;
  margin: 1em;
`

// ------------------- //

const StyledInline = styled(Inline)`
  margin-top: 0;
`

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.light.main}99;
`

const StyledLine = styled(Line)`
  width: 80%;
  height: 6px;
  transform: translateY(calc(-1em + -2px));
`

const ButtonsCont = styled.div`
  display: flex;
  justify-content: space-between;
`

// Component
const HighlightCard = forwardRef(
  (
    { img, title, type, location, description, live, github, className },
    ref
  ) => (
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
          <Heading3>{title}</Heading3>
          <StyledInline>
            <HoverContext text={type}>
              {type === "work" && <HiBriefcase size={24} />}
              {type === "education" && <HiAcademicCap size={24} />}
              {type === "personal" && <HiUserCircle size={24} />}
            </HoverContext>

            {location && <Paragraph>{location}</Paragraph>}
            {" - "}
          </StyledInline>
          <StyledParagraph>{description}</StyledParagraph>
        </Caption>
        <ButtonsCont>
          <PrimaryBtn
            as="a"
            href={live}
            aria-label={`Check live website for ${title}`}
            icon={<HiGlobe />}
            target="_blank"
            rel="noopener noreferrer"
            text="Check live"
          />
          {github && (
            <Anchor
              icon={<BsGithub size={24} />}
              aria-label={`Github page for ${title}`}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            />
          )}
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
