// Packages
import Image from "next/image";
import Link from "next/link";

function Logo(props) {
    return (
        <Link href="/">
            <a>
                <Image layout="fixed" width="108px" height="100px" src="/logo.png" alt="Logo of Takuya Toyokawa" {...props} />
            </a>
        </Link>
    )
}

export default Logo