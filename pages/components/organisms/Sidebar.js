// Packages
import styled from "styled-components";
import { NavLinks } from "../molecules/NavLinks";
import { Toggle } from '../atoms/Toggle'
import { Logo } from "../atoms/Logo";
import { IconLinks } from "../molecules/IconLinks";

const SidebarEl = styled.aside`
    grid-area: sidebar;
    grid-column: span 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2em 1em;
    background: ${props => props.theme.colors.dark};
    height: 100vh;
`

const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
`

function Sidebar() {
    return (
        <SidebarEl>
            <Logo />
            <NavLinks />
            <BottomContainer>
                <Toggle isActive={false} />
                <IconLinks/>
            </BottomContainer>
        </SidebarEl>
    )
}

export { Sidebar }