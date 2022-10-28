// Packages
import { forwardRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import { HomeIcon } from '@heroicons/react/24/solid';

// Styled Components
const NavItemEl = styled.li`
    color: ${props => props.theme.colors.light}99;
    font-weight: bold;
    transition: color 0.2s cubic-bezier(0.61, 1, 0.88, 1);
    cursor:pointer;

    & svg {
        width: 24px;
    }

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
const NavItem = forwardRef(({ href, icon, text }, ref) => (
    <Link
        ref={ref}
        href={href}
    >
        <NavItemEl>
            <a tabIndex="0">
                {icon}
                {text}
            </a>
        </NavItemEl>
    </Link>
))

// Settings & Exports
NavItem.displayName = "NavItem"

NavItem.defaultProps = {
    href: "/",
    text: "Default",
    icon: <HomeIcon />
}

export default NavItem