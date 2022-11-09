// Packages
import { forwardRef } from "react";
import styled from "styled-components";

// Components
import Heading2 from "@/atoms/text/Heading2";
import Subtitle from "@/atoms/text/Subtitle";
import Paragraph from "@/atoms/text/Paragraph";
import List from "@/atoms/List";

// Styled Components
const Article = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 2em;
  border-radius: 8px;
  background: #0C284099;
  border-left: 5px solid ${props => props.theme.colors.primary["500"]};
`

const StyledSubtitle = styled(Subtitle)`
   opacity: 0.5;
   margin-bottom: 0.5em;
`

// Component
const ArticleCard = forwardRef(({ title, subtitle, description, list }, ref) => (
   <Article ref={ref}>
      <Heading2>
         {title}
      </Heading2>
      <StyledSubtitle>
         {subtitle}
      </StyledSubtitle>
      <Paragraph>
         {description}
      </Paragraph>
      <List
         isOrdered={false}
         data={list}
      />
   </Article>
))

// Settings & Exports
ArticleCard.displayName = 'Gallery'

export default ArticleCard