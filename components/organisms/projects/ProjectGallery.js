// Packages
import { forwardRef } from "react";
import Gallery from "@/atoms/containers/Gallery";

// Components
import ProjectCard from "@/molecules/cards/ProjectCard";

// Functional Component
const ProjectGallery = forwardRef(({ data }, ref) => (
   <Gallery ref={ref}>
      {data.map((item, i) => (
         <ProjectCard
            key={i}
         />
      ))}
   </Gallery>
))

// Export settings
ProjectGallery.displayName = "ProjectGallery"

export default ProjectGallery