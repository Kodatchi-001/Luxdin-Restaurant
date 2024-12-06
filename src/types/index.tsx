import { Dispatch, SetStateAction } from "react";

export interface ShareinfoType {
    HoverNavbar: boolean | null;
    setHoverNavbar: Dispatch<SetStateAction<boolean | null>> | null;
}