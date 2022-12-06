// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const StyledItem = styled.li`
  line-height: 175%;
  color: ${({ theme }) => theme.light.main};
`

const Item = forwardRef(({ children }, ref) => (
  <StyledItem ref={ref}>{children}</StyledItem>
))

// Settings & Exports
Item.defaultProps = {
  isOrdered: true,
}

Item.displayName = "Item"

export default Item
