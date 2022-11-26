// Packages
import { forwardRef } from "react";

// Components
import LargeGallery from "@/atoms/containers/LargeGallery";
import HighlightCard from "@/molecules/cards/HighlightCard";

// Component 
const ProjectHighlights = forwardRef(({ data, ...otherProps }, ref) => (
   <LargeGallery ref={ref}>
      {data.map((item, i) => (
         <HighlightCard
            key={i}
            img={item.img}
            title={item.title}
            description={item.description}
            href={item.href}
         />
      ))}

   </LargeGallery>
))

// Settings & Exports

ProjectHighlights.displayName = "ProjectCarousel"

export default ProjectHighlights