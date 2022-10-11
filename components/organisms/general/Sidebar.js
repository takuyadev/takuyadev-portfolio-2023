// Packages
import styled from "styled-components";

// Components
import Toggle from 'components/atoms/Toggle'
import Logo from "components/atoms/Logo";
import NavLinks from "components/molecules/NavLinks";
import IconLinks from "components/molecules/IconLinks";

const SidebarEl = styled.aside`
    grid-area: sidebar;
    grid-column: span 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2em 1em;
    background: ${props => props.theme.colors.dark};
    border-right: 1px solid ${props => props.theme.colors.light}80;
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
            <Logo priority={true} />
            <NavLinks />
            <BottomContainer>
                <Toggle isActive={false} />
                <IconLinks />
            </BottomContainer>
        </SidebarEl>
    )
}

export default Sidebar