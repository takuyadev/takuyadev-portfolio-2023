// Packages
import styled from "styled-components";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import {
  HiClipboardCheck,
  HiCode,
  HiDocument,
  HiDocumentAdd,
} from "react-icons/hi";

// Animations
import {
  stgerFadeDownAnim,
  stgerFadeDownItem,
} from "@/modules/animation/stgerFadeDown";

// Components
import Main from "@/atoms/containers/Main";
import Heading from "@/atoms/text/Heading1";
import Paragraph from "@/atoms/text/Paragraph";
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn";
import Hero from "@/organisms/homepage/Hero";

// Styled Components
const StyledMain = styled(Main)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 475px;
  height: 100%;
  gap: 1em;
  margin-left: 2em;
`;

// Convert to motion
const MotionParagraph = motion(Paragraph);
const MotionHeading = motion(Heading);
const MotionButton = motion(PrimaryBtn);
// Component
function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://takuyaktoyokawa.ca" />
      </Head>

      <Hero />
      <StyledMain variants={stgerFadeDownAnim} initial="hidden" animate="show">
        <MotionHeading shadow={true} variants={stgerFadeDownItem}>
          Hi, I’m Takuya 👋 <br /> Fullstack Developer <br /> & UX/UI Designer
        </MotionHeading>
        <MotionParagraph shadow={true} variants={stgerFadeDownItem}>
          I’m a Fullstack Developer with expertise in UX/UI Designing, with
          experience with using TypeScript, React.js and Node.js with
          Express.js.
        </MotionParagraph>
        <Link href="/development" passHref={true}>
          <MotionButton
            as="a"
            tabIndex="0"
            variants={stgerFadeDownItem}
            icon={<HiCode size={22} />}
            text="Projects"
          />
        </Link>
  
      </StyledMain>
    </>
  );
}

// Settings & Exports
export default Home;
