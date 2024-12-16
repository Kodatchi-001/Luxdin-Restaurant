'use client'

import { Shareinfo } from "@/context";
import { BlogCardsTypes, PropsBlogdetailsType } from "@/types";
import { useContext } from "react";

export default function Hero({ Props }: PropsBlogdetailsType) {
    const { BlogCards } = useContext(Shareinfo);

    return <>
        <div className="py-28 sm:py-20 lg:py-28"></div>
        <section>
            {BlogCards
                .filter((item: BlogCardsTypes) => item.Tittle == Props.BlogTitle)
                .map((item: BlogCardsTypes) => (
                    <div key={item.id} className="w-full h-screen 2xl:max-h-[1000px] bg-top bg-cover bg-no-repeat" style={{ backgroundImage: `url(${item.Picture})` }}>
                        <div className="w-full flex justify-center">
                            <div className="w-[90%] sm:w-4/6 lg:w-5/6 xl:w-[75%] py-6 lg:py-6 flex flex-col items-center pt-5 gap-4 bg-[#fbf8f4] mt-[-10vh] lg:mt-[-20vh] 2xl:mt-[-15vh]">
                                <h2 className="text-lg lg:text-xl flex gap-2 text-[#a46c32] tracking-[0.3rem]">{item.Date}</h2>
                                <h1 className="w-[90%] text-center text-xl sm:text-[27px] lg:text-[55px] sm:leading-10 lg:leading-[75px]">{item.Tittle}</h1>
                                <h1 className="font-bold">{item.Person}</h1>
                            </div>
                        </div>
                    </div>
                ))}
        </section>
    </>
}