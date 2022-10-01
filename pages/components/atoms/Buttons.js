// Packages
import styled from "styled-components";
import { HomeIcon } from '@heroicons/react/24/solid'

const ButtonEl = styled.button`
    display:flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.5em 1.5em;
    border: transparent;
    border-radius: 50px;
    font-weight: bold;  
    cursor: pointer;
    transition: background 0.1s cubic-bezier(0.61, 1, 0.88, 1);

    & > svg {
        width: 24px;
    }
    &:hover, &:focus{
        outline: none;  
    }
`

const PrimaryBtnEl = styled(ButtonEl)`
    background: ${props => props.theme.colors.primary["500"]};
    color: ${props => props.theme.colors.dark};

    &:hover, &:focus{
        color: ${props => props.theme.colors.light};
        background: ${props => props.theme.colors.primary["900"]};
    }
`

function PrimaryBtn({ text, icon }) {
    return (
        <PrimaryBtnEl>
            {icon}
            {text}
        </PrimaryBtnEl>
    )
}

PrimaryBtn.defaultProps = {
    text: "Default",
    icon: <HomeIcon />
}

export { PrimaryBtn }