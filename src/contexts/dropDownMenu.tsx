import { createContext, useState } from 'react';

export const DropDownContext = createContext({} as any)

export const DropDownStorage = ({children}: any) => {
    const [isActive, setIsActive] = useState(false)
 
    return(
        <DropDownContext.Provider value={{ isActive, setIsActive }}>
            {children}
        </DropDownContext.Provider>
    )
}