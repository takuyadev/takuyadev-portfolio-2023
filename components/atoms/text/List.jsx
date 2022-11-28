// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const listStyle = `
   display:flex;
   flex-direction: column;
   gap: 0.25m;
   margin: 0;
`

const UlContainer = styled.ul`
  ${listStyle}
`

const OlContainer = styled.ol`
  ${listStyle}
`

const List = forwardRef(({ isOrdered, children, className }, ref) => (
  <>
    {isOrdered ? (
      <OlContainer ref={ref} className={className}>
        {children}
      </OlContainer>
    ) : (
      <UlContainer ref={ref} className={className}>
        {children}
      </UlContainer>
    )}
  </>
))

// Settings & Exports
List.defaultProps = {
  isOrdered: true,
}

List.displayName = "List"

export default List
