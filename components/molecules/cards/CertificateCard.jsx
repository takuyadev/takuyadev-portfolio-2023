// Packages
import { forwardRef } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

// Components
import ImageCard from "@/atoms/cards/ImageCard"
import Paragraph from "@/atoms/text/Paragraph"
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn"

// Animation
import { fade } from "@/animation/fade"

// Styled Components
const BoldParagraph = styled(Paragraph)`
  font-weight: bold;
  text-overflow: ellipsis;
`

const StyledCard = styled(ImageCard)`
  text-overflow: ellipsis;
  height: 200px;
  transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    transform: translateY(-8px);
  }
`

const Hover = styled(motion.div)`
  position: relative;
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

  /* &:hover {
    animation: ${fade} 0.5s forwards;
  } */
`

const Opaque = styled.div`
  height: inherit;
  width: inherit;
  background: ${({ theme }) => theme.dark.dark}99;
`

const CertificateCard = forwardRef(({ title, img, href, className }, ref) => (
  <StyledCard ref={ref} className={className} img={img}>
    <Opaque>
      <Hover variants={fade} initial="initial" whileHover="animate">
        <BoldParagraph>{title}</BoldParagraph>
        <PrimaryBtn
          as="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          text="View Certificate"
        />
      </Hover>
    </Opaque>
  </StyledCard>
))

// Settings & Exports
CertificateCard.displayName = "CertificateCard"

export default CertificateCard
