'use client'

import { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";

interface ShareinfoType {
    HoverNavbar: boolean | null;
    setHoverNavbar: Dispatch<SetStateAction<boolean | null>> | null;
}

const defaultValue: ShareinfoType = {
    HoverNavbar: null,
    setHoverNavbar: null
};


export const Shareinfo = createContext<ShareinfoType>(defaultValue);

export default function ShareProvider({ children }: { children: ReactNode }) {
    const [HoverNavbar, setHoverNavbar] = useState<boolean | null>(null);
    console.log(HoverNavbar)
    const Share = {
        HoverNavbar, setHoverNavbar,
    }
    return (
        <Shareinfo.Provider value={Share}>
            {children}
        </Shareinfo.Provider>
    )
}