// Packages
import styled from "styled-components";

// Components
import Toggle from '@/atoms/input/Toggle'
import Logo from "@/atoms/img/Logo";
import NavLinks from "@/molecules/navigation/NavLinks";
import IconLinks from "@/molecules/navigation/IconLinks";

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
        display:none;
    }
`

const BottomContainer = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
`

function Sidebar() {
    return (
        <SidebarEl aria-label="sidebar">
            <Logo priority={true} />
            <NavLinks />
            <BottomContainer>
                <IconLinks />
            </BottomContainer>
        </SidebarEl>
    )
}

export default Sidebar