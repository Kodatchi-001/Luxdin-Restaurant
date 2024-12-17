'use client'

import { Shareinfo } from "@/context";
import { BlogCardsTypes } from "@/types";
import Link from "next/link";
import { useContext } from "react";

export default function Latest() {
    const { BlogCards } = useContext(Shareinfo);

    return <>
        <section className="w-full mt-10 lg:mt-24 flex justify-center">
            <div className="w-full 2xl:max-w-[1600px] h-full flex flex-wrap gap-10 lg:gap-14 px-4 lg:px-5 xl:px-20">
                <div className="w-full h-full flex flex-col gap-2 lg:gap-5">
                    <h2 className="text-xl text-[#d1a374]">LATEST</h2>
                    <h1 className="text-3xl lg:text-5xl xl:text-6xl">Newest Insights</h1>
                </div>
                <div className="w-full h-full flex justify-between flex-wrap gap-5 xl:gap-8">
                    {BlogCards && BlogCards.length > 0 ? (
                        BlogCards
                            .slice(0, 4)
                            .map((item: BlogCardsTypes) => (
                                <div key={item.id} className="w-full sm:w-[48%] lg:w-[48.5%] h-full flex flex-wrap lg:gap-8">
                                    <div className="w-full h-[45vh] lg:h-[65vh] 2xl:max-h-[700px] flex justify-end relative Blog-Card-1 background-image-size" style={{ backgroundImage: `url(${item.Picture})` }}>
                                        <div className="w-full flex justify-end items-start p-6">
                                            <h2 className="px-5 py-[10px] text-lg bg-white text-[#321d1d]">{item.Date}</h2>
                                        </div>
                                        <div className="w-full h-full flex justify-center items-center bg-[#331e1eab] opacity-0 absolute duration-500">
                                            <Link href={`/blog/${item.Tittle.replace(/ /g, '-').replace(/&/g, 'and').replace(/:/g, '=').replace(/--+/g, '-')}`} className="px-8 py-[6.5px] flex items-center gap-1 text-[17px] border border-white text-white rounded-full">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="w-full h-[29%] flex flex-col justify-center gap-5 py-5 lg:py-0">
                                        <h1 className="text-[22px] lg:text-[32px]">{item.Tittle}</h1>
                                        <div className="flex">
                                            <div className="px-4 h-[0.3vh] bg-black"></div>
                                        </div>
                                        <h1 className="font-bold">{item.Person}</h1>
                                    </div>
                                </div>
                            ))
                    ) : (
                        <h1>!Sorry,we dont have any blog</h1>
                    )}
                </div>
            </div>
        </section>
    </>
}