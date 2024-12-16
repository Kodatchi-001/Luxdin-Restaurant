'use client'

import { useContext } from "react";
import { Shareinfo } from "@/context";
import { ValuesCardsTypes } from "@/types";
import Image from "next/image";
import Logo from "@/../public/images/mandala.png";

export default function Values() {
    const { ValuesCards } = useContext(Shareinfo);

    return <>
        <section className="w-full h-full lg:mt-14 flex justify-center px-5 lg:px-10 bg-[#132d2d]">
            <div className="w-full 2xl:max-w-[1600px] h-full flex flex-wrap-reverse lg:flex-nowrap gap-14 lg:gap-0 py-10 lg:p-14 xl:p-24 2xl:px-16">
                <div className="w-full lg:w-[70%] h-full flex flex-col sm:flex-row justify-between flex-wrap gap-5 2xl:gap-8">
                    {ValuesCards.length > 0 ?
                        ValuesCards.map((items: ValuesCardsTypes, index) => (
                            <div key={index} className="w-full sm:w-[48.5%] lg:w-[48%] h-[48.5%] bg-[#fffdf8] flex flex-col justify-between gap-8 lg:gap-14 p-7">
                                <div className="w-[10%]">
                                    <Image src={Logo} alt="Mandala logo" />
                                </div>
                                <div className="flex flex-col justify-between gap-3 lg:gap-4">
                                    <h1 className="text-xl font-bold">{items.Tittle}</h1>
                                    <p className="text-[17px]">{items.Discription}</p>
                                </div>
                            </div>
                        )) : (
                            <h1>!Sorry,we dont have any values</h1>
                        )}
                </div>
                <div className="w-full lg:w-[30%] h-full flex flex-col justify-between gap-3 lg:gap-8 lg:pl-10 xl:pl-14 text-white">
                    <h2 className="text-xl text-[#d1a374]">VALUES</h2>
                    <h1 className="text-3xl lg:text-6xl xl:text-7xl">What We Believe</h1>
                </div>
            </div>
        </section>
    </>
}