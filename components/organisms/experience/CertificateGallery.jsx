// Packages
import { forwardRef } from "react"

// Components
import Gallery from "@/atoms/containers/Gallery"
import HoverCard from "@/molecules/cards/HoverCard"

// Functional Component
const CertificateGallery = forwardRef(({ data }, ref) => (
  <Gallery ref={ref}>
    {data.map((item, i) => (
      <HoverCard key={i} href={item.href} title={item.title} img={item.img} />
    ))}
  </Gallery>
))

// Export settings
CertificateGallery.displayName = "ProjectGallery"

export default CertificateGallery
