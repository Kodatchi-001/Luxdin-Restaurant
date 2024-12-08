'use client'

import { ShareinfoType } from "@/types";
import { createContext, ReactNode, useState } from "react";

const defaultValue: ShareinfoType = {
    HoverNavbar: null,
    setHoverNavbar: null,
    FAQ: [],
    BlogCards: [],
    ValuesCards: [],
    Teams: [],
    Menu: []
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

    const ValuesCards = [
        { id: 0, Tittle: 'Innovation', Discription: 'LuxeDin is committed to delivering excellence in every aspect, from food culinary creations to service, ensuring an unforgettable dining.' },
        { id: 1, Tittle: 'Elegance', Discription: 'With a sophisticated ambiance and meticulous details exuding elegance, elevating dining to a luxurious affair that resonates with refinement.' },
        { id: 2, Tittle: 'Sustainability', Discription: 'We prioritize sustainability by sourcing ingre-dients responsibly and minimize environmental impact, ensuring that each dish is ethical.' },
        { id: 3, Tittle: 'Hospitality', Discription: 'Our dedicated team goes above and beyond to ensure every guest feels welcomed and heart cherished throughout their dining journey.' }
    ]

    const Teams = [
        { id: 0, Picture: 'https://framerusercontent.com/images/8MuFJojYy41hr0U8SS8FoyoJI.png', Name: 'Philippe LeBlanc', Job: 'CEO & Owner' },
        { id: 1, Picture: 'https://framerusercontent.com/images/QNGvDPT19eI4BPXX0abIhp9I1M.png', Name: 'Rosaria Marine', Job: 'Head Sommelier' },
        { id: 2, Picture: 'https://framerusercontent.com/images/MNTgQ6LYPVgCiVKfKsaterYgOhU.png', Name: 'Isabella Martinez', Job: 'Head Pastry Chef' },
        { id: 3, Picture: 'https://framerusercontent.com/images/e1qLe6WOSas90kpXKRvvR5TDk.png', Name: 'John Smith', Job: 'Executive Chef' },
        { id: 4, Picture: 'https://framerusercontent.com/images/sVXomOPeomZyguryqKaoGMctfI.png', Name: 'Sophia Nguyen', Job: 'Restaurant Manager' },
        { id: 5, Picture: 'https://framerusercontent.com/images/lSnne0O0W3eivH9wK9PzHOvXCo.png', Name: 'David Johnson', Job: 'Head Pastry Chef' },
        { id: 6, Picture: 'https://framerusercontent.com/images/TBiyhwDOX2NDF1caJtsaqxagLM.png', Name: 'Daniel Lee', Job: 'Head Chef de Cuisine' },
        { id: 7, Picture: 'https://framerusercontent.com/images/AYHPhJe2wYjxiBuZyaS5JWgpyf4.png', Name: 'Olivia Smith', Job: 'Head Barista' },
        { id: 8, Picture: 'https://framerusercontent.com/images/CK6il39492lHSqP6TsHDCN6kkY.png', Name: 'Mario Rodriguez', Job: 'Junior Chef' }
    ]

    const Menu = [
        {
            id: 0,
            Categorie: 'Main Dishes',
            Price: 60,
            Tittle: 'Prime Truffle Ribeye',
            Discription: 'Succulent ribeye steak infused with aromatic truffle essence, served with buttery mashed potatoes.',
            Discription_2: 'Indulge in a culinary masterpiece with our Prime Truffle Ribeye. This dish is impeccably marbled and expertly grilled to perfection, with each tender bite infused with the rich aroma of truffles. Consisted of:',
            Discription_3: ['Tender pork cutlets', 'Premium-grade ribeye steak', 'Infused with aromatic truffle essence', 'Served with buttery mashed potatoes or vegetables'],
            Discription_4: 'Accompanied by velvety mashed potatoes, this dish offers a symphony of flavors that will tantalize your taste buds and leave you craving more of our fine dishes experience. Go grab a bite with our reservation.',
            Picture: 'https://framerusercontent.com/images/RMyvFtXbW9NEtXZ8P99LLUoWMo.png?scale-down-to=1024',
            Picture_2: 'https://framerusercontent.com/images/MgJHDmEbjJQmGzcW5BXdzthwY.png?scale-down-to=1024',
            Picture_3: 'https://framerusercontent.com/images/2mEe7COBlVsm5dBBz7uDJ0ZqA4.png',
            Picture_4: 'https://framerusercontent.com/images/CYVUYLToUSrYWTGAkCZMEL1dlY.png',
            Picture_5: 'https://framerusercontent.com/images/82uRfzg3GpB0CaJEhLunkdtx28.png'
        },
        {
            id: 1,
            Categorie: 'Main Dishes',
            Price: 30,
            Tittle: 'Crispy Pork Tonkatsu',
            Discription: 'Succulent pork cutlets delicately coated in panko breadcrumbs, fried to golden perfection, and served with a tangy tonkatsu sauce.',
            Discription_2: 'Enjoy our Crispy Pork Tonkatsu, where each cutlet is fried to a crunchy golden brown and served with a delicious tangy sauce that elevates its flavor.',
            Discription_3: ['Panko-crusted pork cutlet', 'Fried to golden perfection', 'Served with tangy tonkatsu sauce', 'Accompanied by a side of cabbage salad'],
            Discription_4: 'Whether youre a fan of traditional Japanese cuisine a satisfying and delicious meal, our Crispy Pork Tonkatsu is sure to leave you craving more.',
            Picture: 'https://framerusercontent.com/images/2g58jiJlfdIvfRkye2vs4wiDD4.png?scale-down-to=1024',
            Picture_2: 'https://framerusercontent.com/images/TLpjY4y5jp9DRg3WJjGDIUtEFAk.png?scale-down-to=1024',
            Picture_3: 'https://framerusercontent.com/images/gV29Pe6GDl1uhQg4X9xMwdbcio.png',
            Picture_4: 'https://framerusercontent.com/images/RLEuODyQzuYSIt8W4TDIWwkeig8.png',
            Picture_5: 'https://framerusercontent.com/images/MW6wXtcdsamKsQ4sZtiSJUVvAI4.png'
        },
        {
            id: 2,
            Categorie: 'Main Dishes',
            Price: 80,
            Tittle: 'Steak & Grilled Cauliflower',
            Discription: 'Tender, perfectly seared steak paired with smoky grilled cauliflower, harmonizing to create a decadent gastronomic experience.',
            Discription_2: 'Savor the rich flavors of our Steak & Grilled Cauliflower, where the seared steak pairs wonderfully with the smoky taste of grilled cauliflower.',
            Discription_3: ['Perfectly seared steak', 'Smoky grilled cauliflower', 'Accompanied by herb butter', 'Drizzled with balsamic reduction'],
            Discription_4: 'Ideal for a special occasion or a luxurious everyday treat, this hearty and satisfying dish will leave you wanting more. Indulge in the Steak & Grilled Cauliflower and savor a meal that exemplifies culinary excellence and sophisticated dining.',
            Picture: 'https://framerusercontent.com/images/LT7altlyE2RZjOpUTxI2R48BF94.png',
            Picture_2: 'https://framerusercontent.com/images/nEuyIrC4dRDgudR3ZYLNyZvh6M.png?scale-down-to=2048',
            Picture_3: 'https://framerusercontent.com/images/ncT6cGL2jDq4f9pTGjdyJohufDo.png',
            Picture_4: 'https://framerusercontent.com/images/ad6IyKXCl23mTK6OdLGdfZmeYOs.png',
            Picture_5: 'https://framerusercontent.com/images/L8aCuZiQZB0XoBm0Zy5CxIkZz0.png'
        },
        {
            id: 3,
            Categorie: 'Main Dishes',
            Price: 80,
            Tittle: 'Oceanic Symphony Risotto',
            Discription: 'A vibrant paella bursting with flavors of the Mediterranean, featuring fresh seafood and saffron-infused rice.',
            Discription_2: 'Dive into our Oceanic Symphony Risotto, a beautiful medley of fresh seafood cooked in saffron-infused rice for a delightful Mediterranean experience.',
            Discription_3: ['Fresh seafood mix', 'Saffron-infused rice', 'Accompanied by seasonal vegetables', 'Topped with fresh herbs'],
            Discription_4: 'Accompanied by velvety mashed potatoes, this dish offers a symphony of flavors that will tantalize your taste buds and leave you craving more of our fine dishes experience. Go grab a bite with our reservation.',
            Picture: 'https://framerusercontent.com/images/CIF2A0rUPoIDp7zIx1hsNMLyR8.png',
            Picture_2: 'https://framerusercontent.com/images/kfqfpGJFE6w3damuriHWegaqPs4.png?scale-down-to=1024',
            Picture_3: 'https://framerusercontent.com/images/nLvpZsQHWqo9DIRJMsplnc3rMA.png',
            Picture_4: 'https://framerusercontent.com/images/HhNgT9hfKO00QxSaapDRhNldas.png',
            Picture_5: 'https://framerusercontent.com/images/5MC89N9F4kRRHIIAAbc1Dq4Xyo.png'
        },
        {
            id: 4,
            Categorie: 'Disserts',
            Price: 20,
            Tittle: 'Decadent Chocolate Sundae',
            Discription: 'Immerse your taste and sense in our indulgent chocolate sundae, with a heavenly blend of rich cocoa and velvety ganache.',
            Discription_2: 'Indulge in our Decadent Chocolate Sundae, featuring rich cocoa ice cream topped with a velvety chocolate ganache and finished with whipped cream.',
            Discription_3: ['Rich cocoa ice cream', 'Velvety chocolate ganache', 'Topped with whipped cream and cherries', 'Served in a chilled glass'],
            Discription_4: 'Perfect for a special occasion or a refined evening out, this luxurious dining experience captivates with every savory spoonful. Allow yourself to be transported to the shores of the Mediterranean and indulge in a dish that exemplifies culinary artistry and sophistication.',
            Picture: 'https://framerusercontent.com/images/K54MN0WmBqImoeNQt0KnvXXJSY.png?scale-down-to=1024',
            Picture_2: 'https://framerusercontent.com/images/6rCbCtSsXSPafp1QENqp6xBBY.png?scale-down-to=1024',
            Picture_3: 'https://framerusercontent.com/images/NXGPCLzRP7YF34fDT1bZsOeOdQ.png',
            Picture_4: 'https://framerusercontent.com/images/iF6LUMID6WNuZu5qetrPr1kr6Q.png',
            Picture_5: 'https://framerusercontent.com/images/JYRl6sYxDwB7I6Ns61e8K3WDQ.png'
        },
        {
            id: 5,
            Categorie: 'Appetizers',
            Price: 10,
            Tittle: 'Garden Harvest Fruit Salad',
            Discription: 'A refreshing mix of seasonal berries, tossed with fresh fruits, bread and saucy summer sweet dressing.',
            Discription_2: 'Delight in our Garden Harvest Fruit Salad, a colorful blend of seasonal berries and fresh fruits, all drizzled with a light summer dressing.',
            Discription_3: ['Seasonal berries', 'Mixed fresh fruits', 'Tossed in a sweet summer dressing', 'Served with crispy bread'],
            Discription_4: 'Perfect for sharing with a loved one or indulging all by yourself, our Decadent Chocolate Sundae promises an unforgettable dessert experience that will delight your taste buds and bring a perfect ending to any meal.',
            Picture: 'https://framerusercontent.com/images/HdCnbfX1LOHG2PbCjgxy7ahhxVA.png?scale-down-to=1024',
            Picture_2: 'https://framerusercontent.com/images/VnsEqiF7J88tFXHUzB63SHqz6E.png?scale-down-to=1024',
            Picture_3: 'https://framerusercontent.com/images/TQ28YpzzQLxNDxGnGBDogtsFH74.png',
            Picture_4: 'https://framerusercontent.com/images/1oiN25dXgwry6loGoDl8yVFnw.png',
            Picture_5: 'https://framerusercontent.com/images/d4cglIt7UM8jSg71sJTKgYzcYOk.png'
        },
        {
            id: 6,
            Categorie: 'Soup',
            Price: 30,
            Tittle: 'Stew Elysium Bisque',
            Discription: 'Experience the divine with our stew bisque, a creamy blend of vegetable essence and subtle aromatic spices.',
            Discription_2: 'Savor the rich flavors of our Stew Elysium Bisque, a creamy and luxurious soup enriched with vegetable essence and aromatic spices.',
            Discription_3: ['Creamy vegetable bisque', 'Subtle aromatic spices', 'Served with fresh bread', 'Garnished with herbs'],
            Discription_4: 'Perfect for a chilly evening or when you need a comforting, hearty meal, our Stew Elysium Bisque is more than just a soup its an indulgent escape into culinary bliss. Each bite invites you to relax, savor, and enjoy the simple pleasures of expertly crafted comfort food.',
            Picture: 'https://framerusercontent.com/images/Q4R2cjRdAlrMhWSUxdLQBdK3NO0.png?scale-down-to=1024',
            Picture_2: 'https://framerusercontent.com/images/IuMSU2BsdcooIhH3uo90NltnSU.png?scale-down-to=1024',
            Picture_3: 'https://framerusercontent.com/images/oTXXe0DFHLh1xl69KERlSqQBCOU.png',
            Picture_4: 'https://framerusercontent.com/images/w7A6nNJgcl10UkskhNiggFnr1QY.png',
            Picture_5: 'https://framerusercontent.com/images/eJ7QJRenQ6m8im3tZxny6WriRCs.png'
        },
        {
            id: 7,
            Categorie: 'Appetizers',
            Price: 90,
            Tittle: 'Selected Cheese Bar',
            Discription: 'A curated selection of artisanal cheeses accompanied by an array of house-made condiments, fresh fruits, and nuts.',
            Discription_2: 'Indulge in our Selected Cheese Bar, featuring a diverse assortment of artisanal cheeses paired with house-made condiments and fresh fruits.',
            Discription_3: ['Assorted artisanal cheeses', 'House-made condiments', 'Fresh fruits and nuts', 'Perfect for sharing or indulging alone'],
            Discription_4: 'Perfect for a special occasion, a sophisticated appetizer, or a luxurious end to a meal, our Selected Cheese Bar invites you to indulge in the art of cheese tasting. Every bite is an exploration of flavors and textures, a journey through the world of artisanal cheese that promises to delight and satisfy.',
            Picture: 'https://framerusercontent.com/images/aikfuUDnXFQkdE5Da6CA6Fb4PqU.png?scale-down-to=1024',
            Picture_2: 'https://framerusercontent.com/images/i5nZkRjwZbIjl2Gu4zZtbQfQxM.png?scale-down-to=1024',
            Picture_3: 'https://framerusercontent.com/images/Wpo2yJYsl0XUfTs3NidASsBJnZc.png',
            Picture_4: 'https://framerusercontent.com/images/wW3EZWM1mYKdFlDq191OgbPxat8.png',
            Picture_5: 'https://framerusercontent.com/images/JSvKjlEtIrHPl2ctKH8iXsY7jU.png'
        },
        {
            id: 8,
            Categorie: 'Salad',
            Price: 40,
            Tittle: 'Sauteed Chicken Salads',
            Discription: 'A vibrant and hearty salad with sautéed chicken, fresh greens, and a variety of colorful vegetables, dressed to perfection.',
            Discription_2: 'Enjoy our Sauteed Chicken Salads, featuring tender sautéed chicken atop a bed of fresh greens and an assortment of colorful vegetables, all drizzled with a delicious dressing.',
            Discription_3: ['Sautéed chicken breast', 'Mixed fresh greens', 'Colorful seasonal vegetables', 'Light and refreshing dressing'],
            Discription_4: 'Perfect for a light lunch, a nutritious dinner, or a delightful side dish, our Sautéed Chicken Salad is a versatile option that suits any occasion. Its a refreshing and wholesome meal that satisfies the palate and nourishes the body, making it an ideal choice for those seeking both flavor and nutrition in every bite.',
            Picture: 'https://framerusercontent.com/images/uU0L57V95YLpQi6AEUIoV8MJsA.png?scale-down-to=1024',
            Picture_2: 'https://framerusercontent.com/images/N4GLFXgQTHwzdide0KOLdllaE.png?scale-down-to=1024',
            Picture_3: 'https://framerusercontent.com/images/0MyVEkuvgK7YAVFuDDSw8zAibB8.png',
            Picture_4: 'https://framerusercontent.com/images/0ry7vEcKmca40WTM26XXiGaQ.png',
            Picture_5: 'https://framerusercontent.com/images/utyv4DV8F5JHJ7MiB5tB31hR5jk.png'
        }
    ];
    const Share = {
        HoverNavbar, setHoverNavbar,
        FAQ,
        BlogCards,
        ValuesCards,
        Teams,
        Menu
    }
    return (
        <Shareinfo.Provider value={Share}>
            {children}
        </Shareinfo.Provider>
    )
}