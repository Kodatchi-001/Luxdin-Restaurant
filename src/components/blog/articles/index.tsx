'use client'

import { Shareinfo } from "@/context";
import { BlogCardsTypes } from "@/types";
import Link from "next/link";
import { useContext } from "react";

export default function Articles() {
    const { BlogCards } = useContext(Shareinfo);

    return <>
        <section className="w-full lg:h-screen 2xl:max-h-[800px] mt-5 lg:mt-20">
            {BlogCards && BlogCards.length > 0 ? (
                BlogCards
                    .slice(4, 5)
                    .map((item: BlogCardsTypes) => (
                        <Link href={`/blog/${item.Tittle.replace(/ /g, '-').replace(/&/g, 'and').replace(/and/g, '&').replace(/:/g, '=').replace(/--+/g, '-')}`} key={item.id} className="w-full h-full flex flex-wrap gap-5 lg:gap-2 Card-blog cursor-pointer">
                            <div className="w-full h-[60vh] lg:h-5/6 flex justify-center pt-12 background-image-size" style={{ backgroundImage: `url(${item.Picture})` }}>
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
                    ))
            ) : (
                <h1>!Sorry,we dont have any blog</h1>
            )}
        </section>
    </>
}