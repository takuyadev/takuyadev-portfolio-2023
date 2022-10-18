// Packages
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

// Modules
import { fade } from "@/config/animation/fade"

// Components
import Sidebar from "@/organisms/general/Sidebar"

// Styled Components
const Main = styled(motion.main)`
  display: grid;
  grid-template-areas: "sidebar content";
  grid-template-columns: repeat(4, 1fr);
`

const Content = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-area: content;
  grid-column: span 3;
  overflow-y: hidden;
  overflow: hidden;
  height: 100vh;
`

function Page({ children, router }) {
   return (
      <Main>
         <Sidebar />
         <AnimatePresence mode="wait">
            <Content
               key={router.route}
               variants={fade}
               initial="initial"
               animate="animate"
               exit="exit"
            >
               {children}
            </Content>
         </AnimatePresence>
      </Main>
   )

}

export default Page