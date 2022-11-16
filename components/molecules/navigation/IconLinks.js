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
    gap: 1em;
    list-style: none;
    color: ${({ theme }) => theme.light.main};
`


// Component
function IconLinks() {
    return (
        <IconLinksEl>
            <Anchor href="mailto:email@example.com" aria-label="Email" icon={<HiMail size={24} />} />
            <Link href="/">
                <Anchor aria-label="Github" icon={<BsGithub size={20} />} />
            </Link>
            <Link href="/">
                <Anchor aria-label="LinkedIn" icon={<BsLinkedin size={20} />} />
            </Link>
        </IconLinksEl>
    )
}

export default IconLinks