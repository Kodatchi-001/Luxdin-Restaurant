'use client'

import { Shareinfo } from "@/context";
import { MenuTypes } from "@/types";
import Link from "next/link";
import { useContext } from "react";

export default function SignaturesHome() {
    const { Menu } = useContext(Shareinfo);

    return <>
        <section className="w-full flex justify-center mt-12 lg:mt-24 xl:mt-16 px-4 xl:px-20">
            <div className="w-full 2xl:max-w-[1600px] flex flex-wrap gap-6">
                <div className="w-full flex justify-between items-end flex-wrap lg:pb-8 gap-6 lg:gap-0">
                    <div className="w-full sm:w-auto flex flex-col justify-center gap-3 lg:gap-5">
                        <h2 className="text-xl text-[#d1a374]">SIGNATURES</h2>
                        <h1 className="text-3xl lg:text-6xl">Popular Delights</h1>
                    </div>
                    <Link href="/" className="border border-[#d1a374] w-full text-center sm:w-auto px-10 py-3 lg:py-2 text-lg rounded-full text-[#d1a374] hover:bg-[#d1a374] hover:text-white duration-500">
                        See All Menu
                    </Link>
                </div>
                <div className="w-full flex justify-between flex-wrap">
                    <div className="w-full lg:w-[50%] lg:h-full flex flex-col justify-between gap-3 lg:gap-0 lg:pr-16 lg:pb-5">
                        {Menu && Menu.length > 0 ? (
                            Menu.slice(0, 4)
                                .map((item: MenuTypes) => (
                                    <Link key={item.id} href={`/menu/${item.Tittle?.replace(/ /g, '-').replace(/&/g, 'And')}`} className="w-full lg:h-[23%] py-8 flex flex-col gap-3 cards-Homepage cursor-pointer">
                                        <div className="w-full flex justify-between">
                                            <h1 className="w-5/6 text-2xl font-bold duration-300">{item.Tittle}</h1>
                                            <h2 className="text-lg font-bold duration-300">${item.Price}</h2>
                                        </div>
                                        <p className="w-full lg:w-5/6 xl:w-[90%] text-[17px]">{item.Discription}</p>
                                    </Link>
                                ))
                        ) : (
                            <h1>!Soory,we dont have any products</h1>
                        )}
                    </div>
                    <div className="w-full lg:w-[45%] h-[40vh] lg:h-full py-5">
                        <div className="w-full h-full background-image-size" id="signatures"></div>
                    </div>
                </div>
            </div>
        </section>
    </>
}