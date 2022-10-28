// Packages
import { forwardRef } from "react";

// Components
import ProjectCard from "@/molecules/ProjectCard";
import Carousel from "@/atoms/containers/Carousel";

// Component 
const ProjectCarousel = forwardRef(({ data }, ref) => (
   <Carousel ref={ref}>
      {data.map((val, i) => (
         <ProjectCard
            key={i}
            img="/img/dummy/1.webp"
            height="400px"
            width="700px"
         />
      ))}
   </Carousel>
))

// Settings & Exports

ProjectCarousel.displayName = "ProjectCarousel"

export default ProjectCarousel