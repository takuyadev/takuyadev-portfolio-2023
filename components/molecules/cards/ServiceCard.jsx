// Packages
import { forwardRef } from "react"
import Image from "next/image"
import styled from "styled-components"

// Components
import FigureCard from "@/atoms/cards/FigureCard"
import Heading3 from "@/atoms/text/Heading3"
import Paragraph from "@/atoms/text/Paragraph"

// Styled Components
const StyledCard = styled(FigureCard)`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 1em;
  background: ${({ theme }) => theme.dark.dark};

  & img {
    object-fit: cover;
  }
`

const FigCaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

// Component
const ServiceCard = forwardRef(
  ({ title, description, img, className }, ref) => (
    <StyledCard ref={ref} className={className}>
      <Image
        width={200}
        height={100}
        src={img}
        alt={img}
        quality={15}
        layout="responsive"
        style={{
          borderRadius: "8px",
          paddingBottom: "4px",
        }}
      />
      <FigCaption>
        <Heading3>{title}</Heading3>
        <Paragraph>{description}</Paragraph>
      </FigCaption>
    </StyledCard>
  )
)

// Settings & Exports
ServiceCard.displayName = "ServiceCard"

export default ServiceCard
