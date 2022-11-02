// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import { HomeIcon } from '@heroicons/react/24/solid'

// Styled Components
const Button = styled.button`
    display:inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    padding: 0.5em 1.5em;
    border: transparent;
    border-radius: 50px;
    font-weight: bold;  
    transition: background 0.1s cubic-bezier(0.61, 1, 0.88, 1);
    cursor: pointer;

    & > svg {
        width: 24px;
    }
    
    &:hover, &:focus{
        outline: none;  
    }
`

// Component
const DefaultBtn = forwardRef(({ icon, text, ...otherProps }, ref) => {
   return (
      <Button ref={ref}{...otherProps}>
         {icon && icon}
         {text && text}
      </Button>
   )
})

// Settings & Exports
DefaultBtn.displayName = "PrimaryBtn"

DefaultBtn.defaultProps = {
   text: "Default",
}

export default DefaultBtn