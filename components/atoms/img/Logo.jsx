// Packages
import { forwardRef } from "react"
import Image from "next/image"
import Link from "next/link"

// Component
const Logo = forwardRef(({ className, ...otherProps }, ref) => (
  <Link href="/">
    <a ref={ref} className={className} {...otherProps}>
      <Image
        layout="fixed"
        width="108px"
        height="100px"
        src="/logo.png"
        alt="Logo of Takuya Toyokawa"
      />
    </a>
  </Link>
))

// Settings & Exports
Logo.displayName = "Logo"

export default Logo
