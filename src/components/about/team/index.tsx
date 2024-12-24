'use client'

import { Shareinfo } from "@/context";
import { TeamsTypes } from "@/types";
import Link from "next/link";
import { useContext } from "react";

export default function Team() {
    const { Team } = useContext(Shareinfo);

    return <>
        <section className="w-full h-full mt-5 lg:mt-14 flex justify-center flex-wrap px-4 lg:px-14 xl:px-20 pt-14">
            <div className="w-full 2xl:max-w-[1600px] h-full flex justify-between flex-wrap gap-8 sm:gap-2 lg:gap-5">
                <div className="w-full sm:w-[48%] xl:w-[32%] lg:h-[50vh] flex flex-col justify-center gap-8 lg:gap-20 mb-8 lg:mb-0">
                    <div className="w-full lg:w-auto flex flex-col justify-center gap-3 lg:gap-5">
                        <h2 className="text-xl text-[#d1a374]">TEAM</h2>
                        <h1 className="text-3xl lg:text-6xl">Our Culinary Team</h1>
                    </div>
                    <div>
                        <Link href="/team" className="border border-[#d1a374] w-full lg:w-auto px-10 py-3 lg:py-2 text-lg rounded-full text-[#d1a374]">
                            See All Teams
                        </Link>
                    </div>
                </div>
                {Team.length > 0 ?
                    Team.slice(0, 5).map((items: TeamsTypes, index) => (
                        <div key={index} className="w-full sm:w-[48%] xl:w-[32%] h-[50vh] lg:h-[65vh] 2xl:max-h-[800px] card-team sm:mt-5 lg:mt-0">
                            <div className="w-full h-[89%] flex items-end background-image-size" style={{ backgroundImage: `url(${items.Picture})` }}>
                                <div className="w-full h-1/5 lg:h-full info-team flex lg:hidden justify-center items-center gap-10 text-xl font-bold text-white lg:bg-[#132d2d5e]">
                                    <h1 className="cursor-pointer">X</h1>
                                    <h1 className="cursor-pointer">IG</h1>
                                    <h1 className="cursor-pointer">FB</h1>
                                </div>
                            </div>
                            <div className="w-full h-[11%] flex justify-between items-center info-team-2 border-b border-[#0000007e] text-[16px]">
                                <h2 className="font-bold">{items.Name}</h2>
                                <h2 className="text-gray-700">{items.Job}</h2>
                            </div>
                        </div>
                    )) : (
                        <h1>!Sorry,we dont have any team</h1>
                    )
                }
            </div>
        </section>
    </>
}