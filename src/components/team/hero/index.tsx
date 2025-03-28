'use client'

import { Shareinfo } from "@/context";
import { TeamsTypes } from "@/types";
import { useContext } from "react";

export default function Hero() {
    const { Team } = useContext(Shareinfo);

    return <>
        <section className="w-full h-auto flex justify-center pt-24">
            <div className="w-full 2xl:max-w-[1600px] h-full flex flex-wrap gap-20">
                <div className="w-full flex flex-col justify-center gap-12 lg:pt-14 items-center">
                    <div>
                        <h1 className="text-center text-4xl lg:text-7xl">Introducing</h1>
                        <h1 className="text-center text-4xl lg:text-7xl">Our Expert Chef</h1>
                    </div>
                    <p className="w-full sm:w-4/6 lg:w-full text-center text-[#6e5959] text-xl">
                        Meet the visionary chefs and team behind LuxDins
                        culinary excellence and expertise.
                    </p>
                </div>
                <div className="w-full h-auto flex justify-center items-center flex-wrap gap-3 xl:gap-6 px-3 xl:px-20">
                    {Team && Team.length > 0 ? (
                        Team.map((Team: TeamsTypes) => (
                            <div key={Team.id} className="w-full sm:w-[48%] xl:w-[32%] h-[50vh] lg:h-[65vh] 2xl:max-h-[700px] card-team sm:mt-5 lg:mt-0">
                                <div className="w-full h-[89%] flex items-end background-image-size" style={{ backgroundImage: `url(${Team.Picture})` }}>
                                    <div className="w-full h-1/5 lg:h-full info-team flex lg:hidden justify-center items-center gap-10 text-xl font-bold text-white lg:bg-[#132d2d5e]">
                                        <h1 className="cursor-pointer">X</h1>
                                        <h1 className="cursor-pointer">IG</h1>
                                        <h1 className="cursor-pointer">FB</h1>
                                    </div>
                                </div>
                                <div className="w-full h-[11%] flex justify-between items-center info-team-2 border-b border-[#0000007e] text-[16px]">
                                    <h2 className="font-bold">{Team.Name}</h2>
                                    <h2 className="text-gray-700">{Team.Job}</h2>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1>!Sorry , we dont have any team </h1>
                    )}
                </div>
            </div>
        </section>
    </>
}