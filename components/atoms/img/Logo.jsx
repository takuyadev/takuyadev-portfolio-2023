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
        width={88}
        height={80}
        src="/img/other/logo.svg"
        alt="Logo of Takuya Toyokawa"
      />
    </a>
  </Link>
))

// Settings & Exports
Logo.displayName = "Logo"

export default Logo
