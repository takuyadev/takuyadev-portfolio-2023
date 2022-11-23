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
    transition: top .5s cubic-bezier(0.61, 1, 0.88, 1);
    top: ${({ position }) => "calc(" + position + "% + 10px)"};
    width: 8px;
    height: 24px;
    border-radius: 8px;
    background: ${({ theme }) => theme.primary.main};
    
`

// Component
const ScrollBar = forwardRef(({ pathName }, ref) => {
    const checkPosition = (pathName) => {
        switch (pathName) {
            case "/":
                return (-4)
                break;
            case "/experience":
                return 15.666
                break;
            case "/development":
                return 33.333
                break;
            case "/design":
                return 52.000
                break;
            case "/contact":
                return 70.666
                break;
            case "/about":
                return 89
                break;
        }
    }


    const position = checkPosition(pathName)
    console.log(position)

    return (
        <ScrollBarEl ref={ref}>
            <Slider position={position} />
        </ScrollBarEl>
    )

})

// Settings & Exports
ScrollBar.displayName = "ScrollBar"

export default ScrollBar