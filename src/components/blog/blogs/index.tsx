'use client'

import { Shareinfo } from "@/context";
import { BlogCardsTypes } from "@/types";
import Link from "next/link";
import { useContext } from "react";

export default function Blogs() {
    const { BlogCards } = useContext(Shareinfo);

    return <>
        <section className="w-full lg:h-screen px-4 lg:px-5 xl:px-20 lg:py-10 flex flex-wrap lg:flex-nowrap gap-6 mt-5 lg:mt-20">
            {BlogCards && BlogCards.length > 0 ? (
                BlogCards
                    .slice(0, 1)
                    .map((item: BlogCardsTypes) => (
                        <div key={item.id} className="w-full lg:w-[55%] h-full">
                            <div className="w-full h-[50vh] lg:h-[71%] flex justify-end relative Blog-Card-1 background-image-size" style={{ backgroundImage: `url(${item.Picture})` }}>
                                <div className="w-full flex justify-end items-start p-6">
                                    <h2 className="px-5 py-[10px] text-lg bg-white text-[#321d1d]">{item.Date}</h2>
                                </div>
                                <div className="w-full h-full flex justify-center items-center bg-[#331e1eab] opacity-0 absolute duration-500">
                                    <Link href={`/blog/${item.Tittle.replace(/ /g, '-').replace(/&/g, 'and').replace(/:/g, 'yes').replace(/--+/g, '-')}`} className="px-8 py-[6.5px] flex items-center gap-1 text-[17px] border border-white text-white rounded-full">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full h-[29%] flex flex-col justify-center gap-5 py-5 lg:py-0">
                                <h1 className="text-2xl lg:text-[32px]">{item.Tittle}</h1>
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
            <div className="w-full lg:w-[45%] flex flex-col sm:flex-row lg:flex-col justify-between flex-wrap gap-5 lg:gap-0 h-full">
                {BlogCards && BlogCards.length > 0 ? (
                    BlogCards
                        .slice(1, 4)
                        .map((item: BlogCardsTypes) => (
                            <Link href={`/blog/${item.Tittle.replace(/ /g, '-').replace(/&/g, 'and').replace(/:/g, 'yes').replace(/--+/g, '-')}`} key={item.id} className="w-full sm:w-[48%] lg:w-full h-[31%] flex flex-wrap Blog-Card-2 cursor-pointer">
                                <div className="w-full lg:w-[35%] h-[30vh] lg:h-full background-image-size" style={{ backgroundImage: `url(${item.Picture})` }}></div>
                                <div className="w-full lg:w-[65%] h-full flex flex-col gap-5 lg:pl-6 py-5 lg:pt-2">
                                    <h1 className="text-[21px] font-bold Tittle-Blog-Cards duration-500">{item.Tittle}</h1>
                                    <div className="flex">
                                        <div className="w-[10%] h-[0.3vh] Line-Blog-Cards duration-500 bg-black"></div>
                                    </div>
                                    <div className="flex flex-col">
                                        <h1 className="font-bold">{item.Person}</h1>
                                        <h2 className="text-[18px] text-[#999]">{item.Date}</h2>
                                    </div>
                                </div>
                            </Link>
                        ))
                ) : (
                    <h1>!Sorry,we dont have any blog</h1>
                )}
            </div>
        </section>
    </>
}