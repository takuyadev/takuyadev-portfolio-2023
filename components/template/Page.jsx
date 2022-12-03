// Packages
import styled from "styled-components"
import { useContext, cloneElement } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenu } from "react-icons/hi"

// Modules
import { fade } from "@/modules/animation/fade"
import { checkPosition } from "@/utils/checkSliderPosition"

// Components
import Sidebar from "@/organisms/general/desktop/Sidebar"
import MobileMenu from "@/organisms/general/mobile/MobileMenu"
import { IsClosedContext } from "@/modules/context/IsClosedContext"
import CircleBtn from "@/atoms/buttons/CircleBtn"
import { useRouter } from "next/router"
import Hamburger from "@/atoms/icon/Hamburger"

// Styled Components
const Container = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-areas: "sidebar content";
  grid-template-columns: repeat(4, 1fr);
`

const Content = styled(motion.div)`
  grid-area: content;
  grid-column: span 3;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.dark.main};

  @media (max-width: 1024px) {
    grid-column: span 4;
  }
`

const MobileMenuButton = styled(CircleBtn)`
  display: none;
  position: fixed;
  top: 3em;
  right: 3em;
  z-index: 1000;

  @media (max-width: 1024px) {
    display: block;
  }
`

const Page = ({ children, router }) => {
  const { isClosed, setIsClosed } = useContext(IsClosedContext)
  const { pathname } = useRouter()
  const position = checkPosition(pathname)

  return (
    <Container variants={fade} initial="initial" animate="animate" exit="exit">
      <Sidebar
        setIsClosed={setIsClosed}
        position={position}
        pathName={pathname}
      />
      <MobileMenuButton
        onClick={() => setIsClosed((prev) => !prev)}
        icon={<Hamburger isClosed={isClosed} />}
        aria-label="Menu"
      />
      <AnimatePresence mode="wait">
        {!isClosed && (
          <MobileMenu
            isClosed={isClosed}
            setIsClosed={setIsClosed}
            pathName={pathname}
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <Content
          key={router.route}
          variants={fade}
          initial="initial"
          animate="animate"
          exit="exit"
          aria-label="content"
        >
          {cloneElement(children, { isClosed, setIsClosed })}
        </Content>
      </AnimatePresence>
    </Container>
  )
}

export default Page
