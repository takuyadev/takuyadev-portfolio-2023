// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const ScrollBarEl = styled.div`
  height: 100%;
  width: 8px;
  background: ${({ theme }) => theme.light.main}99;
  border-radius: 8px;
`

const Slider = styled.div`
  position: relative;
  transition: top 0.5s cubic-bezier(0.61, 1, 0.88, 1);
  top: ${({ position }) => "calc(" + position + "% + 10px)"};
  width: 8px;
  height: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.primary.main};
`

// Component
const ScrollBar = forwardRef(({ position, className }, ref) => {
  return (
    <ScrollBarEl ref={ref} className={className}>
      <Slider position={position} />
    </ScrollBarEl>
  )
})

// Settings & Exports
ScrollBar.displayName = "ScrollBar"

export default ScrollBar
