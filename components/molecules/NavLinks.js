// Packages
import styled from "styled-components"
import { HomeIcon, UserCircleIcon, CodeBracketIcon, BriefcaseIcon, EnvelopeIcon, SwatchIcon, LightBulbIcon } from '@heroicons/react/24/solid'

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
                    <NavItem href="/experience" text="Experience" icon={<LightBulbIcon />} />
                    <NavItem href="/development" text="Development" icon={<CodeBracketIcon />} />
                    <NavItem href="/design" text="Design" icon={<BriefcaseIcon />} />
                    <NavItem href="/contact" text="Contact" icon={<EnvelopeIcon />} />
                    <NavItem href="/style" text="Style" icon={<SwatchIcon />} />
                    <NavItem href="/about" text="About" icon={<UserCircleIcon />} />
                </UlEl>
            </nav>
        </NavigationEl>
    )
}

export default NavLinks