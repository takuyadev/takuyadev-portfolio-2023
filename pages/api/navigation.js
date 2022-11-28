import {
   HiHome,
   HiUserCircle,
   HiOutlineCode,
   HiClipboardCheck,
   HiMail,
} from "react-icons/hi"
import { FaBrush } from "react-icons/fa"

export default function handler(req, res) {
   res.status(200).json(
      {
         data: [
            {
               title: "Home",
               href: "/",
               icon: <HiHome size={24} />
            },
            {
               title: "Experience",
               href: "/experience",
               icon: <HiClipboardCheck size={24} />
            },
            {
               title: "Development",
               href: "/development",
               icon: <HiOutlineCode size={24} />
            },
            {
               title: "Design",
               href: "/design",
               icon: <FaBrush size={24} />
            },
            {
               title: "Contact",
               href: "/contact",
               icon: <HiMail size={24} />
            },
            {
               title: "About",
               href: "/about",
               icon: <HiUserCircle size={24} />
            }
         ]
      }
   )
}
