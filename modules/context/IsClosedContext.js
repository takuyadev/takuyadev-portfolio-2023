// Packages
import { useState, createContext } from "react";

const IsClosedContext = createContext()

const IsClosedContextProvider = ({ children }) => {
   const [isClosed, setIsClosed] = useState(true)

   return (
      <IsClosedContext.Provider value={{ isClosed, setIsClosed }}>
         {children}
      </IsClosedContext.Provider>
   )
}

// Settings & Exports

export { IsClosedContext, IsClosedContextProvider }