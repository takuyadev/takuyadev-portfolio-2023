// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const ScrollBarEl = styled.div`
    height: 100%;
    width: 8px;
    background: ${props => props.theme.colors.light}99;
    border-radius: 8px;
`

const Slider = styled.div`
    width: px;
    height: 24px;
    border-radius: 8px;
    background: ${props => props.theme.colors.primary["500"]};
`

// Component
const ScrollBar = forwardRef(({ }, ref) => (
    <ScrollBarEl>
        <Slider />
    </ScrollBarEl>
))

// Settings & Exports
ScrollBar.displayName = "ScrollBar"

export default ScrollBar