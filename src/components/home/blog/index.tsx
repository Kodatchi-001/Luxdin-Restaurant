'use client'

import { Shareinfo } from "@/context";
import { BlogCardsTypes } from "@/types";
import Link from "next/link";
import { useContext } from "react";

export default function BlogHome() {
    const { BlogCards } = useContext(Shareinfo);
    return <>
        <section className="w-full lg:h-screen 2xl:h-[80vh] mt-5 lg:mt-24 mb-10 lg:mb-20 pt-5">
            {BlogCards && BlogCards.length > 0 ?
                BlogCards
                    .slice(0, 1)
                    .map((item: BlogCardsTypes) => (
                        <Link key={item.id} href="/" className="w-full h-full flex flex-wrap gap-5 lg:gap-2 Card-blog cursor-pointer">
                            <div className="w-full h-[60vh] lg:h-5/6 flex justify-center pt-12 bg-bottom bg-cover bg-no-repeat" style={{ backgroundImage: `url(${item.Picture})` }}>
                                <div>
                                    <h2 className="px-8 py-2 text-lg bg-[#fffdf8] duration-500">BLOG ARTICLES</h2>
                                </div>
                            </div>
                            <div className="w-full h-1/6 flex flex-col justify-center items-center gap-5">
                                <h1 className="lg:w-4/6 xl:w-full text-xl xl:text-3xl duration-500 text-center">{item.Tittle}</h1>
                                <div className="flex gap-6 lg:text-lg">
                                    <h3 className="font-bold">{item.Person}</h3>
                                    <h3 className="px-6 border-l border-[#d1a374]">{item.Date}</h3>
                                </div>
                            </div>
                        </Link>
                    )) : (
                    <h1>!Soory, we dont have any blog</h1>
                )}
        </section>
    </>
}