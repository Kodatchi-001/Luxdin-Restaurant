'use client'


import { Shareinfo } from "@/context";
import { MenuTypes, PropsMenudetailsType } from "@/types"
import Link from "next/link";
import { useContext } from "react";

export default function Hero({ Props }: PropsMenudetailsType) {
    const { Menu } = useContext(Shareinfo)

    return <>
        <section className="w-full h-full flex justify-center pt-[80px] lg:py-20">
            <div className="w-full 2xl:max-w-[1600px] h-full flex justify-center">
                {Menu && Menu.length > 0 ? (
                    Menu
                        .filter((item: MenuTypes) => item.Tittle === Props.CardTittle)
                        .map((item: MenuTypes) => (
                            <div key={item.id} className="w-full lg:h-[87vh] 2xl:max-h-[800px] h-full flex flex-wrap-reverse lg:flex-nowrap px-2 xl:px-20">
                                <div className="w-full lg:w-1/2 h-[55%] lg:h-full lg:pb-4 flex flex-wrap gap-28 lg:gap-0">
                                    <div className="w-full h-5/6 flex flex-col pt-10 lg:pt-24 gap-5 lg:gap-8 px-2 lg:px-0">
                                        <div className="flex gap-1 text-2xl text-[#d3a574]">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                        </div>
                                        <h1 className="w-full text-5xl lg:text-7xl">{item.Tittle}</h1>
                                        <p className="w-full lg:w-5/6 text-xl text-[#6e5959]">{item.Discription}</p>
                                    </div>
                                    <div className="w-full xl:w-5/6 h-1/6 flex justify-between items-center py-2 lg:py-0 border-t border-b border-[#3f2d0b76]">
                                        <h1 className="text-3xl lg:text-5xl text-[#a47849] font-extrabold">${item.Price}.00</h1>
                                        <Link href="/reservation" className="px-8 py-4 sm:py-2 lg:py-3 rounded-full text-lg lg:text-2xl bg-[#3f2d0b] hover:bg-[#8a6624] duration-500 text-white cursor-pointer">
                                            <h1>
                                                Make Reservation
                                            </h1>
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 h-[40vh] lg:h-full p-1 lg:pl-14 lg:pr-2 lg:py-8">
                                    <div className="w-full h-full background-image-size" style={{ backgroundImage: `url(${item.Picture})` }}></div>
                                </div>
                            </div>
                        ))
                ) : (
                    <h1>No menu items found</h1>
                )
                }
            </div>
        </section>
    </>
}