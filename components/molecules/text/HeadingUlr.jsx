// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import Image from "next/image"

// Components
import Heading2 from "@/atoms/text/Heading2"

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`

const TitleContainer = styled.div``

const StyledHeading = styled(Heading2)`
  margin-bottom: 0.1em;
`

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
`

// Component
const HeadingUlr = forwardRef(({ children, icon }, ref) => {
  return (
    <Container>
      {icon && <IconContainer>{icon}</IconContainer>}
      <TitleContainer>
        <StyledHeading>{children}</StyledHeading>
        <Image
          width={150}
          height={10}
          src="/img/other/squiggly.webp"
          alt="Vector of squiggly lines"
        />
      </TitleContainer>
    </Container>
  )
})

// Settings & Exports
HeadingUlr.defaultProps = {
  children: "Heading",
}

HeadingUlr.displayName = "HeadingUlr"

export default HeadingUlr
