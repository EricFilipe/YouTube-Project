import { createContext, useState } from "react";

export const EmailContext = createContext({} as any)

export const EmailStorage = ({ children }: any) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    return(
        <EmailContext.Provider value={{email, setEmail, name, setName}}>
            {children}
        </EmailContext.Provider>
    )
}