// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import Image from "next/image"
import Link from "next/link";

// Components
import FigureCard from "@/atoms/cards/FigureCard";
import Line from "@/atoms/other/Line";
import Caption from "@/atoms/text/Caption";
import Heading3 from "@/atoms/text/Heading3";
import Paragraph from "@/atoms/text/Paragraph";
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn";

// Styled Components
const StyledCard = styled(FigureCard)`
   display: flex;
   flex-direction: column;
   gap: 1em;
   background: #0C284099;
   & img {
      object-fit: cover;
   }
`

const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1em;
   margin: 1em;
`

// ------------------- //

const StyledTitle = styled(Heading3)`
   white-space: nowrap;
`

const StyledParagraph = styled(Paragraph)`
   color: ${({ theme }) => theme.light.main}99;
`

const StyledLine = styled(Line)`
   width: 80%;
   transform: translateY(calc(-1em + -2px));
`

// Component
const HighlightCard = forwardRef(({ img, title, description, href }, ref) => (
   <StyledCard>
      <Image
         layout="responsive"
         height={75}
         width={100}
         src={img}
         alt={`${img}`}
         style={{
            borderRadius: "8px 8px 0 0",
         }}
      />
      <StyledLine />
      <Container>
         <Caption>
            <StyledTitle>
               {title}
            </StyledTitle>
            <StyledParagraph>
               {description}
            </StyledParagraph>
         </Caption>
         <PrimaryBtn
            as="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            text="Check live"
         />
      </Container>
   </StyledCard>
))

// Settings & Exports
HighlightCard.displayName = "Highlight Card"

HighlightCard.defaultProps = {
   href: "/",
   img: "/img/dummy/1.webp",
   title: "title",
   description: "title"
}

export default HighlightCard