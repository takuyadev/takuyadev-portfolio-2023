// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import { SparklesIcon } from "@heroicons/react/24/solid"

// Components
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn"
import SectionBorder from "@/atoms/containers/SectionBorder"
import Heading3 from "@/atoms/text/Heading3"
import Heading4 from "@/atoms/text/Heading4"
import Paragraph from "@/atoms/text/Paragraph"
import ItemList from "@/atoms/text/ItemList"

// Styled Components

const StyledSubtitle = styled(Heading4)`
  opacity: 0.5;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
`

const StyledItemList = styled(ItemList)`
  margin-bottom: 0.5em;
`

// Component
const ExperienceCard = forwardRef(
  ({ title, subtitle, time, description, list, href, className }, ref) => (
    <SectionBorder ref={ref} className={className}>
      <Header>
        <Heading3>{title}</Heading3>
        <StyledSubtitle>
          {subtitle}
          {", "}
          <time>{time}</time>
        </StyledSubtitle>
      </Header>
      <Paragraph>{description}</Paragraph>
      <StyledItemList isOrdered={false} data={list} />
      {href && (
        <PrimaryBtn
          as="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          text="More details"
          icon={<SparklesIcon />}
        />
      )}
    </SectionBorder>
  )
)

// Settings & Exports
ExperienceCard.displayName = "Gallery"

export default ExperienceCard
