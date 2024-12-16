'use client'

import { Shareinfo } from "@/context"
import { BlogCardsTypes, BlogDetailsTypes, PropsBlogdetailsType } from "@/types"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import Logo from "@/../public/images/mandala.png";
import Image from "next/image"

export default function Articles({ Props }: PropsBlogdetailsType) {
    const { BlogCards, BlogDetails } = useContext(Shareinfo);
    const [BlogCardId, setBlogCardId] = useState<number>(0)

    useEffect(() => {
        const Blogcard = BlogCards.filter((item: BlogCardsTypes) => item.Tittle === Props.BlogTitle);
        setBlogCardId(Blogcard[0]?.id || 0);
    }, [BlogCards, Props.BlogTitle])

    return <>
        <section className="w-full h-full flex justify-center mt-10 lg:mt-20 mb-14 lg:mb-32">
            <div className="w-full 2xl:max-w-[1600px] h-full flex justify-between flex-wrap gap-14 lg:gap-0 px-5 xl:px-20 ">
                {BlogDetails && BlogDetails.length > 0 ? (
                    BlogDetails
                        .filter((item: BlogDetailsTypes) => item.id === BlogCardId)
                        .map((item: BlogDetailsTypes) => (
                            <div key={item.id} className="w-full lg:w-[62%] h-full flex flex-col gap-8">
                                <div className="flex flex-col gap-5">
                                    <h1 className="text-2xl lg:text-[35px] lg:leading-[42px]">{item.Tittle}</h1>
                                    <p className="text-xl">{item.Description}</p>
                                </div>
                                <div
                                    className="w-full h-[40vh] lg:h-[70vh] 2xl:max-h-[700px] mt-8 background-image-size"
                                    style={{ backgroundImage: `url(${item.Picture})` }}>
                                </div>
                                <div className="mt-5 flex flex-col gap-8">
                                    {item.Description_2 && item.Description_2.length > 0 ? (
                                        item.Description_2.map((items, index) => (
                                            <div key={index} className="flex flex-col gap-3">
                                                <h1 className="text-xl font-bold text-[#6e5959]">{items.Text}</h1>
                                                <p className="text-xl">{items.Text}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <h1>!Soory , we dont have any Description</h1>
                                    )}
                                </div>
                                <div className="w-full py-5 border-l border-l-[#a46c32] pl-8 lg:pl-16">
                                    <p className="text-[#a46c32] text-xl lg:text-3xl">{item.Person}</p>
                                </div>
                                <div className="w-full py-5 border-t border-t-[#a46d326b] flex justify-between items-center mt-8">
                                    <h2 className="text-[#a46c32] text-2xl">Share to:</h2>
                                    <button className="flex items-center gap-1 bg-[#a46c32] text-white rounded-md text-lg px-3 py-2">
                                        Share on
                                        <i className='bx bxl-instagram text-3xl'></i>
                                    </button>
                                </div>
                            </div>
                        ))
                ) : (
                    <h1>!Soory , we dont have any BlogDetails</h1>
                )}
                <div className="w-full lg:w-[35%] xl:w-[30%] h-full flex flex-col gap-5">
                    <h1 className="text-2xl lg:text-[35px] text-[#a46c32]">Popular Articles</h1>
                    {BlogCards && BlogCards.length > 0 ? (
                        BlogCards
                            .slice(0, 4)
                            .filter((item: BlogCardsTypes) => item.Tittle !== Props.BlogTitle)
                            .map((item: BlogCardsTypes) => (
                                <Link href={`/blog/${item.Tittle.replace(/ /g, '-').replace(/&/g, 'and').replace(/:/g, 'yes').replace(/--+/g, '-')}`} key={item.id} className="flex flex-col gap-10">
                                    <div className="flex flex-col gap-4 pb-8 border-b border-b-gray-400 cursor-pointer Cards-Blog-Details duration-500">
                                        <h1 className="text-[20px] Cards-Blog-Details-Tittle duration-500">{item.Tittle}</h1>
                                        <div className="flex gap-6">
                                            <h1 className="font-bold text-[16px]">{item.Person}</h1>
                                            <div className="px-[0.7px] bg-[#a46d3282]"></div>
                                            <h2 className="text-[#321d1d88] text-[17px]">{item.Date}</h2>
                                        </div>
                                    </div>
                                </Link>
                            ))
                    ) : (
                        <h1>!Sorry,we dont have any blog</h1>
                    )}
                    <div className="w-full px-8 xl:px-12 py-8 lg:pt-10 lg:pb-12 flex flex-col gap-5 text-white bg-[#173534] mt-8">
                        <h1 className="text-[30px] text-[#d3a574]">Categories</h1>
                        <ul className="flex flex-col gap-3 text-xl">
                            <div className="flex items-center gap-2 ml-6">
                                <div className="w-[10%]">
                                    <Image src={Logo} alt="Mandala logo" />
                                </div>
                                <li className="font-[600]">Wine & Cuisine Pairing</li>
                            </div>
                            <div className="flex items-center gap-2 ml-6">
                                <div className="w-[10%]">
                                    <Image src={Logo} alt="Mandala logo" />
                                </div>
                                <li className="font-[600]">Culinary Insight</li>
                            </div>
                            <div className="flex items-center gap-2 ml-6">
                                <div className="w-[10%]">
                                    <Image src={Logo} alt="Mandala logo" />
                                </div>
                                <li className="font-[600]">Sustainable Dining</li>
                            </div>
                            <div className="flex items-center gap-2 ml-6">
                                <div className="w-[10%]">
                                    <Image src={Logo} alt="Mandala logo" />
                                </div>
                                <li className="font-[600]">Dessert Techniques</li>
                            </div>
                            <div className="flex items-center gap-2 ml-6">
                                <div className="w-[10%]">
                                    <Image src={Logo} alt="Mandala logo" />
                                </div>
                                <li className="font-[600]">Brunch Dining</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
}