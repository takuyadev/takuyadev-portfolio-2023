// Packages
import { forwardRef } from "react"
import { motion } from "framer-motion"
import styled, { keyframes } from "styled-components"
import { BsGithub } from "react-icons/bs"
import { HiGlobe } from "react-icons/hi"

// Components
import ImageCard from "@/atoms/cards/ImageCard"
import Paragraph from "@/atoms/text/Paragraph"
import CircleBtn from "@/atoms/buttons/CircleBtn"

// Styled Components
const Out = keyframes`
  0%{
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const In = keyframes`
  from{
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const BoldParagraph = styled(Paragraph)`
  font-weight: bold;
  text-overflow: ellipsis;
`

const StyledCard = styled(ImageCard)`
  text-overflow: ellipsis;
  height: 250px;
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
  animation: ${In} 0.5s forwards;

  &:hover {
    animation: ${Out} 0.5s forwards;
  }
`

const Opaque = styled.div`
  height: inherit;
  width: inherit;
  background: ${({ theme }) => theme.dark.dark}99;
`

const ButtonsCont = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1em;
`

const ProjectCard = forwardRef(
  ({ title, img, live, github, className }, ref) => (
    <StyledCard ref={ref} className={className} img={img}>
      <Opaque>
        <Hover>
          <BoldParagraph>{title}</BoldParagraph>
          <ButtonsCont>
            <CircleBtn
              as="a"
              href={live}
              target="_blank"
              aria-label={`Check live website for ${title}`}
              rel="noopener noreferrer"
              icon={<HiGlobe size={24} />}
            />
            {github && (
              <CircleBtn
                as="a"
                href={github}
                target="_blank"
                aria-label={`Github page for ${title}`}
                rel="noopener noreferrer"
                icon={<BsGithub size={24} />}
              />
            )}
          </ButtonsCont>
        </Hover>
      </Opaque>
    </StyledCard>
  )
)

// Settings & Exports
ProjectCard.displayName = "ProjectCard"

export default ProjectCard
