// Packages
import Image from "next/image"

// Component
const Headshot = () => (
   <Image
      priority
      layout="fixed"
      width="538px"
      height="475px"
      src="/img/headshot.png"
      alt="Hero headshot of Takuya Toyokawa"
   />
)

// Settings & Exports
export default Headshot