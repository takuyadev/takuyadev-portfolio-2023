// Packages
import Image from "next/image"

function Headshot() {
   return (
      <Image
         layout="fixed"
         width="538px"
         height="475px"
         src="/img/headshot.png"
         alt="Hero headshot of Takuya Toyokawa"
      />
   )
}

export default Headshot