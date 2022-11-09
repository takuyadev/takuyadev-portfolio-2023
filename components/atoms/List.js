// Packages
import { forwardRef } from "react"
import styled from "styled-components"



// Styled Components
const listStyle = `
   display:flex;
   flex-direction: column;
   gap: 0.5em;
`

const UlContainer = styled.ul`
   ${listStyle}
`

const OlContainer = styled.ol`
   ${listStyle}
`

const Item = styled.li``

const List = forwardRef(({ isOrdered, data }, ref) => (
   <>
      {isOrdered ?
         <OlContainer>
            {data.map((item, i) => (
               <Item key={i} >
                  {item}
               </Item>
            ))}
         </OlContainer> :
         <UlContainer>
            {data.map((item, i) => (
               <Item key={i} >
                  {item}
               </Item>
            ))}
         </UlContainer>
      }
   </>
))

// Settings & Exports
List.defaultProps = {
   isOrdered: true
}

List.displayName = "List"

export default List