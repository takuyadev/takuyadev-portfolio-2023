// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Components
import ArticleCard from "@/molecules/cards/ArticleCard"
import HeadingUlr from "@/molecules/text/HeadingUlr"

// Styled Components
const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

// Component
const ArticleGallery = forwardRef(({ title, data, icon }, ref) => (
  <Article ref={ref}>
    <HeadingUlr icon={icon}>{title}</HeadingUlr>
    {data.map((item, i) => (
      <ArticleCard
        key={i}
        title={item.title}
        time={item.time}
        subtitle={item.subtitle}
        description={item.description}
        list={item.list}
        href={item.href}
      />
    ))}
  </Article>
))

// Settings & Exports
ArticleGallery.displayName = "ArticleGallery"

export default ArticleGallery
