// Packages
import { forwardRef } from "react";
import styled from "styled-components";

// Components
import DefaultBtn from "@/atoms/buttons/DefaultBtn";

// Styled Components
const PrimaryBtnEl = styled(DefaultBtn)`
    background: ${props => props.theme.colors.primary["500"]};
    color: ${props => props.theme.colors.dark["main"]};

    &:hover, &:focus{
        color: ${props => props.theme.colors.light};
        background: ${props => props.theme.colors.primary["900"]};
    }
`

// Components
const PrimaryBtn = forwardRef(({ icon, text, ...otherProps }, ref) => (
    <PrimaryBtnEl ref={ref} icon={icon} text={text} {...otherProps} />
))

// Setings & Exports
PrimaryBtn.displayName = "PrimaryBtn"

export default PrimaryBtn