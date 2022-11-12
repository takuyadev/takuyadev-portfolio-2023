// Packages
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

// Modules
import { fade } from "@/config/animation/fade"

// Components
import Sidebar from "@/organisms/general/Sidebar"

// Styled Components
const Content = styled(motion.div)`
  grid-area: content;
  grid-column: span 3;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  
   @media (max-width: 1024px) {
        grid-column: span 4;
  }
`

const Page = ({ children, router }) => (
   <>
      <Sidebar />
      <AnimatePresence mode="wait">
         <Content
            key={router.route}
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
            aria-label="content"
         >
            {children}
         </Content>
      </AnimatePresence>
   </>
)

export default Page