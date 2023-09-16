import { createContext, useState, ReactNode } from "react";

export const MenuContext = createContext({} as any)

interface IProps {
    children?: ReactNode
}

export const UserStore = ({ children }: IProps) => {
    const [openMenu, setOpenMenu] = useState(true)

    return (
        <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
            {children}
        </MenuContext.Provider>
    )
}