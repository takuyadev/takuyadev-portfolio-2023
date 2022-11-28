// Packages
import styled from "styled-components";
import { forwardRef } from "react";
import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { BsGithub, BsLinkedin } from "react-icons/bs"

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
const IconLinks = forwardRef(({ className }, ref) => (
    <IconLinksEl ref={ref} className={className}>
        <Anchor href="mailto:email@example.com" aria-label="Email" icon={<HiMail size={24} />} />
        <Link href="/">
            <Anchor aria-label="Github" icon={<BsGithub size={20} />} />
        </Link>
        <Link href="/">
            <Anchor aria-label="LinkedIn" icon={<BsLinkedin size={20} />} />
        </Link>
    </IconLinksEl>
))


// Settings & Exports
IconLinks.displayName = "IconLinks"

export default IconLinks
