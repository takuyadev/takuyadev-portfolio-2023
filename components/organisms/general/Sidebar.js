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
    padding: 2em;
    background: ${props => props.theme.colors.dark};
    transform: translateX(0px);
    transition: transform 1s cubic-bezier(0.61, 1, 0.88, 1);
    border-right: 1px solid ${props => props.theme.colors.light}80;
    height: 100vh;
    z-index: 100;
    @media (max-width: 1024px) {
        display:none;
    }
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
                <Toggle aria-label="Dark mode toggle" isActive={false} />
                <IconLinks />
            </BottomContainer>
        </SidebarEl>
    )
}

export default Sidebar