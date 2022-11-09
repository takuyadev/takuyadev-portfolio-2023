// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Components
import ArticleCard from "@/molecules/ArticleCard";

// Animations
import {
   staggerAnimation,
   staggerItem,
} from "@/modules/config/animation/staggerFade"

// Styled Components
const Article = styled(motion.article)`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 0em 2em;
`

// Convert to motion
const MotionCard = motion(ArticleCard)

// Component
const ArticleGallery = forwardRef(({ data }, ref) => (
   <Article
      ref={ref}
      variants={staggerAnimation}
      initial="hidden"
      animate="show"
   >
      {data.map((item, i) => (
         <MotionCard
            key={i}
            variants={staggerItem}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            list={item.list}
         />

      ))}
   </Article>
))

// Settings & Exports
ArticleGallery.displayName = 'Article'

export default ArticleGallery