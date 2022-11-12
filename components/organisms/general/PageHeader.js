// Packages
import styled from "styled-components"
import Image from "next/image"

// Components
import Title from "@/atoms/text/Title"
import Paragraph from "@/atoms/text/Paragraph"

// Styled Components
const HeaderCont = styled.header`
   display: flex;
   align-items: center;
   gap: 2em;
   position: sticky;
   top: 0;
   padding: 2em;
   background: ${props => props.theme.colors.dark};
   border-bottom: 1px solid ${props => props.theme.colors.light}99;
   z-index: 100;
`

const ImageCont = styled.div`
   & img {
      object-fit: cover;
      pointer-events: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
   }
`

const CirclesCont = styled(ImageCont)`
   position: fixed;
   right: 0;
   top: 0;
`

const TitleCont = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   gap: 1em;
`

const StyledParagraph = styled(Paragraph)`
   color:  ${props => props.theme.colors.light}99;
`

const PageHeader = ({ title, subtitle }) => {
   return (
      <HeaderCont>
         <ImageCont>
            <Image
               layout="fixed"
               width={80}
               height={80}
               src="/img/squares.png"
               alt="Vector squares diagonally aligned"
            />
         </ImageCont>
         <CirclesCont>
            <Image
               layout="fixed"
               width={85}
               height={65}
               src="/img/circles.png"
               alt="Vector squares diagonally aligned"
            />
         </CirclesCont>
         <TitleCont>
            <Title shadow={true}>
               {title}
            </Title>
            <StyledParagraph>
               {subtitle}
            </StyledParagraph>
         </TitleCont>
      </HeaderCont>
   )
}

PageHeader.defaultProps = {
   title: "Title",
   subtitle: "Subtitle"
}

export default PageHeader