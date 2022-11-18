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
    width: 8px;
    height: 24px;
    border-radius: 8px;
    background: ${({ theme }) => theme.primary.main};
`

// Component
const ScrollBar = forwardRef(({ }, ref) => (
    <ScrollBarEl ref={ref}>
        <Slider />
    </ScrollBarEl>
))

// Settings & Exports
ScrollBar.displayName = "ScrollBar"

export default ScrollBar