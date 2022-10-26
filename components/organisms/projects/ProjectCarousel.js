// Packages
import styled from "styled-components";
import { forwardRef } from "react";

// Components
import ProjectCard from "@/molecules/ProjectCard";

// Styled Components
const CarouselCont = styled.section`
   grid-column: span 4;
   width: 100%;
   height: fit-content;
   min-height: 400px;
   overflow-x: scroll;
   overflow-y: hidden;

`
const InnerCont = styled.div`
   display:inline-flex;
   align-items: center;
   gap: 1em;
`

const ProjectCarousel = forwardRef(({ data }, ref) => (
   <CarouselCont ref={ref}>
      <InnerCont>
         {data.map((val, i) => (
            <ProjectCard
               key={i}
               img="/img/dummy/1.webp"
               height="400px"
               width="700px"
            />
         ))}
      </InnerCont>
   </CarouselCont>
))

ProjectCarousel.displayName = "ProjectCarousel"


export default ProjectCarousel