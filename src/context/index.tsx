'use client'

import { ShareinfoType } from "@/types";
import { createContext, ReactNode, useState } from "react";

const defaultValue: ShareinfoType = {
    HoverNavbar: null,
    setHoverNavbar: null,
    FAQ: [],
    FAQV2: [],
    BlogCards: [],
    ValuesCards: [],
    Teams: [],
    Menu: [],
    ShareCategories: null,
    setShareCategories: () => { },
    BlogDetails: []
};

export const Shareinfo = createContext<ShareinfoType>(defaultValue);

export default function ShareProvider({ children }: { children: ReactNode }) {
    const [HoverNavbar, setHoverNavbar] = useState<boolean | null>(null);
    const [ShareCategories, setShareCategories] = useState<string | null>('');

    const FAQ = [
        { id: 0, Tittle: 'How can I make a reservation?', Description: 'To make a reservation at LuxDin, you can either call our reservation hotline at +1 (555) 123-4567 or use our online booking system on our website. We recommend making reservations in advance to ensure availability.' },
        { id: 1, Tittle: 'Can I purchase gift cards for LuxDin?', Description: ' Absolutely! LuxDin offers gift cards that make the perfect present for any occasion. Gift cards can be purchased online through our website or in person at the restaurant. Treat your loved ones to the gift of fine dining and unforgettable experiences.' },
        { id: 2, Tittle: 'What is the dress code at LuxDin?', Description: ' LuxDin maintains a smart casual dress code to uphold the elegant ambiance of our restaurant. We recommend business casual attire , but formal wear is also welcome for those seeking a truly luxurious dining experience.' },
        { id: 3, Tittle: 'Can you accommodate dietary restrictions?', Description: ' Absolutely! At LuxDin, we understand the importance of catering to dietary preferences and restrictions. Simply inform our staff of your requirements when making your reservation, and our chefs will craft a delightful culinary experience tailored to your needs.' }
    ]

    const FAQV2 = [
        { id: 0, Tittle: 'How can I make a reservation?', Description: 'To make a reservation at LuxDin, you can either call our reservation hotline at +1 (555) 123-4567 or use our online booking system on our website. We recommend making reservations in advance to ensure availability.' },
        { id: 1, Tittle: 'What is the dress code at LuxDin?', Description: 'LuxDin maintains a smart casual dress code to uphold the elegant ambiance of our restaurant. We recommend business casual attire, but formal wear is also welcome for those seeking a truly luxurious dining.' },
        { id: 2, Tittle: 'Are children allowed at LuxDin?', Description: 'While we welcome families with children at LuxDin, we kindly ask that parents ensure their little ones are well-behaved to maintain the serene atmosphere for all guests. Highchairs and childrens menus are available upon request.' },
        { id: 3, Tittle: 'Can I purchase gift cards for LuxDin?', Description: 'Absolutely! LuxDin offers gift cards that make the perfect present for any occasion. Gift cards can be purchased online through our website or in person at the restaurant. Treat your loved ones to the gift of fine dining and unforgettable experiences.' }
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

    const BlogDetails = [
        {
            id: 0,
            Tittle: 'Pairing wine with food is an age-old practice that can elevate any dining experience.',
            Description: 'Whether youre at a Michelin-starred restaurant or enjoying a home-cooked meal with friends. The perfect combination of flavors can enhance the taste of both the food and the wine, creating a harmonious balance that tantalizes the taste buds. When it comes to pairing wine with cuisine, there are a few key principles to keep in mind. One of the most important factors is to consider the flavor profile of both the dish and the wine. For example, a bold, full-bodied red wine like Cabernet Sauvignon pairs well with rich, hearty dishes such as steak or braised lamb, while a crisp, acidic white wine like Sauvignon Blanc complements lighter fare like seafood or salads.',
            Picture: 'https://framerusercontent.com/images/jzhZGAGcZZks8wfJ332kY8kbIDs.png',
            Description_2: [
                { Text: 'Texture is another important consideration when pairing wine with food. Wines with high levels of tannins, such as Cabernet Sauvignon or Syrah, pair well with dishes that have a rich, fatty texture, as the tannins help to cut through the richness and cleanse the palate. Conversely, lighter wines with softer tannins, such as Pinot Noir or Chardonnay, are better suited to dishes with a lighter texture, such as grilled chicken or pasta with a cream-based sauce.' },
                { Text: 'In addition to considering the flavor and texture of the food and wine, its also important to think about the intensity of the flavors. A wine that is too overpowering can easily overwhelm the flavors of the food, while a wine that is too subtle may get lost in the mix. Aim for a balance of flavors that complement each other without overpowering one another.' },
                { Text: 'Ultimately, the art of pairing wine with cuisine is about experimentation and discovery. Dont be afraid to try new combinations and trust your own palate to guide you. Whether youre dining out at a fancy restaurant or enjoying a meal at home, the right pairing can take your dining experience to the next level, leaving you with memories to savor long after the meal is over.' }
            ],
            Person: 'When pairing wine with cuisine, aim for a balance of flavors that complement each other without overpowering one another.'
        },
        {
            id: 1,
            Tittle: 'Step into the world of LuxDin, where dining transcends mere sustenance to become an immersive journey of taste, ambiance, and unmatched hospitality.',
            Description: 'Nestled in the heart of the city, our restaurant is more than just a destination—its an experience to be savored, a celebration of culinary artistry and the finer things in life. Join us as we peel back the layers to unveil the essence of our restaurants signature hospitality, inviting you to embark on a culinary odyssey like no other.',
            Picture: 'https://framerusercontent.com/images/p5PJ0l4sLWm9fxp4susvHXFJeU.png',
            Description_2: [
                { Tittle_Text: 'Crafting Memorable Moments', Text: 'From the moment you step through our doors, youll be greeted by the warm glow of hospitality that sets LuxDin apart. Our dedicated team of chefs, servers, and staff work tirelessly behind the scenes to ensure that every aspect of your dining experience is nothing short of extraordinary. Whether its a special occasion or a spontaneous night out, were here to craft memorable moments that will linger long after the last bite is savored.' },
                { Tittle_Text: 'A Symphony of Flavors', Text: 'At LuxDin, dining is an art form—a delicate balance of flavors, textures, and aromas that dance across your palate with each bite. From our meticulously curated menu to our carefully selected wine pairings, every dish tells a story of craftsmanship and passion. Whether youre indulging in our signature dishes or exploring our seasonal specials, youll discover a symphony of flavors that will tantalize your taste buds and leave you craving more.' },
                { Tittle_Text: 'Elevating the Dining Experience', Text: 'Our commitment to excellence extends beyond the plate. From the elegant ambiance of our dining room to the attentive service of our staff, every detail is designed to elevate your dining experience to new heights. Whether youre celebrating a milestone or simply enjoying a night out with friends, our goal is to provide an unforgettable experience that leaves you feeling pampered, satisfied, and eager to return.' },
                { Tittle_Text: 'Your Invitation Awaits', Text: 'Join us at LuxDin and experience the artistry of our restaurants signature hospitality firsthand. Whether youre a seasoned foodie or a casual diner, theres something for everyone to enjoy. From our innovative dishes to our impeccable service, were here to create moments that will linger in your memory long after youve left our tables. Your invitation awaits—come and savor the magic of LuxDin today!' }
            ],
            Person: '"Great food is like great art—it nourishes the soul and inspires the spirit. At LuxDin, we invite you to embark on a culinary odyssey where every dish tells a story and every bite is a masterpiece." - Chef Julia Michaels'
        },
        {
            id: 2,
            Tittle: 'In the world of fine dining, theres a culinary philosophy that reigns supreme: seasonal cuisine.',
            Description: 'At LuxDin, we believe that brunch should be a luxurious experience, where every bite is a delight and every moment is savored. Join us as we explore the art of brunch and discover how to elevate your morning meals to new heights of indulgence.',
            Picture: 'https://framerusercontent.com/images/pON4WxrIEC6By1o4ySU6YF4qbo.png',
            Description_2: [
                { Tittle_Text: 'A Symphony of Flavors', Text: 'Seasonal cuisine is all about celebrating the bounty of each season, from the crisp greens of spring to the hearty root vegetables of winter. At LuxDin, our chefs work closely with local farmers and producers to source the freshest seasonal ingredients, ensuring that every dish is bursting with flavor and vitality. From vibrant salads and succulent roasts to delicate desserts, each bite is a celebration of natures bounty.' },
                { Tittle_Text: 'The Beauty of Local', Text: 'One of the hallmarks of seasonal cuisine is its emphasis on local ingredients. By sourcing from nearby farms and producers, we not only support our local economy but also reduce our carbon footprint and celebrate the unique flavors of our region. From farm-fresh eggs and artisanal cheeses to heirloom tomatoes and wild-caught seafood, every ingredient tells a story of our land and our community.' },
                { Tittle_Text: 'Craftsmanship and Creativity', Text: 'At LuxDin, we believe that the true artistry of seasonal cuisine lies in the craftsmanship and creativity of our chefs. From preserving the harvest for the colder months to experimenting with new flavor combinations and techniques, our chefs are constantly pushing the boundaries of whats possible with seasonal ingredients. The result? A dining experience that is as exciting as it is delicious.' },
                { Tittle_Text: 'Sustainability and Stewardship', Text: 'Beyond its culinary delights, seasonal cuisine is also rooted in principles of sustainability and stewardship. By supporting local farmers and producers, reducing food miles, and minimizing food waste, we can create a more sustainable and resilient food system for future generations. At LuxDin, were proud to be part of this movement towards a more sustainable future, one delicious meal at a time.' }
            ],
            Person: '"Cooking is an art, but all art requires knowing something about the techniques and materials." - Nathan Myhrvold'
        },
        {
            id: 3,
            Tittle: 'Brunch is more than just a meal—its a beloved tradition that brings people together to savor delicious food and good company.',
            Description: 'At LuxDin, we believe that brunch should be a luxurious experience, where every bite is a delight and every moment is savored. Join us as we explore the art of brunch and discover how to elevate your morning meals to new heights of indulgence.',
            Picture: 'https://framerusercontent.com/images/1tkWRkmhRbRMFd820ryzntcEE.png',
            Description_2: [
                { Tittle_Text: 'The Brunch Spread: A Feast for the Senses', Text: 'At LuxDin, our brunch spread is a feast for the senses, featuring an array of delectable dishes designed to tantalize your taste buds and satisfy your cravings. From fluffy pancakes and crispy bacon to savory quiches and fresh fruit platters, theres something for everyone to enjoy. And lets not forget about the drinks—mimosas, Bloody Marys, and artisanal coffees are just a few of the libations that await you at our brunch table.' },
                { Tittle_Text: 'The Art of Presentation', Text: 'At LuxDin, we believe that presentation is key to creating a memorable brunch experience. Our culinary team takes great care in plating each dish with precision and attention to detail, ensuring that every plate is as beautiful as it is delicious. From elegant table settings to garnishes that add a pop of color, every element is carefully curated to delight the senses and enhance the dining experience.' },
                { Tittle_Text: 'Quality Ingredients, Exceptional Flavors', Text: 'At the heart of every brunch dish at LuxDin lies quality ingredients and exceptional flavors. We source the freshest seasonal produce, locally sourced meats, and artisanal cheeses to ensure that every bite is bursting with flavor and freshness. Whether youre indulging in our signature eggs Benedict or sampling our house-made pastries, you can taste the difference that quality ingredients make.' },
                { Tittle_Text: 'Brunch: A Celebration of Life', Text: 'Brunch is more than just a meal—its a celebration of life, love, and good food. Whether youre gathering with friends to catch up over eggs and mimosas or treating yourself to a solo brunch date, theres something magical about the ritual of brunch. At LuxDin, we invite you to join us in celebrating this cherished tradition and indulging in the luxury of a perfect brunch experience.' }
            ],
            Person: '"Brunch is breakfast without an alarm clock." - Unknown'
        }
    ]


    const Share = {
        HoverNavbar, setHoverNavbar,
        FAQ,
        FAQV2,
        BlogCards,
        ValuesCards,
        Teams,
        Menu,
        ShareCategories,
        setShareCategories,
        BlogDetails
    }
    return (
        <Shareinfo.Provider value={Share}>
            {children}
        </Shareinfo.Provider>
    )
}