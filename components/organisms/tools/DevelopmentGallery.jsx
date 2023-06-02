// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import {
  SiBootstrap,
  SiChai,
  SiCss3,
  SiCypress,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJquery,
  SiMocha,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedux,
  SiRubyonrails,
  SiSass,
  SiShopify,
  SiStorybook,
  SiStrapi,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { FaElementor } from "react-icons/fa";

// import {
//   SiAdobeaftereffects,
//   SiAdobeaudition,
//   SiAdobeillustrator,
//   SiAdobephotoshop,
//   SiAdobepremierepro,
//   SiAdobexd,
//   SiCss3,
//   SiExpress,
//   SiFigma,
//   SiFirebase,
//   SiGithub,
//   SiGitlab,
//   SiHeroku,
//   SiHtml5,
//   SiInvision,
//   SiJavascript,
//   SiJira,
//   SiMiro,
//   SiMongodb,
//   SiNetlify,
//   SiNextdotjs,
//   SiNodedotjs,
//   SiNotion,
//   SiPostman,
//   SiReact,
//   SiSass,
//   SiShopify,
//   SiStorybook,
//   SiStyledcomponents,
//   SiTailwindcss,
//   SiTrello,
//   SiTypescript,
//   SiVercel,
//   SiWordpress,
// } from "react-icons/si"
// import { FaElementor } from "react-icons/fa"

// Components
import ToolsCard from "@/molecules/cards/ToolsCard";
import HeadingUlr from "@/molecules/text/HeadingUlr";
import IconContainer from "@/molecules/container/IconWithCaption";
import Paragraph from "@/atoms/text/Paragraph";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

// Component
const DevelopmentGallery = forwardRef(({ className }, ref) => (
  <Container ref={ref} className={className}>
    <HeadingUlr>Development</HeadingUlr>
    <ToolsCard>
      <IconContainer caption="HTML5">
        <SiHtml5 size={36} />
      </IconContainer>
      <IconContainer caption="CSS3">
        <SiCss3 size={36} />
      </IconContainer>
      <IconContainer caption="JavaScript">
        <SiJavascript size={36} />
      </IconContainer>
      <IconContainer caption="TypeScript">
        <SiTypescript size={36} />
      </IconContainer>
      <IconContainer caption="jQuery">
        <SiJquery size={36} />
      </IconContainer>
      <IconContainer caption="React.js">
        <SiReact size={36} />
      </IconContainer>
      <IconContainer caption="Next.js 13.4">
        <SiNextdotjs size={36} />
      </IconContainer>
      <IconContainer caption="Redux Toolkit">
        <SiRedux size={36} />
      </IconContainer>
      <IconContainer caption="Jest">
        <SiJest size={36} />
      </IconContainer>
      <IconContainer caption="Mocha">
        <SiMocha size={36} />
      </IconContainer>
      <IconContainer caption="Chai">
        <SiChai size={36} />
      </IconContainer>
      <IconContainer caption="Cypress">
        <SiCypress size={36} />
      </IconContainer>
      <IconContainer caption="Storybook">
        <SiStorybook size={36} />
      </IconContainer>
      <IconContainer caption="SASS">
        <SiSass size={36} />
      </IconContainer>
      <IconContainer caption="Styled Comp">
        <SiStyledcomponents size={36} />
      </IconContainer>
      <IconContainer caption="TailwindCSS">
        <SiTailwindcss size={36} />
      </IconContainer>
      <IconContainer caption="BootStrap5">
        <SiBootstrap size={36} />
      </IconContainer>
      <IconContainer caption="WordPress">
        <SiWordpress size={36} />
      </IconContainer>
      <IconContainer caption="Elementor">
        <FaElementor size={36} />
      </IconContainer>
      <IconContainer caption="Node.js">
        <SiNodedotjs size={36} />
      </IconContainer>
      <IconContainer caption="Express.js">
        <SiExpress size={36} />
      </IconContainer>
      <IconContainer caption="Ruby on Rails">
        <SiRubyonrails size={36} />
      </IconContainer>
      <IconContainer caption="PostgreSQL">
        <SiPostgresql size={36} />
      </IconContainer>
      <IconContainer caption="MongoDB">
        <SiMongodb size={36} />
      </IconContainer>
      <IconContainer caption="Strapi">
        <SiStrapi size={36} />
      </IconContainer>
      <IconContainer caption="Prisma">
        <SiPrisma size={36} />
      </IconContainer>
      <IconContainer caption="Firebase">
        <SiFirebase size={36} />
      </IconContainer>
      <IconContainer caption="Liquid">
        <SiShopify size={36} />
      </IconContainer>
      <IconContainer caption="Postman">
        <SiPostman size={36} />
      </IconContainer>
    </ToolsCard>
  </Container>
));

// Settings & Exports
DevelopmentGallery.displayName = "DevelopmentGallery";

export default DevelopmentGallery;
