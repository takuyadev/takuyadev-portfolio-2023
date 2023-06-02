// Packages
import styled from "styled-components"
import { forwardRef } from "react"
import Image from "next/image"
import Link from "next/link"

// Components
import NoSelectImage from "../other/NoSelectImage"

const Container = styled(NoSelectImage)`
  overflow: visible;
`
// Component
const Logo = forwardRef(({ className, ...otherProps }, ref) => (
  <Link href="/">
    <a ref={ref} className={className} {...otherProps}>
      <Container>
        <Image
          priority
          layout="fixed"
          width={80}
          height={80}
          src="/img/other/Logo.svg"
          alt="Logo of Takuya Toyokawa"
        />
      </Container>
    </a>
  </Link>
))

// Settings & Exports
Logo.displayName = "Logo"

export default Logo
