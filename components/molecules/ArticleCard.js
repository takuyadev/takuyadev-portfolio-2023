// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import { SparklesIcon } from '@heroicons/react/24/solid'
import Link from "next/link";

// Components
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn";
import Heading3 from "@/atoms/text/Heading3";
import Heading4 from "@/atoms/text/Heading4";
import Paragraph from "@/atoms/text/Paragraph";
import List from "@/atoms/List";

// Styled Components
const Article = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
  padding: 2em;
  border-radius: 8px;
  background: #0E304D;
  border-left: 5px solid ${props => props.theme.colors.primary["500"]};
`

const StyledSubtitle = styled(Heading4)`
   opacity: 0.5;
`

const Anchor = styled.a`
   color: unset;
   text-decoration: none;
`

// Component
const ArticleCard = forwardRef(({ title, subtitle, time, description, list, href }, ref) => (
   <Article ref={ref}>
      <Heading3>
         {title}
      </Heading3>
      <StyledSubtitle>
         {subtitle},
         <time>
            {" "}
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
      {href &&
         <Anchor href={href} tabIndex="0" target="_blank" rel="noopener noreferrer">
            <PrimaryBtn text="More details" icon={<SparklesIcon />} />
         </Anchor>
      }

   </Article>
))

// Settings & Exports
ArticleCard.displayName = 'Gallery'

export default ArticleCard