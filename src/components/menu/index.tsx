'use client'

import { Shareinfo } from "@/context";
import { MenuTypes } from "@/types";
import Link from "next/link";
import { useContext, useState } from "react";

export default function MenuComponents() {
    const [Filter, setFilter] = useState<string>("All");
    const { ShareCategories, setShareCategories, Menu } = useContext(Shareinfo);

    const FilterCards = (categorie: string): void => {
        setFilter(categorie);
        setShareCategories('')
    }
    return <>
        <section className="w-full h-full flex justify-center pt-24">
            <div className="w-full 2xl:max-w-[1600px] h-full flex flex-wrap gap-20">
                <div className="w-full flex flex-col justify-center lg:pt-14 gap-20 items-center text-4xl lg:text-7xl">
                    <div>
                        <h1 className="text-center">Discover</h1>
                        <h1 className="text-center">Our Dining Menu</h1>
                    </div>
                    <ul className="w-full lg:w-[80%] xl:w-[60%] h-1/5 flex justify-center lg:justify-between items-center font-semibold text-[17px] flex-wrap gap-3 lg:gap-0">
                        <li className={`w-[30%] lg:w-auto text-center cursor-pointer duration-200 ${Filter === "All" && ShareCategories === '' ? 'text-[#d1a374] underline' : ''} `}
                            onClick={() => FilterCards('All')}>
                            ALL CATEGORY
                        </li>
                        <li className={`w-[30%] lg:w-auto text-center cursor-pointer duration-200 ${Filter === "Main Dishes" || ShareCategories === "Main Dishes" ? 'text-[#d1a374] underline' : ''} `}
                            onClick={() => FilterCards('Main Dishes')}>
                            MAIN DISHES
                        </li>
                        <li className={`w-[30%] lg:w-auto text-center cursor-pointer duration-200 ${Filter === "Disserts" || ShareCategories === "Disserts" ? 'text-[#d1a374] underline' : ''} `}
                            onClick={() => FilterCards('Disserts')}>
                            DISSERTS
                        </li>
                        <li className={`w-[30%] lg:w-auto text-center cursor-pointer duration-200 ${Filter === "Appetizers" || ShareCategories === "Appetizers" ? 'text-[#d1a374] underline' : ''} `}
                            onClick={() => FilterCards('Appetizers')}>
                            APPETIZERS
                        </li>
                        <li className={`w-[30%] lg:w-auto text-center cursor-pointer duration-200 ${Filter === "Soup" || ShareCategories === "Soup" ? 'text-[#d1a374] underline' : ''} `}
                            onClick={() => FilterCards('Soup')}>
                            SOUP
                        </li>
                        <li className={`w-[30%] lg:w-auto text-center cursor-pointer duration-200 ${Filter === "Salad" || ShareCategories === "Salad" ? 'text-[#d1a374] underline' : ''} `}
                            onClick={() => FilterCards('Salad')}>
                            SALAD
                        </li>
                    </ul>
                </div>
                <div className="w-full h-auto flex justify-center items-center flex-wrap gap-3 xl:gap-8 px-3 xl:px-10">
                    {Menu && Menu.length > 0 ?
                        Menu.filter((item: MenuTypes) => ShareCategories === '' ? Filter === "All" || item.Categorie === Filter : item.Categorie === ShareCategories).map(items => (
                            <Link href={`/menu/${items.Tittle?.replace(/ /g, '-').replace(/&/g, 'And')}`} key={items.id} className="w-full sm:w-[48%] lg:w-[30%] lg:h-[78vh] 2xl:max-h-[600px] cursor-pointer card-menu">
                                <div className="w-full h-[35vh] lg:h-[55%] relative overflow-hidden">
                                    <div className="w-full h-full background-image-size absolute duration-300" style={{ backgroundImage: `url(${items.Picture})` }}></div>
                                </div>
                                <div className="w-full h-[45%] flex flex-col justify-between items-center gap-8 lg:gap-0 py-5 duration-300 border-x border-b border-[#00000032] card-menu-info">
                                    <div className="flex flex-col justify-center items-center gap-3">
                                        <h2 className="text-[22px] font-bold text-[#3931316a] duration-300">${items.Price}</h2>
                                        <h1 className="text-xl font-semibold duration-300">{items.Tittle}</h1>
                                        <p className="w-[90%] text-center text-[15px] lg:text-[17px] duration-300">{items.Discription}</p>
                                    </div>
                                    <div className="w-1/5 h-[0.1vh] bg-black duration-300"></div>
                                </div>
                            </Link>
                        )) : (
                            <h1>!Sorry ,we dont have any product</h1>
                        )
                    }
                </div>
            </div>
        </section>
    </>
}