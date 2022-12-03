// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const Container = styled.div`
  position: relative;

  &::before,
  &:after {
    opacity: 0;
    position: absolute;
    left: 50%;
    transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    border-radius: 8px;
  }

  &:before {
    content: "";
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.light.main};
    transform: translate(-50%, 2em);
    clip-path: polygon(50% 0%, 3% 50%, 100% 52%);
  }

  &:after {
    content: "${({ text }) => (text ? text : "default")}";
    padding: 0.5em;
    bottom: -4.5em;
    background: ${({ theme }) => theme.light.main};
    color: ${({ theme }) => theme.dark.main};
    text-transform: capitalize;
    font-weight: bold;
    transform: translate(-50%, -25px);
    border-radius: 8px;
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
  }
`

// Component
const HoverContext = forwardRef(({ text, children, className }, ref) => (
  <Container ref={ref} text={text} className={className}>
    {children}
  </Container>
))

// Settings & Exports
HoverContext.displayName = "HoverContext"

export default HoverContext
