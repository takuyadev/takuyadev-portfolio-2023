// Packages
import Image from "next/image";
import Link from "next/link";

function Logo() {
    return (
        <Link href="/">
            <a>
                <Image layout="fixed" width="108px" height="100px" src="/logo.png" />
            </a>
        </Link>
    )
}

export { Logo }