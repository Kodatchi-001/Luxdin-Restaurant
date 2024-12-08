'use client'

import { useContext } from "react";
import { Shareinfo } from "@/context";
import { ValuesCardsTypes } from "@/types";

export default function Values() {
    const { ValuesCards } = useContext(Shareinfo);

    return <>
        <section className="w-full lg:h-[95vh] lg:mt-14 flex flex-wrap-reverse lg:flex-nowrap gap-14 lg:gap-0 px-5 py-10 lg:p-14 xl:p-24 bg-[#132d2d]">
            <div className="w-full lg:w-[70%] h-full flex flex-col sm:flex-row lg:flex-col justify-between flex-wrap gap-5 lg:gap-0">
                {ValuesCards.map((items: ValuesCardsTypes, index) => (
                    <div key={index} className="w-full sm:w-[48.5%] lg:w-[48%] h-[48.5%] bg-[#fffdf8] flex flex-col justify-between gap-8 lg:gap-0 p-7">
                        <div className="w-[10%]">
                            <img src="../../../../public/images/mandala.png" alt="Mandala logo" />
                        </div>
                        <div className="flex flex-col justify-between gap-3 lg:gap-4">
                            <h1 className="text-xl font-bold">{items.Tittle}</h1>
                            <p className="text-[17px]">{items.Discription}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full lg:w-[30%] h-full flex flex-col justify-between gap-3 lg:gap-0 lg:pl-10 xl:pl-14 text-white">
                <h2 className="text-xl text-[#d1a374]">VALUES</h2>
                <h1 className="text-3xl lg:text-6xl xl:text-7xl">What We Believe</h1>
            </div>
        </section>
    </>
}