// Packagesr
import styled, { keyframes } from "styled-components"
import { FaCircleNotch } from "react-icons/fa"

// Styled Component
const spin = keyframes`
   0%{
      transform: rotate(0deg)
   }
   100%{
      transform: rotate(360deg)
   }
`

const Container = styled.div`
  & > svg {
    animation: ${spin} 1s infinite;
  }
`

// Component
const Loading = ({ ...otherProps }) => (
  <Container>
    <FaCircleNotch {...otherProps} />
  </Container>
)

// Settings & Exports
Loading.displayName = "Loading"

export default Loading
