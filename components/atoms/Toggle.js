// Packages
import styled from "styled-components";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ToggleEl = styled.button`
    position: relative;
    width: 60px;
    height: 27px;
    padding: 0.25em;
    background: ${props =>
        props.isActive ? props.theme.colors.light : props.theme.colors.primary["500"]};
    border-radius: 25px;
    border:none;
    cursor:pointer;
    transition: background 0.1s cubic-bezier(0.61, 1, 0.88, 1);

    &:hover{
        background: ${props => props.theme.colors.primary["900"]};
    }
`

const SliderIcon = styled.div`
    position:absolute;
    top: 2px;
    transform: translateX(${props => props.isActive ? "0px" : "31.5px"});
    width: 22px;
    height: 22px;
    padding: 0.2em;
    background: ${props => props.theme.colors.dark};
    color: ${props =>
        props.isActive ? props.theme.colors.light : props.theme.colors.primary["500"]};
    border-radius: 50%;
    transition: transform 0.25s cubic-bezier(0.85, 0, 0.15, 1);
`

const DarkIcon = styled(MoonIcon)`
    width: 16px;
    height: 16px;
`

function Toggle({ onClick, isActive, ...otherProps }) {
    return (
        <ToggleEl {...otherProps} isActive={isActive} onClick={onClick}>
            <SliderIcon isActive={isActive}>
                {isActive ? <SunIcon /> : <DarkIcon />}
            </SliderIcon>
        </ToggleEl>
    )
}

Toggle.defaultProps = {
    isActive: true
}

export default Toggle
