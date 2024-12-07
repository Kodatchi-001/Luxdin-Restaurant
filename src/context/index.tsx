'use client'

import { ShareinfoType } from "@/types";
import { createContext, ReactNode, useState } from "react";

const defaultValue: ShareinfoType = {
    HoverNavbar: null,
    setHoverNavbar: null,
    FAQ: [],
    BlogCards: []
};

export const Shareinfo = createContext<ShareinfoType>(defaultValue);

export default function ShareProvider({ children }: { children: ReactNode }) {
    const [HoverNavbar, setHoverNavbar] = useState<boolean | null>(null);

    const FAQ = [
        { id: 0, Tittle: 'How can I make a reservation?', Description: 'To make a reservation at LuxDin, you can either call our reservation hotline at +1 (555) 123-4567 or use our online booking system on our website. We recommend making reservations in advance to ensure availability.' },
        { id: 1, Tittle: 'Can I purchase gift cards for LuxDin?', Description: ' Absolutely! LuxDin offers gift cards that make the perfect present for any occasion. Gift cards can be purchased online through our website or in person at the restaurant. Treat your loved ones to the gift of fine dining and unforgettable experiences.' },
        { id: 2, Tittle: 'What is the dress code at LuxDin?', Description: ' LuxDin maintains a smart casual dress code to uphold the elegant ambiance of our restaurant. We recommend business casual attire , but formal wear is also welcome for those seeking a truly luxurious dining experience.' },
        { id: 3, Tittle: 'Can you accommodate dietary restrictions?', Description: ' Absolutely! At LuxDin, we understand the importance of catering to dietary preferences and restrictions. Simply inform our staff of your requirements when making your reservation, and our chefs will craft a delightful culinary experience tailored to your needs.' }
    ]

    const BlogCards = [
        { id: 0, Picture: 'https://framerusercontent.com/images/zzSwNdQkfHFovhgzFT2zpgFb8E.png', Tittle: 'The Art of Pairing : Elevating Your Dining Experience with Wine & Cuisine', Person: 'Januar Lestari', Date: '12 JAN 2024' },
        { id: 1, Picture: 'https://framerusercontent.com/images/oJYPn6QScLvAgmZgQSZQQCn6YQg.png', Tittle: 'Unveiling the Artistry: A Journey Through Our Restaurant Signature Hospitality', Person: 'Sonny Wilson', Date: '30 JUNE 2024' },
        { id: 2, Picture: 'https://framerusercontent.com/images/p0lBYw9xAyDrNv2ogOko0X51s64.png', Tittle: 'From Farm to Table: The Essence of Seasonal Cuisine in Fine Dining', Person: 'Alexander Roberts', Date: '14 JUNE 2024' },
        { id: 3, Picture: 'https://framerusercontent.com/images/gzsDiItyO89QwT3MCSGa2yfhAg.png?scale-down-to=512', Tittle: 'The Perfect Brunch: Elevating Morning Meals to a Luxurious Experience', Person: 'Olivia Sinclair', Date: '31 MAY 2024' },
        { id: 4, Picture: 'https://framerusercontent.com/images/ZICgs8EkhSFVk5Fj17KO9SICGRM.png', Tittle: 'Mastering the Perfect Dessert: Tips and Techniques from LuxDins Pastry Chefs', Person: 'Michael Smith', Date: '21 APRIL 2024' }
    ]

    const Share = {
        HoverNavbar, setHoverNavbar,
        FAQ,
        BlogCards
    }
    return (
        <Shareinfo.Provider value={Share}>
            {children}
        </Shareinfo.Provider>
    )
}