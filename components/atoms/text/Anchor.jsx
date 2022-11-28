// Packages
import { forwardRef } from "react"
import styled from "styled-components"
import Link from "next/link"

// Styled Components
const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  gap: 1em;
  text-decoration: none;
  color: ${({ theme, isActive }) =>
    !isActive ? theme.light.main + "99" : theme.primary.main + "!important"};
  font-weight: bold;
  transition: color 0.2s cubic-bezier(0.61, 1, 0.88, 1);
  cursor: pointer;

  & a {
    display: flex;
    align-items: center;
    gap: 1.5em;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.light.main};
  }
`
// Component
const Anchor = forwardRef(
  ({ href, onClick, icon, text, pathName, className, ...otherProps }, ref) => {
    const isActive = pathName === href
    return (
      <Link ref={ref} href={href} passHref={true}>
        <StyledAnchor
          tabIndex="0"
          className={className}
          onClick={onClick}
          isActive={isActive}
          {...otherProps}
        >
          {icon && icon}
          {text && text}
        </StyledAnchor>
      </Link>
    )
  }
)

// Settings & Exports
Anchor.displayName = "Anchor"

Anchor.defaultProps = {
  href: "/",
}

export default Anchor
