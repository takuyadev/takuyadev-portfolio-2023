// Packages
import styled from "styled-components";
import { HomeIcon } from '@heroicons/react/24/solid'

const Button = styled.button`
    display:inline-flex;
    align-items: center;
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

function DefaultBtn({ icon, text, ...otherProps }) {
   return (
      <Button {...otherProps}>
         {icon}
         {text}
      </Button>
   )
}

DefaultBtn.defaultProps = {
   text: "Default",
   icon: <HomeIcon />
}

export default DefaultBtn