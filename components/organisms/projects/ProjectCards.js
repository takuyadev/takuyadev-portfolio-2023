// Packages
import { forwardRef } from "react";
import Gallery from "@/atoms/containers/Gallery";

// Components
import ProjectCard from "@/molecules/ProjectCard";

// Functional Component
const ProjectCards = forwardRef(({ data }, ref) => (
   <Gallery ref={ref}>
      {data.map((item, i) => (
         <ProjectCard
            key={i}
         />
      ))}
   </Gallery>
))

// Export settings
ProjectCards.displayName = "ProjectGallery"

export default ProjectCards