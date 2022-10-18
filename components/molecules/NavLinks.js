// Packages
import styled from "styled-components"
import { HomeIcon, UserCircleIcon, CodeBracketIcon, BriefcaseIcon, EnvelopeIcon, SwatchIcon } from '@heroicons/react/24/solid'

// Components
import NavItem from "components/atoms/NavItem"
import ScrollBar from "components/atoms/ScrollBar"

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
            <ScrollBar />
            <nav>
                <UlEl>
                    <NavItem href="/" text="Home" icon={<HomeIcon />} />
                    <NavItem href="/about" text="About me" icon={<UserCircleIcon />} />
                    <NavItem href="/projects" text="Projects" icon={<CodeBracketIcon />} />
                    <NavItem href="/work" text="Work" icon={<BriefcaseIcon />} />
                    <NavItem href="/contact" text="Contact" icon={<EnvelopeIcon />} />
                    <NavItem href="/style" text="Style" icon={<SwatchIcon />} />
                </UlEl>
            </nav>
        </NavigationEl>
    )
}

export default NavLinks