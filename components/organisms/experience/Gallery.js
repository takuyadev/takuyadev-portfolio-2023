// Packages
import { forwardRef } from "react";
import styled from "styled-components";

// Components
import ArticleCard from "@/molecules/ArticleCard";

// Animations
import {
   staggerAnimation,
   staggerItem,
} from "@/modules/config/animation/staggerFade"

// Styled Components
const Section = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

// Component
const ArticleCards = forwardRef(({ data }, ref) => (
   <Section>
      {data.map((item, i) => (
         <ArticleCard
            key={i}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            list={item.list}
         />
      ))}
   </Section>
))

// Settings & Exports
ArticleCards.displayName = 'Article'

export default ArticleCards