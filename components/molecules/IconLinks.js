// Packages
import styled from "styled-components";
import Link from "next/link";

// Components
import GithubIcon from "components/atoms/icons/GithubIcon";
import MailIcon from "components/atoms/icons/MailIcon";
import LinkedInIcon from "components/atoms/icons/LinkedInIcon";
import EasterIcon from "components/atoms/icons/EasterIcon";

const IconLinksEl = styled.nav`
    display: flex;
    gap: 1em;
`

function IconLinks() {
    return (
        <IconLinksEl>
            <Link href="/">
                <a aria-label="Email">
                    <MailIcon />
                </a>
            </Link>
            <Link href="/">
                <a aria-label="Github">
                    <GithubIcon />
                </a>
            </Link>
            <Link href="/">
                <a aria-label="LinkedIn">
                    <LinkedInIcon />
                </a>
            </Link>
            <Link href="/">
                <a aria-label="Easter Egg">
                    <EasterIcon />
                </a>
            </Link>
        </IconLinksEl>
    )
}

export default IconLinks