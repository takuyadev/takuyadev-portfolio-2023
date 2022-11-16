// Packages
import { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Component
const Logo = (props) => (
    <Link href="/">
        <a>
            <Image layout="fixed" width="108px" height="100px" src="/logo.png" alt="Logo of Takuya Toyokawa" {...props} />
        </a>
    </Link>
)

// Settings & Exports
export default Logo