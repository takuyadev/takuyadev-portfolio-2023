// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

// Styled Components
const ToggleEl = styled.button`
    position: relative;
    width: 60px;
    height: 27px;
    padding: 0.25em;
    background: ${({ isActive, theme }) =>
        isActive ? theme.light.main : theme.primary.main};
    border-radius: 25px;
    border:none;
    cursor:pointer;
    transition: background 0.1s cubic-bezier(0.61, 1, 0.88, 1);

    &:hover{
        background: ${({ theme }) => theme.primary.dark};
    }
`

const SliderIcon = styled.div`
    position:absolute;
    top: 2px;
    transform: translateX(${({ isActive }) => isActive ? "0px" : "31.5px"});
    width: 22px;
    height: 22px;
    padding: 0.2em;
    background: ${({ theme }) => theme.dark.main};
    color: ${({ isActive, theme }) =>
        isActive ? theme.light.main : theme.primary.main};
    border-radius: 50%;
    transition: transform 0.25s cubic-bezier(0.85, 0, 0.15, 1);
`

const DarkIcon = styled(MoonIcon)`
    width: 16px;
    height: 16px;
`

// Component
const Toggle = forwardRef(({ onClick, isActive, ...otherProps }, ref) => (
    <ToggleEl
        ref={ref}
        onClick={onClick}
        isActive={isActive}
        {...otherProps}
    >
        <SliderIcon isActive={isActive}>
            {isActive ? <SunIcon /> : <DarkIcon />}
        </SliderIcon>
    </ToggleEl>
))

// Settings & Exports
Toggle.displayName = "Toggle"

Toggle.defaultProps = {
    isActive: true
}

export default Toggle
