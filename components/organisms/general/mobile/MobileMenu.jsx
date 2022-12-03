// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { fontSize } from "@/modules/config/theme.config"

// Components
import IconLinks from "../../../molecules/navigation/IconLinks"
import Logo from "@/atoms/img/Logo"
import MobileLinks from "@/molecules/navigation/MobileLinks"
import {
  stgerFadeDownAnim,
  stgerFadeDownItem,
} from "@/modules/animation/stgerFadeDown"

// Styled Components
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  padding: 1em;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.dark.main};
  font-size: ${fontSize["xl"]};
  z-index: 200;
`
// Motion
const MotionLogo = motion(Logo)
const MotionLinks = motion(MobileLinks)
const MotionIcon = motion(IconLinks)

// Component
const MobileMenu = forwardRef(
  ({ isClosed, setIsClosed, pathName, ...otherProps }, ref) => {
    const closeMenu = () => setIsClosed(true)

    return (
      <Container
        variants={stgerFadeDownAnim}
        initial="hidden"
        animate="show"
        exit="hidden"
        ref={ref}
        isClosed={isClosed}
        {...otherProps}
      >
        <MotionLogo onClick={closeMenu} variants={stgerFadeDownItem} />
        <MotionLinks
          variants={stgerFadeDownItem}
          pathName={pathName}
          setIsClosed={setIsClosed}
          isClosed={isClosed}
        />
        <MotionIcon variants={stgerFadeDownItem} />
      </Container>
    )
  }
)

// Settings & Exports
MobileMenu.displayName = "MobileMenu"

export default MobileMenu
