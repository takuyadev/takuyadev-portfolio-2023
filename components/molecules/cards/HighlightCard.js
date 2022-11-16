// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import Image from "next/image";

// Components
import FigureCard from "@/atoms/cards/FigureCard";
import Line from "@/atoms/other/Line";
import Heading2 from "@/atoms/text/Heading2";
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

const Caption = styled.figcaption`
   display:flex;
   flex-direction: column;
   height: 100px;
   gap: 0.5em;
   margin: 0 1em;
   transform: translateY(-18px);
`

// ------------------- //

const StyledTitle = styled(Heading2)`
   white-space: nowrap;
`

const StyledParagraph = styled(Paragraph)`
   color: ${props => props.theme.colors.light}99;
`

const StyledButton = styled(PrimaryBtn)`
   margin: 1em;
`

const StyledLine = styled(Line)`
   width: 80%;
   transform: translateY(calc(-1em + -2px));
`

// Component
const HighlightCard = forwardRef(({ img, title, description }, ref) => (
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
      <Caption>
         <StyledTitle>
            {title}
         </StyledTitle>
         <StyledParagraph>
            {description}
         </StyledParagraph>
      </Caption>
      <StyledButton text="Check live" />
   </StyledCard>
))

// Settings & Exports
HighlightCard.displayName = "Highlight Card"

HighlightCard.defaultProps = {
   img: "/img/dummy/1.webp",
   title: "title",
   description: "title"
}

export default HighlightCard