// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import { SparklesIcon } from '@heroicons/react/24/solid'

// Components
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn";
import Heading3 from "@/atoms/text/Heading3";
import Heading4 from "@/atoms/text/Heading4";
import Paragraph from "@/atoms/text/Paragraph";
import List from "@/atoms/text/List";

// Styled Components
const Article = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
  padding: 2em;
  border-radius: 8px;
  background: ${({ theme }) => theme.dark.dark};
  border-left: 5px solid ${({ theme }) => theme.primary.main};
`

const StyledSubtitle = styled(Heading4)`
   opacity: 0.5;
`


// Component
const ArticleCard = forwardRef(({ title, subtitle, time, description, list, href }, ref) => (
   <Article ref={ref}>
      <Heading3>
         {title}
      </Heading3>
      <StyledSubtitle>
         {subtitle}
         {", "}
         <time>
            {time}
         </time>
      </StyledSubtitle>
      <Paragraph>
         {description}
      </Paragraph>
      <List
         isOrdered={false}
         data={list}
      />
      {
         href &&
         <PrimaryBtn
            as="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            text="More details"
            icon={<SparklesIcon />}
         />
      }
   </Article>
))

// Settings & Exports
ArticleCard.displayName = 'Gallery'

export default ArticleCard