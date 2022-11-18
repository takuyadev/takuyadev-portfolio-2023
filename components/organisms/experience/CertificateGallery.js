// Packages
import { forwardRef } from "react";
import Gallery from "@/atoms/containers/Gallery";

// Components
import ImageCard from "@/atoms/cards/ImageCard";

// Functional Component
const CertificateGallery = forwardRef(({ data }, ref) => (
   <Gallery ref={ref}>
      {data.map((item, i) => (
         <a key={i} href={item.href}>
            <ImageCard

               img={item.img}
            />
         </a>
      ))}
   </Gallery>
))

// Export settings 
CertificateGallery.displayName = "ProjectGallery"

export default CertificateGallery