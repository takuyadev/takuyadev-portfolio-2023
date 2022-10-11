// Packages
import styled from "styled-components";
import Link from "next/link";
import { HomeIcon } from '@heroicons/react/24/solid';

const NavItemEl = styled.li`
    color: ${props => props.theme.colors.light}99;
    font-weight: bold;
    cursor:pointer;
    transition: color 0.2s cubic-bezier(0.61, 1, 0.88, 1);

    & svg {
        width: 24px;
    }

    & a {
        display:flex;
        align-items: center;
        gap: 1.5em;
    }

    &:hover, &:focus{
        color: ${props => props.theme.colors.primary["500"]};
    }
`

function NavItem({ href, icon, text }) {
    return (
        <Link href={href}>
            <NavItemEl>
                <a>
                    {icon}
                    {text}
                </a>
            </NavItemEl>
        </Link>
    )
}

NavItem.defaultProps = {
    href: "/",
    text: "Default",
    icon: <HomeIcon />
}

export default NavItem