import { Dispatch, SetStateAction } from "react";

export interface ShareinfoType {
    HoverNavbar: boolean | null;
    setHoverNavbar: Dispatch<SetStateAction<boolean | null>> | null;
    FAQ: FAQTypes[];
    BlogCards: BlogCardsTypes[],
    ValuesCards: ValuesCardsTypes[]
}

export interface FAQTypes {
    id: number,
    Tittle: string,
    Description: string
}

export interface BlogCardsTypes {
    id: number,
    Picture: string,
    Tittle: string,
    Person: string,
    Date: string
}

export interface ValuesCardsTypes {
    id: number,
    Tittle: string,
    Discription: string
}