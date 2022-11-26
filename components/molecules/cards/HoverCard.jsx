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

const BoldParagraph = styled(Paragraph)`
  font-weight: bold;
`

const StyledCard = styled(ImageCard)`
  transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    transform: translateY(-8px);
  }
`

const Hover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1em;
  gap: 1em;
  opacity: 0;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.dark.dark}BB;

  &:hover {
    animation: ${fade} 0.5s forwards;
  }
`

const ImageCTACard = forwardRef(({ title, img, href }, ref) => (
  <StyledCard ref={ref} img={img}>
    <Hover>
      <BoldParagraph>{title}</BoldParagraph>
      <PrimaryBtn
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        text="View Certificate"
      />
    </Hover>
  </StyledCard>
))

// Settings & Exports
ImageCTACard.displayName = "CertificateCard"

export default ImageCTACard
