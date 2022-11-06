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
  gap: 1em;
`

// Component
const Gallery = forwardRef(({ title, subtitle, description, list }, ref) => (
   <Article ref={ref}>
      <Heading2>
         {title}
      </Heading2>
      <Subtitle>
         {subtitle}
      </Subtitle>
      <Paragraph>
         {description}
      </Paragraph>
      <List data={list} />
   </Article>
))

// Settings & Exports
Gallery.displayName = ''

export default Gallery