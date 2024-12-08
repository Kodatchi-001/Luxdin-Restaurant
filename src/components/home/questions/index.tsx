'use client'

import { Shareinfo } from "@/context";
import { FAQTypes } from "@/types";
import Link from "next/link";
import { useContext, useState } from "react";

export default function QuestionsHome() {
    const { FAQ } = useContext(Shareinfo);
    const [ChangeSize, setChangeSize] = useState<number | null>(null);
    const Change = (index: number) => setChangeSize((previndex: number | null) => previndex === index ? null : index);

    return <>
        <section className="w-full h-full flex flex-wrap gap-8 px-3 lg:px-8 xl:px-24 mt-14 lg:mt-8">
            <div className="w-full lg:h-[25vh] flex justify-between items-end flex-wrap lg:pb-8 gap-6 lg:gap-0">
                <div className="w-full sm:w-auto flex flex-col justify-center gap-3 lg:gap-5">
                    <h2 className="text-xl text-[#d1a374]">FAQ</h2>
                    <h1 className="text-3xl lg:text-6xl">Answers for Questions</h1>
                </div>
                <Link href="/" className="border border-[#d1a374] hover:bg-[#d1a374] hover:text-white duration-500 w-full text-center sm:w-auto px-10 py-3 lg:py-2 text-lg rounded-full text-[#d1a374]">
                    See About Us
                </Link>
            </div>
            <div className="w-full lg:h-[75vh] xl:h-[65vh] flex flex-col justify-between overflow-hidden cursor-pointer">
                {FAQ.map((items: FAQTypes) => (
                    <div key={items.id} className={`w-full ${ChangeSize === items.id ? 'mb-5 lg:mb-0 lg:h-[40%]' : 'lg:h-[25%]'} lg:duration-500 overflow-hidden border-t border-[#d1a374] cursor-pointer cards-FAQ`}
                        onClick={() => Change(items.id)}>
                        <div className={`w-full ${ChangeSize === items.id ? 'h-1/2' : "h-full py-6 lg:py-0"} lg:duration-500 flex justify-between items-center`}>
                            <h1 className="text-xl lg:text-3xl duration-500">{items.Tittle}</h1>
                            <i className={`bx bx-chevron-right ${ChangeSize === items.id ? 'rotate-90' : 'rotate-0'} lg:duration-500 p-[5px] lg:p-3 text-[1.8rem] lg:text-[2.25rem] border border-black rounded-full`}></i>
                        </div>
                        <div className={`w-full ${ChangeSize === items.id ? 'flex' : 'hidden'}`}>
                            <p className="w-full lg:w-4/6 xl:w-5/6 text-lg lg:text-xl">{items.Description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
}