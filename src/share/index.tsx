'use client'

import { ShareinfoType } from "@/types";
import { createContext, ReactNode, useState } from "react";

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