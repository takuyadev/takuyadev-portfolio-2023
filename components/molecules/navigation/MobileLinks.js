// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import { fontSize } from "@/modules/config/theme.config"

// Components
import Anchor from "@/atoms/text/Anchor"

const NavigationEl = styled.div`
    display: flex;
    gap: 1.5em;
`

const UlEl = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: ${fontSize["l"]};
    align-items: center;
    gap: 2em;
    margin: 0;
    padding: 0;
    list-style:none;
`

const MobileLinks = forwardRef(({ setIsClosed }, ref) => (
   <NavigationEl ref={ref}>
      <nav>
         <UlEl>
            <Anchor onClick={() => setIsClosed(true)} href="/" text="Home" />
            <Anchor onClick={() => setIsClosed(true)} href="/experience" text="Experience" />
            <Anchor onClick={() => setIsClosed(true)} href="/development" text="Development" />
            <Anchor onClick={() => setIsClosed(true)} href="/design" text="Design" />
            <Anchor onClick={() => setIsClosed(true)} href="/contact" text="Contact" />
            <Anchor onClick={() => setIsClosed(true)} href="/about" text="About" />
         </UlEl>
      </nav>
   </NavigationEl>
))

// Settings & Exports
MobileLinks.displayName = "MobileLinks"

export default MobileLinks