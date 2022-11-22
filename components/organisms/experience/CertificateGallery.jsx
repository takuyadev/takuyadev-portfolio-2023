// Packages
import { forwardRef } from "react"

// Components
import Gallery from "@/atoms/containers/Gallery"
import CertificateCard from "@/molecules/cards/CertificateCard"

// Functional Component
const CertificateGallery = forwardRef(({ data }, ref) => (
  <Gallery ref={ref}>
    {data.map((item, i) => (
      <CertificateCard
        key={i}
        href={item.href}
        title={item.title}
        img={item.img}
      />
    ))}
  </Gallery>
))

// Export settings
CertificateGallery.displayName = "ProjectGallery"

export default CertificateGallery
