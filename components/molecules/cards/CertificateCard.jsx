// Packages
import { forwardRef } from "react"
import styled, { keyframes } from "styled-components"

// Components
import ImageCard from "@/atoms/cards/ImageCard"
import Paragraph from "@/atoms/text/Paragraph"
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn"

// Styled Components
// ? Decided against importing previously created Anchor Component due to complications
const fade = keyframes`
   0% {
      opacity: 0;
   }
   100% {
      opacity: 1;
   }
`

const Anchor = styled.a`
  color: ${({ theme }) => theme.light.main};
  font-weight: bold;
  text-decoration: none;
`

const BoldParagraph = styled(Paragraph)`
  font-weight: bold;
`

const StyledCard = styled(ImageCard)`
  position: relative;
  overflow: hidden;
  transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    transform: translateY(-8px);
    & a {
      pointer-events: fill;
    }
  }
`

const Hover = styled.div`
  display: flex;
  padding: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1em;
  opacity: 0;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.dark.dark}BB;
  & > a {
    pointer-events: none;
  }
  &:hover {
    animation: ${fade} 0.5s forwards;
  }
`

const CertificateCard = forwardRef(({ title, img, href }, ref) => (
  <StyledCard img={img}>
    <Hover>
      <BoldParagraph>{title}</BoldParagraph>
      <Anchor href={href} target="_blank" rel="noopener noreferrer">
        <PrimaryBtn text="View Certificate" />
      </Anchor>
    </Hover>
  </StyledCard>
))

// Settings & Exports
CertificateCard.displayName = "CertificateCard"

export default CertificateCard
