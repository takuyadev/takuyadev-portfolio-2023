// Packages
import { forwardRef } from "react";

// Components
import LargeGallery from "@/atoms/containers/LargeGallery";
import HighlightCard from "@/molecules/cards/HighlightCard";

// Component 
const ProjectHighlights = forwardRef(({ ...otherProps }, ref) => (
   <LargeGallery ref={ref}>
      <HighlightCard
         img="/img/dummy/2.webp"
         title="Project One"
         description="The big project for the biggest project in the world."
      />
      <HighlightCard />
      <HighlightCard />
   </LargeGallery>
))

// Settings & Exports

ProjectHighlights.displayName = "ProjectCarousel"

export default ProjectHighlights