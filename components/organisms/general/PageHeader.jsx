// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import Image from "next/image"

// Components
import Title from "@/atoms/text/Title"
import Paragraph from "@/atoms/text/Paragraph"

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
  @media (max-width: 1024px) {
    position: fixed;
    left: 0;
    transform: scale(1.5);
    opacity: 0.25;
  }
`

const CirclesCont = styled(ImageCont)`
  position: fixed;
  right: 0;
  top: 0;
  @media (max-width: 1024px) {
    display: none;
  }
`

const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.light.main};
`

const TitleCont = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  width: 100%;
`

const StyledParagraph = styled(Paragraph)`
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.5;
  white-space: nowrap;
  @media (max-width: 1024px) {
    width: calc(100% - 100px);
  }
`

const PageHeader = forwardRef(({ className, title, subtitle }, ref) => {
  return (
    <HeaderCont ref={ref} className={className}>
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
          <Title shadow={true}>{title}</Title>
          <StyledParagraph>{subtitle}</StyledParagraph>
        </TextCont>
      </TitleCont>
    </HeaderCont>
  )
})

// Settings & Exports
PageHeader.defaultProps = {
  title: "Title",
  subtitle: "Subtitle",
}

PageHeader.displayName = "PageHeader"

export default PageHeader
