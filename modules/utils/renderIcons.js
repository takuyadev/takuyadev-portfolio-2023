import {
  SiWix,
  SiFramer,
  SiTypescript,
  SiStorybook,
  SiCypress,
  SiTailwindcss,
  SiFirebase,
  SiJest,
  SiJirasoftware,
  SiAdobeaudition,
  SiAdobeindesign,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiStyledcomponents,
  SiJavascript,
  SiNextdotjs,
  SiSass,
  SiPassport,
  SiJsonwebtokens,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiFigma,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiHtml5,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";
import { BsWordpress } from "react-icons/bs";
import { FaElementor, FaReact, FaCss3 } from "react-icons/fa";
import { HiAcademicCap, HiBriefcase, HiUserCircle } from "react-icons/hi";
import { TbApi } from "react-icons/tb";

// Add icons to this list if you want to render based off of provided text / tag
const renderIcons = (text) => {
  let icon;
  switch (text) {
    case "work":
      icon = <HiBriefcase size={20} />;
      break;
    case "education":
      icon = <HiAcademicCap size={20} />;
      break;
    case "personal":
      icon = <HiUserCircle size={20} />;
      break;
    case "react":
      icon = <FaReact size={20} />;
      break;
    case "API":
      icon = <TbApi size={20} />;
      break;
    case "next.js":
      icon = <SiNextdotjs size={20} />;
      break;
    case "framer motion":
      icon = <SiFramer size={20} />;
      break;
    case "typescript":
      icon = <SiTypescript size={20} />;
      break;
    case "html":
      icon = <SiHtml5 size={20} />;
      break;
    case "css":
      icon = <FaCss3 size={20} />;
      break;
    case "javascript ES6":
      icon = <SiJavascript size={20} />;
      break;
    case "cypress":
      icon = <SiCypress size={20} />;
      break;
    case "jest":
      icon = <SiJest size={20} />;
      break;
    case "styled components":
      icon = <SiStyledcomponents size={20} />;
      break;
    case "tailwindCSS":
      icon = <SiTailwindcss size={20} />;
      break;
    case "storybook":
      icon = <SiStorybook size={20} />;
      break;
    case "firebase":
      icon = <SiFirebase size={20} />;
      break;
    case "node.js":
      icon = <SiNodedotjs size={20} />;
      break;
    case "express":
      icon = <SiExpress size={20} />;
      break;
    case "mongoDB":
      icon = <SiMongodb size={20} />;
      break;
    case "wix":
      icon = <SiWix size={20} />;
      break;
    case "figma":
      icon = <SiFigma size={20} />;
      break;
    case "photoshop":
      icon = <SiAdobephotoshop size={20} />;
      break;
    case "illustrator":
      icon = <SiAdobeillustrator size={20} />;
      break;
    case "after effects":
      icon = <SiAdobeaftereffects size={20} />;
      break;
    case "indesign":
      icon = <SiAdobeindesign size={20} />;
      break;
    case "premiere pro":
      icon = <SiAdobepremierepro size={20} />;
      break;
    case "audition":
      icon = <SiAdobeaudition size={20} />;
      break;
    case "jira":
      icon = <SiJirasoftware size={20} />;
      break;
    case "wordpress":
      icon = <BsWordpress size={20} />;
      break;
    case "elementor":
      icon = <FaElementor size={20} />;
      break;
    case "prisma":
      icon = <SiPrisma size={20} />;
      break;
    case "postgresql":
      icon = <SiPostgresql size={20} />;
      break;
    case "sass":
      icon = <SiSass size={20} />;
      break;
    case "passport":
      icon = <SiPassport size={20} />;
      break;
    case "jsonwebtoken":
      icon = <SiJsonwebtokens size={20} />;
      break;
  }
  return <>{icon}</>;
};

export { renderIcons };
