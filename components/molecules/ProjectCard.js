// Packages
import { forwardRef } from "react";
import styled from "styled-components";

// Component
import ImageCard from "@/atoms/cards/ImageCard";

// Styled Components
const StyledProjectCard = styled(ImageCard)`
   width: ${props => props.width ? props.width : "200px"};
   height: ${props => props.height ? props.height : "auto"};
`

const ProjectCard = forwardRef(({ children, img, width, height }, ref) => (
   <StyledProjectCard
      ref={ref}
      img={img}
      width={width}
      height={height}
   >
      {children}
   </StyledProjectCard>
))

// Settings & Export
ProjectCard.displayName = "Project Card"

export default ProjectCard