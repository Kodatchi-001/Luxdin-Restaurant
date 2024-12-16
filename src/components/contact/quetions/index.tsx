'use client'

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useContext, useState } from "react";
import Link from "next/link";
import { Shareinfo } from "@/context";
import { FAQTypes } from "@/types";

export default function Questions() {
    const [ChangeSize, setChangeSize] = useState<number | null>(null);
    const { FAQV2 } = useContext(Shareinfo);

    const ChangeSizeCard = (index: number) => setChangeSize((previndex: number | null) => previndex === index ? null : index);

    return <>
        <section className="w-full h-full flex justify-center">
            <div className="w-full 2xl:max-w-[1600px] h-full flex justify-between flex-wrap-reverse lg:flex-wrap gap-8 lg:gap-0 px-5 lg:px-20">
                <div className="w-full lg:w-[55%] h-full flex flex-col gap-3">
                    {FAQV2 && FAQV2.length > 0 ? (
                        FAQV2.map((item: FAQTypes) => (
                            <div key={item.id} className="w-full flex flex-col gap-3 py-6 px-5 cursor-pointer border border-[#321d1d33] overflow-hidden"
                                onClick={() => ChangeSizeCard(item.id)}>
                                <div className="w-full flex justify-between items-center">
                                    <h1 className="text-lg lg:text-[26px]">{item.Tittle}</h1>
                                    <HiOutlineArrowNarrowRight className={` text-[#d1a374] text-3xl duration-500 ${ChangeSize === item.id ? 'rotate-180' : 'rotate-0'}`} />
                                </div>
                                <p className={`w-full text-sm lg:text-xl ${ChangeSize === item.id ? 'flex' : 'hidden'}`}>{item.Description}</p>
                            </div>
                        ))
                    ) : (
                        <h1>!Sorry,we dont have any Questions</h1>
                    )}
                </div>
                <div className="w-full lg:w-[45%] h-full flex flex-col justify-between items-center lg:items-end gap-7 lg:gap-36">
                    <div className="w-full flex flex-col items-center lg:items-end gap-6 lg:gap-8">
                        <h2 className="text-[18px] text-[#d1a374] tracking-[0.3rem]">FAQ</h2>
                        <div className="flex flex-col items-end gap-2 lg:gap-8 text-3xl lg:text-[55px]">
                            <h1>Answers for</h1>
                            <h1>Questions.</h1>
                        </div>
                    </div>
                    <Link href="/about" className="border border-[#d1a374] text-center sm:w-auto px-10 py-2 lg:py-1 text-lg rounded-full text-[#d1a374] hover:bg-[#d1a374] hover:text-white duration-500">
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    </>
}