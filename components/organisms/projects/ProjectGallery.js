// Packages
import { forwardRef } from "react";
import Gallery from "@/atoms/containers/Gallery";

// Components
import HoverCard from "@/molecules/cards/HoverCard";

// Functional Component
const ProjectGallery = forwardRef(({ data }, ref) => (
   <Gallery ref={ref}>
      {data.map((item, i) => (
         <HoverCard
            key={i}
         />
      ))}
   </Gallery>
))

// Export settings
ProjectGallery.displayName = "ProjectGallery"

export default ProjectGallery