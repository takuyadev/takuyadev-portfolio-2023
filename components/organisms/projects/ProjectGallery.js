// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Components
import ProjectCard from "@/molecules/ProjectCard";

// Styled Components
const CarouselCont = styled.section`
   display: grid;
   width: 100%;
   height: fit-content;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   grid-column: span 4;
   padding: 0 2em;
   gap: 1em;
`

// Functional Component
const ProjectGallery = forwardRef(({ data }, ref) => (
   <CarouselCont ref={ref}>
      {data.map((item, i) => (
         <ProjectCard
            key={i}
         />
      ))}
   </CarouselCont>
))

// Export settings
ProjectGallery.displayName = "ProjectGallery"

export default ProjectGallery