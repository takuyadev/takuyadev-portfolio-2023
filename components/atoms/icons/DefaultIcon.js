// Packages
import styled from "styled-components";

// Styled Components
const IconEl = styled.svg`
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.light}99;
    transition: fill 0.1s cubic-bezier(0.61, 1, 0.88, 1);
    
    &:hover{
    fill: ${props => props.theme.colors.primary["500"]};
    }
`

// Component
const DefaultIcon = ({ children }) => (
   <IconEl xmlns="http://www.w3.org/2000/svg">
      {children}
   </IconEl>
)

// Settings & Exports
export default DefaultIcon