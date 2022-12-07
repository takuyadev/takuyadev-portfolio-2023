// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import Link from "next/link"
import { motion } from "framer-motion"
import { fontSize } from "@/modules/config/theme.config"

// Components
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn"
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
  padding: 2em 1em;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.dark.main};
  z-index: 200;
`

const MotionContainer = styled(motion.div)`
  gap: 1.5em;
  display: flex;
  flex-direction: column;
  font-size: ${fontSize["m"]};
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
        <MotionContainer variants={stgerFadeDownItem}>
          <Link
            href="https://drive.google.com/file/d/1qs_0fH0mIlTwwlzt33-x-re2OsZAxIaj/view?usp=sharing"
            passHref
          >
            <PrimaryBtn
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              text="Résumé"
            />
          </Link>
          <MotionIcon />
        </MotionContainer>
      </Container>
    )
  }
)

// Settings & Exports
MobileMenu.displayName = "MobileMenu"

export default MobileMenu
