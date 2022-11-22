// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import Link from "next/link";

// Styled Components
const StyledAnchor = styled.li`
    color: ${({ theme }) => theme.light.main}99;
    font-weight: bold;
    transition: color 0.2s cubic-bezier(0.61, 1, 0.88, 1);
    cursor:pointer;

    & a {
        display:flex;
        align-items: center;
        gap: 1.5em;
    }

    &:hover, &:focus{
        color: ${({ theme }) => theme.light.main};
    }
`

// Component
const Anchor = forwardRef(({ href, onClick, icon, text, ...otherProps }, ref) => (
    <Link
        ref={ref}
        href={href}
    >
        <StyledAnchor
            onClick={onClick}
            {...otherProps}

        >
            <a tabIndex="0">
                {icon && icon}
                {text && text}
            </a>
        </StyledAnchor>
    </Link>
))

// Settings & Exports
Anchor.displayName = "NavItem"

Anchor.defaultProps = {
    href: "/"
}

export default Anchor