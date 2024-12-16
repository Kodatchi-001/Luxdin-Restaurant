'use client'

import { Shareinfo } from "@/context"
import { MenuTypes, PropsMenudetailsType } from "@/types"
import { useContext } from "react"
import Logo from "@/../public/images/mandala.png";
import Image from "next/image";

export default function MainCourse({ Props }: PropsMenudetailsType) {
    const { Menu } = useContext(Shareinfo);

    return <>
        <section className="w-full h-full flex justify-center py-8 lg:py-24 mt-16 lg:mt-0 bg-[#132d2d]">
            <div className="w-full 2xl:max-w-[1600px] h-full lg:h-auto">
                {Menu
                    .filter((item: MenuTypes) => item.Tittle === Props.CardTittle)
                    .map((item: MenuTypes) => (
                        <div key={item.id} className="w-full h-full flex justify-between items-center flex-wrap lg:flex-nowrap lg:px-2 xl:px-20 gap-8 lg:gap-0">
                            <div className="w-full lg:w-[35%] h-[20vh] sm:h-[30vh] lg:h-full 2xl:min-h-[600px] flex justify-center items-center px-5 lg:px-10 xl:px-12 2xl:px-16">
                                <div className="w-full h-full rounded-full background-image-size" style={{ backgroundImage: `url(${item.Picture_2})` }}></div>
                            </div>
                            <div className="w-full lg:w-[65%] h-full flex flex-col justify-center gap-5 lg:gap-5 pl-5 lg:px-14 text-[#c6c6c6]">
                                <div className="flex items-center gap-6 text-xl text-[#d1a374]">
                                    <h1>MAIN COURSE</h1>
                                    <div className="w-[0.1vw] h-[2.5vh] lg:h-full bg-[#d1a374]"></div>
                                    <h1>{item.Tittle?.toUpperCase()}</h1>
                                </div>
                                <div className="text-lg lg:text-xl flex flex-col gap-10 lg:gap-10 pb-5 lg:pb-0">
                                    <p className="text-white">{item.Discription_2}</p>
                                    <div className="flex flex-col gap-3 lg:pl-8 text-white">
                                        {item.Discription_3?.map((items, index) => (
                                            <div key={index} className="flex items-center gap-4">
                                                <div className="w-[4%]">
                                                    <Image src={Logo} alt="Mandala logo" />
                                                </div>
                                                <h2>{items}</h2>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-white">{item.Discription_4}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    </>
}