// Packages
import styled from "styled-components";
import { HomeIcon } from '@heroicons/react/24/solid'

// Components
import DefaultBtn from "components/atoms/buttons/DefaultBtn";

const PrimaryBtnEl = styled(DefaultBtn)`
    background: ${props => props.theme.colors.primary["500"]};
    color: ${props => props.theme.colors.dark};

    &:hover, &:focus{
        color: ${props => props.theme.colors.light};
        background: ${props => props.theme.colors.primary["900"]};
    }
`

function PrimaryBtn({ icon, text, otherProps }) {
    return (
        <PrimaryBtnEl icon={icon} text={text} {...otherProps} />
    )
}

export default PrimaryBtn