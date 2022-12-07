// Packages
import { forwardRef } from "react"
import styled from "styled-components"

import {
  SiFigma,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiInvision,
  SiMiro,
} from "react-icons/si"

// Components
import ToolsCard from "@/molecules/cards/ToolsCard"
import HeadingUlr from "@/molecules/text/HeadingUlr"
import IconContainer from "@/molecules/container/IconWithCaption"
import Paragraph from "@/atoms/text/Paragraph"

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

// Component
const DesignGallery = forwardRef(({ className }, ref) => (
  <Container ref={ref} className={className}>
    <HeadingUlr>Design</HeadingUlr>
    <ToolsCard>
      <IconContainer caption="Figma">
        <SiFigma size={36} />
      </IconContainer>
      <IconContainer caption="Photoshop">
        <SiAdobephotoshop size={36} />
      </IconContainer>
      <IconContainer caption="Illustrator">
        <SiAdobeillustrator size={36} />
      </IconContainer>
      <IconContainer caption="After Effects">
        <SiAdobeaftereffects size={30} />
      </IconContainer>
      <IconContainer caption="Premiere Pro">
        <SiAdobepremierepro size={36} />
      </IconContainer>
      <IconContainer caption="Audition">
        <SiAdobeaudition size={36} />
      </IconContainer>
      <IconContainer caption="XD">
        <SiAdobexd size={36} />
      </IconContainer>
      <IconContainer caption="InVision">
        <SiInvision size={36} />
      </IconContainer>
      <IconContainer caption="Miro">
        <SiMiro size={36} />
      </IconContainer>
    </ToolsCard>
  </Container>
))

// Settings & Exports
DesignGallery.displayName = "DesignGallery"

export default DesignGallery
