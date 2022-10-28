// Packages
import { forwardRef } from "react";
import styled from "styled-components";

// Component
import ImageCard from "@/atoms/cards/ImageCard";
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn"


// Styled Components
const StyledProjectCard = styled(ImageCard)`
position: relative;
   width: ${props => props.width ? props.width : "200px"};
   height: ${props => props.height ? props.height : "auto"};
   overflow: hidden;
`

const ButtonContainer = styled.div`
   display: flex;
   width: inherit;
   justify-content: flex-end;
   gap: 1em;
`

const TextContainer = styled.figcaption`

`

const Content = styled.div`
   position: absolute;
   height:inherit;
   width:inherit;
   opacity: 0;
   background: linear-gradient(360deg, #0C2840 6.45%, rgba(17, 58, 93, 0.35) 45.92%);
   transition: opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1);

   :hover{
      opacity: 1;
   }
`

// Component
const ProjectCard = forwardRef(({ img, width, height }, ref) => (
   <StyledProjectCard
      ref={ref}
      img={img}
      width={width}
      height={height}
   >
      <Content>
         <ButtonContainer>

         </ButtonContainer>
         <TextContainer>

         </TextContainer>
      </Content>
   </StyledProjectCard>
))

// Settings & Export
ProjectCard.displayName = "Project Card"

export default ProjectCard