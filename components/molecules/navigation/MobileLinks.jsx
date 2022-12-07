// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import { fontSize } from "@/modules/config/theme.config"

// Components
import Anchor from "@/atoms/text/Anchor"
import List from "@/atoms/text/List"

// Styled Components
const NavigationEl = styled.nav`
  display: flex;
  gap: 1.5em;
  @media (max-height: 700px) {
    font-size: ${fontSize["l"]};
  }
`

const StyledList = styled(List)`
  align-items: center;
  list-style: none;
  gap: 2em;
  padding: 0;
`

// Component
const MobileLinks = forwardRef(({ setIsClosed, pathName, className }, ref) => {
  const closeMenu = () => setIsClosed(true)

  return (
    <NavigationEl ref={ref} className={className}>
      <StyledList isOrdered={false}>
        <li>
          <Anchor
            pathName={pathName}
            onClick={closeMenu}
            href="/"
            text="Home"
          />
        </li>
        <li>
          <Anchor
            pathName={pathName}
            onClick={closeMenu}
            href="/experience"
            text="Experience"
          />
        </li>
        <li>
          <Anchor
            pathName={pathName}
            onClick={closeMenu}
            href="/tools"
            text="Tools"
          />
        </li>
        <li>
          <Anchor
            pathName={pathName}
            onClick={closeMenu}
            href="/development"
            text="Development"
          />
        </li>
        <li>
          <Anchor
            pathName={pathName}
            onClick={closeMenu}
            href="/design"
            text="Design"
          />
        </li>
        <li>
          <Anchor
            pathName={pathName}
            onClick={closeMenu}
            href="/contact"
            text="Contact"
          />
        </li>
        <li>
          <Anchor
            pathName={pathName}
            onClick={closeMenu}
            href="/about"
            text="About"
          />
        </li>
      </StyledList>
    </NavigationEl>
  )
})

// Settings & Exports
MobileLinks.displayName = "MobileLinks"

export default MobileLinks
