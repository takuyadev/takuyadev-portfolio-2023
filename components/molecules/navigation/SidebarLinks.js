// Packages
import styled from "styled-components"
import {
    HiHome, HiUserCircle, HiOutlineCode, HiClipboardCheck, HiMail
} from "react-icons/hi"
import { FaBrush } from "react-icons/fa"

// Components
import Anchor from "@/atoms/text/Anchor"
import ScrollBar from "@/atoms/other/ScrollBar"

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
                    <Anchor href="/" text="Home" icon={<HiHome size={24} />} />
                    <Anchor href="/experience" text="Experience" icon={<HiClipboardCheck size={24} />} />
                    <Anchor href="/development" text="Development" icon={<HiOutlineCode size={24} />} />
                    <Anchor href="/design" text="Design" icon={<FaBrush size={24} />} />
                    <Anchor href="/contact" text="Contact" icon={<HiMail size={24} />} />
                    <Anchor href="/about" text="About" icon={<HiUserCircle size={24} />} />
                </UlEl>
            </nav>
        </NavigationEl>
    )
}

export default NavLinks