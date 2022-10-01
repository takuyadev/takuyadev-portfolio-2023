// Packages
import styled from "styled-components"
import { NavItem } from "../atoms/NavItem"
import { HomeIcon, UserCircleIcon, CodeBracketIcon, BriefcaseIcon, EnvelopeIcon, SwatchIcon } from '@heroicons/react/24/solid'
import { ScrollBar } from "../atoms/ScrollBar"

const NavigationEl = styled.div`
    display: flex;
    gap: 1.5em;
`

const UlEl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2em;
    margin: 0;
    padding: 0;
    list-style:none;
`

function NavLinks() {
    return (
        <NavigationEl>
            <ScrollBar/>
            <nav>
                <UlEl>
                    <NavItem text="Home" icon={<HomeIcon />} />
                    <NavItem text="About Us" icon={<UserCircleIcon />} />
                    <NavItem text="Projects" icon={<CodeBracketIcon />} />
                    <NavItem text="Work" icon={<BriefcaseIcon />} />
                    <NavItem text="Contact" icon={<EnvelopeIcon />} />
                    <NavItem text="Style" icon={<SwatchIcon />} />
                </UlEl>
            </nav>
        </NavigationEl>
    )
}

export { NavLinks }