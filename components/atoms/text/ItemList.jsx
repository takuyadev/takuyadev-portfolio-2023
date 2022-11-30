// Packages
import { forwardRef } from "react"

// Components
import List from "@/atoms/text/List"
import Item from "@/atoms/text/Item"

// Component
// ? Despite being two atoms, decided to put into atoms for flexibility fdr molecules
const ItemList = forwardRef(({ isOrdered, className, data }, ref) => (
  <List ref={ref} className={className} isOrdered={isOrdered}>
    {data.map((item, i) => (
      <Item key={i}>{item}</Item>
    ))}
  </List>
))

// Settings & Exports
ItemList.displayName = "ItemList"

export default ItemList
