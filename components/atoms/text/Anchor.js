// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import { HomeIcon } from '@heroicons/react/24/solid';

// Styled Components
const StyledAnchor = styled.li`
    color: ${props => props.theme.colors.light}99;
    font-weight: bold;
    transition: color 0.2s cubic-bezier(0.61, 1, 0.88, 1);
    cursor:pointer;

    & a {
        display:flex;
        align-items: center;
        gap: 1.5em;
    }

    &:hover, &:focus{
        color: ${props => props.theme.colors.light};
    }
`
// Component
const Anchor = forwardRef(({ href, icon, text, ...otherProps }, ref) => (
    <Link
        ref={ref}
        href={href}
        {...otherProps}
    >
        <StyledAnchor>
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