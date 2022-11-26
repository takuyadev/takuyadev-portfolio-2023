// Packages
import { forwardRef } from "react";
import styled from "styled-components";

// Styled Components
const Button = styled.button`
   display: flex;
   align-items:center;
   justify-content: center;
   height: 42px;
   width: 42px;
   color: ${({ theme }) => theme.dark.main};
   background: ${({ theme }) => theme.primary.main};
   transition: background 0.1s cubic-bezier(0.61, 1, 0.88, 1);
   border-radius: 50%;
   border: none;

   &:focus{
      color: ${({ theme }) => theme.light.main};
      background: ${({ theme }) => theme.primary.dark};
   }

   &:hover{
      cursor:pointer;
      color: ${({ theme }) => theme.light.main};
      background: ${({ theme }) => theme.primary.darker};
   }
   
   &:disabled{
      cursor: none;
      color: ${({ theme }) => theme.primary.dark};
      background: ${({ theme }) => theme.primary.darker};
   }
`

const CircleBtn = forwardRef(({ className, icon, onClick }, ref) => (
   <Button ref={ref} className={className} onClick={onClick}>
      {icon}
   </Button>
))

// Settings & Exports


CircleBtn.displayName = "RoundBtn"

export default CircleBtn