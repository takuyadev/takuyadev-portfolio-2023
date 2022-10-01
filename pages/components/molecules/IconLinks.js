// Packages
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, MailIcon, EasterIcon, LinkedInIcon } from "../atoms/Icons";

const IconLinksEl = styled.nav`
    display: flex;
    gap: 1em;
`
const Icon = styled(Image)`

`

function IconLinks() {
    return (
        <IconLinksEl>
            <Link href="/">
                <a>
                    <MailIcon />

                </a>
            </Link>
            <Link href="/">
                <a>
                    <GithubIcon />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <LinkedInIcon />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <EasterIcon/>
                </a>
            </Link>
        </IconLinksEl>
    )
}

export { IconLinks }