// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Import Styling
import { DefaultBtn } from "./DefaultBtn"

// Styled Components
const Button = styled.button`
  ${DefaultBtn}
  padding: 0;
  height: 42px;
  width: 42px;

  background: ${({ theme }) => theme.primary.main};
  color: ${({ theme }) => theme.dark.main};

  &:focus {
    color: ${({ theme }) => theme.light.main};
    background: ${({ theme }) => theme.primary.dark};
  }

  &:hover {
    color: ${({ theme }) => theme.light.main};
    background: ${({ theme }) => theme.primary.darker};
  }

  &:disabled {
    color: ${({ theme }) => theme.primary.dark};
    background: ${({ theme }) => theme.primary.darker};
  }
`

const CircleBtn = forwardRef(
  ({ className, icon, onClick, ...otherProps }, ref) => (
    <Button ref={ref} className={className} onClick={onClick} {...otherProps}>
      {icon}
    </Button>
  )
)

// Settings & Exports

CircleBtn.displayName = "RoundBtn"

export default CircleBtn
