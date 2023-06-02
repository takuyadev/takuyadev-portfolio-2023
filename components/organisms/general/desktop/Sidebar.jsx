// Packages
import styled from "styled-components";
import Link from "next/link";

// Components
import Logo from "@/atoms/img/Logo";
import SidebarLinks from "@/molecules/navigation/SidebarLinks";
import IconLinks from "@/molecules/navigation/IconLinks";
import PrimaryBtn from "@/atoms/buttons/PrimaryBtn";
import { FaClipboard } from "react-icons/fa";

const SidebarEl = styled.div`
  grid-area: sidebar;
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
  background: ${({ theme }) => theme.dark.main};
  transform: translateX(0px);
  transition: transform 1s cubic-bezier(0.61, 1, 0.88, 1);
  border-right: 1px solid ${({ theme }) => theme.light.main}80;
  height: 100vh;
  z-index: 100;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const BottomContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

function Sidebar({ position, pathName, setIsClosed }) {
  return (
    <SidebarEl aria-label="sidebar">
      <Logo />
      <SidebarLinks position={position} pathName={pathName} />
      <BottomContainer>
        <Link
          href="https://drive.google.com/file/d/1qs_0fH0mIlTwwlzt33-x-re2OsZAxIaj/view?usp=sharing"
          passHref
        >
          <PrimaryBtn
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            text="Résumé"
          />
        </Link>
        <IconLinks />
      </BottomContainer>
    </SidebarEl>
  );
}

export default Sidebar;
