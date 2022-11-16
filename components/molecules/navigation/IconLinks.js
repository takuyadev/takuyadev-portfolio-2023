// Packages
import styled from "styled-components";
import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { BsGithub, BsLinkedin, BsEggFill } from "react-icons/bs"

// Components
import Anchor from "@/atoms/text/Anchor";

// Styled Components
const IconLinksEl = styled.nav`
    display: flex;
    justify-content: space-between;
    list-style: none;
    gap: 1em;
    color: ${props => props.theme.colors.light};
`


// Component
function IconLinks() {
    return (
        <IconLinksEl>
            <Link href="/">
                <Anchor aria-label="Email" icon={<HiMail size={24} />} />
            </Link>
            <Link href="/">
                <Anchor aria-label="Github" icon={<BsGithub size={24} />} />
            </Link>
            <Link href="/">
                <Anchor aria-label="LinkedIn" icon={<BsLinkedin size={24} />} />

            </Link>
            <Link href="/">
                <Anchor aria-label="Easter Egg" icon={<BsEggFill size={24} />} />
            </Link>
        </IconLinksEl>
    )
}

export default IconLinks