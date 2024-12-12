'use client'

import { useContext, useEffect, useState } from "react"
import { MenuTypes, PropsType } from "@/types";
import { Shareinfo } from "@/context";
import Link from "next/link";

export default function Others({ Props }: PropsType) {
    const { Menu } = useContext(Shareinfo);
    const [ProductsCategory, setProductsCategory] = useState<string>('')

    const GetCategory = () => {
        const product = Menu.filter((item: MenuTypes) => item.Tittle === Props.CardTittle);
        setProductsCategory(product[0]?.Categorie || 'Not Found')
    }

    useEffect(() => {
        GetCategory()
    }, [Menu, Props.CardTittle])

    return <>
        <section className={`w-full lg:h-[90vh] flex flex-wrap px-2 lg:px-5 xl:px-20 mt-10 lg:mt-0 lg:py-14 ${Menu.filter((item: MenuTypes) => item.Categorie === ProductsCategory).length > 1 ? 'flex' : 'hidden'}`}>
            <div className="w-full h-[30%] flex justify-between items-end flex-wrap pb-14 gap-5 lg:gap-0">
                <div className="w-full lg:w-auto flex flex-col justify-center gap-3 lg:gap-5">
                    <h2 className="text-xl text-[#d1a374]">OTHERS</h2>
                    <h1 className="text-4xl lg:text-6xl">Related Menu</h1>
                </div>
                <Link href="/menu" className="border border-[#d1a374] w-full lg:w-auto px-10 py-2 text-lg rounded-full text-[#d1a374] hover:bg-[#d1a374] hover:text-white duration-500">
                    See All Menu
                </Link>
            </div>
            <div className="w-full h-[70%] flex items-center flex-wrap gap-2 lg:gap-5 py-2">
                {Menu && Menu.length > 0 ?
                    Menu.filter((item: MenuTypes) => item.Categorie === ProductsCategory && item.Tittle !== Props.CardTittle)
                        .map((item: MenuTypes) => (
                            <Link href={`/menu/${item.Tittle?.replace(/ /g, '-').replace(/&/g, 'And')}`} key={item.id} className="w-full sm:w-[45%] lg:w-[23%] h-[50vh] lg:h-full flex flex-wrap cursor-pointer hover:-mt-8 duration-500">
                                <div className="w-full h-5/6 background-image-size" style={{ backgroundImage: `url(${item.Picture})` }}></div>
                                <div className="w-full h-1/6 flex justify-between items-center text-xl lg:text-lg">
                                    <h1>{item.Tittle}</h1>
                                    <h2 className="text-[#bbbbbb] font-bold">${item.Price}</h2>
                                </div>
                            </Link>
                        )) : (
                        <h1>!Sorry,We dont have any product</h1>
                    )
                }
            </div>
        </section>
    </>
}