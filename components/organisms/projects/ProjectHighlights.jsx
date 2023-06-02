// Packages
import { forwardRef } from "react"

// Components
import LargeGallery from "@/atoms/containers/LargeGallery"
import HighlightCard from "@/molecules/cards/HighlightCard"

// Component
const ProjectHighlights = forwardRef(({ data, ...otherProps }, ref) => (
  <LargeGallery ref={ref} {...otherProps}>
    {data.map((item, i) => (
      <HighlightCard
        key={i}
        {...item}
      />
    ))}
  </LargeGallery>
))

// Settings & Exports

ProjectHighlights.displayName = "ProjectCarousel"

export default ProjectHighlights
