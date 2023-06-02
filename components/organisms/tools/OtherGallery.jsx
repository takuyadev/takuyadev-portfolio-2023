// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import {
  SiClickup,
  SiGithub,
  SiGitlab,
  SiHeroku,
  SiJira,
  SiNetlify,
  SiNotion,
  SiTrello,
  SiVercel,
} from "react-icons/si";

// Components
import ToolsCard from "@/molecules/cards/ToolsCard";
import HeadingUlr from "@/molecules/text/HeadingUlr";
import IconContainer from "@/molecules/container/IconWithCaption";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

// Component
const OtherGallery = forwardRef(({ className }, ref) => (
  <Container ref={ref} className={className}>
    <HeadingUlr>Other</HeadingUlr>
    <ToolsCard>
      <IconContainer caption="Github">
        <SiGithub size={36} />
      </IconContainer>
      <IconContainer caption="Heroku">
        <SiHeroku size={36} />
      </IconContainer>
      <IconContainer caption="Gitlab">
        <SiGitlab size={36} />
      </IconContainer>
      <IconContainer caption="Jira">
        <SiJira size={36} />
      </IconContainer>
      <IconContainer caption="Clickup">
        <SiClickup size={36} />
      </IconContainer>
      <IconContainer caption="Notion">
        <SiNotion size={36} />
      </IconContainer>
      <IconContainer caption="Netlify">
        <SiNetlify size={36} />
      </IconContainer>
      <IconContainer caption="Vercel">
        <SiVercel size={36} />
      </IconContainer>
      <IconContainer caption="Trello">
        <SiTrello size={36} />
      </IconContainer>
    </ToolsCard>
  </Container>
));

// Settings & Exports
OtherGallery.displayName = "OtherGallery";

export default OtherGallery;
