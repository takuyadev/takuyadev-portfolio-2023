// Packages
import styled from "styled-components"
import Image from "next/image"
import { HiMenu } from "react-icons/hi"

// Components
import Title from "@/atoms/text/Title"
import Paragraph from "@/atoms/text/Paragraph"
import CircleBtn from "@/atoms/buttons/CircleBtn"

// Styled Components
const HeaderCont = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: sticky;
   top: 0;
   padding: 2em;
   background: ${({ theme }) => theme.dark.main};
   border-bottom: 1px solid ${({ theme }) => theme.light.main}99;
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

const SquareCont = styled(ImageCont)`
   position: fixed;
   @media (max-width: 1024px){
      left: 0;
      transform: scale(1.5);
      opacity: 0.25;
   }
`

const CirclesCont = styled(ImageCont)`
   position: fixed;
   right: 0;
   top: 0;
   @media (max-width: 1024px){
      display:none;
   }
`

const TextCont = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   gap: 0.5em;
   width: 75%;
`

const TitleCont = styled.div`
   display:flex;
   align-items: center;
   gap: 2em;
   
`

const StyledParagraph = styled(Paragraph)`
   color:  ${({ theme }) => theme.light.main}99;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 60%;
`


const PageHeader = ({ title, subtitle, isClosed, setIsClosed }) => {
   return (
      <HeaderCont>
         <TitleCont>
            <SquareCont>
               <Image
                  layout="fixed"
                  width={65}
                  height={65}
                  src="/img/squares.png"
                  alt="Vector squares diagonally aligned"
               />
            </SquareCont>
            <CirclesCont>
               <Image
                  layout="fixed"
                  width={75}
                  height={57}
                  src="/img/circles.png"
                  alt="Vector squares diagonally aligned"
               />
            </CirclesCont>
            <TextCont>
               <Title shadow={true}>
                  {title}
               </Title>
               <StyledParagraph>
                  {subtitle}
               </StyledParagraph>
            </TextCont>
         </TitleCont>
      </HeaderCont>
   )
}

PageHeader.defaultProps = {
   title: "Title",
   subtitle: "Subtitle"
}

export default PageHeader