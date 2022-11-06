// Packages
import { forwardRef } from "react"
import styled from "styled-components"

// Styled Components
const ListContainer = styled.ul``

const Item = styled.li``

const List = forwardRef(({ data }, ref) => (
   <ListContainer>
      {data.map((item, i) => (
         <Item key={i} >
            {item}
         </Item>
      ))}
   </ListContainer>
))

List.displayName = "List"

export default List