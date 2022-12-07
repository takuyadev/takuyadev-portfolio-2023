// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import {
  HiHome,
  HiUserCircle,
  HiOutlineCode,
  HiClipboardCheck,
  HiMail,
} from "react-icons/hi"
import { FaBrush } from "react-icons/fa"
import { BsWrench } from "react-icons/bs"

// Components
import Anchor from "@/atoms/text/Anchor"
import ScrollBar from "@/atoms/other/ScrollBar"
import List from "@/atoms/text/List"

// Styled Components
const Container = styled.div`
  display: flex;
  gap: 1.5em;
`

const StyledList = styled(List)`
  gap: 2em;
  padding: 0;
  list-style: none;
`

// Component
const SidebarLinks = forwardRef(({ position, pathName, className }, ref) => (
  <Container ref={ref} className={className}>
    <ScrollBar position={position} />
    <nav>
      <StyledList>
        <li>
          <Anchor
            pathName={pathName}
            href="/"
            text="Home"
            icon={<HiHome size={24} />}
          />
        </li>
        <li>
          <Anchor
            pathName={pathName}
            href="/experience"
            text="Experience"
            icon={<HiClipboardCheck size={24} />}
          />
        </li>
        <li>
          <Anchor
            pathName={pathName}
            href="/tools"
            text="Tools"
            icon={<BsWrench size={24} />}
          />
        </li>
        <li>
          <Anchor
            pathName={pathName}
            href="/development"
            text="Development"
            icon={<HiOutlineCode size={24} />}
          />
        </li>
        <li>
          <Anchor
            pathName={pathName}
            href="/design"
            text="Design"
            icon={<FaBrush size={24} />}
          />
        </li>
        <li>
          <Anchor
            pathName={pathName}
            href="/contact"
            text="Contact"
            icon={<HiMail size={24} />}
          />
        </li>
        <li>
          <Anchor
            pathName={pathName}
            href="/about"
            text="About"
            icon={<HiUserCircle size={24} />}
          />
        </li>
      </StyledList>
    </nav>
  </Container>
))

// Settings & Exports
SidebarLinks.displayName = "SidebarLinks"

export default SidebarLinks
