// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import { HomeIcon } from '@heroicons/react/24/solid'

// Components
import DefaultBtn from "@/atoms/buttons/DefaultBtn";

const PrimaryBtnEl = styled(DefaultBtn)`
    background: ${props => props.theme.colors.primary["500"]};
    color: ${props => props.theme.colors.dark};

    &:hover, &:focus{
        color: ${props => props.theme.colors.light};
        background: ${props => props.theme.colors.primary["900"]};
    }
`

const PrimaryBtn = forwardRef(({ icon, text, ...otherProps }, ref) => (
    <PrimaryBtnEl ref={ref} icon={icon} text={text} {...otherProps} />
))

PrimaryBtn.displayName = "PrimaryBtn"

export default PrimaryBtn