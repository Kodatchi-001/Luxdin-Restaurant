'use client'

import { Shareinfo } from "@/context";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function NavbarDetails() {
    const { HoverNavbar, setHoverNavbar, Menu } = useContext(Shareinfo);
    const [ChangeColor, setChangeColor] = useState('')
    /*---------------*/
    const HiddenNavbar = (): void => setHoverNavbar?.(false)
    /*---------------*/
    useEffect(() => {
        switch (window.location.pathname) {
            case '/':
                setChangeColor('HomePage')
                break;
            case '/about':
                setChangeColor('about')
                break;
            case '/menu':
                setChangeColor('menu')
                break;
            case '/menu-details':
                setChangeColor('menu-details')
                break;
            case '/services':
                setChangeColor('services')
                break;
            case '/team':
                setChangeColor('team')
                break;
            case '/reservation':
                setChangeColor('reservation')
                break;
            case '/blog':
                setChangeColor('blog')
                break;
            case '/blog-details':
                setChangeColor('blog-details')
                break;
            case '/contact':
                setChangeColor('contact')
                break;
            default:
                setChangeColor('');
        }
    }, [window.location.pathname])

    return <>
        <div className="pl-24 absolute lg:mt-20 hidden lg:flex">
            <div className={`w-[40vw] 2xl:w-auto h-full ${HoverNavbar ? 'card-visible' : 'card-hidden'} duration-500 flex flex-col justify-between ml-28 pl-8 pt-6 pb-7 shadow-xl gap-5 2xl:gap-4 bg-[#fffdf8] border border-[#0000001d] z-50`}
                onMouseLeave={HiddenNavbar} onMouseEnter={() => setHoverNavbar?.(true)}>
                <h1 className="w-full text-[#d1a374]">INNER PAGES</h1>
                <div className="w-full h-5/6 flex">
                    <div className="w-1/3 2xl:w-auto h-full flex items-center 2xl:pr-8">
                        <ul className="h-full flex flex-col justify-between text-lg gap-2 text-gray-600">
                            <Link href="/about" className={`${ChangeColor === 'about' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>About</Link>
                            <Link href="/menu" className={`${ChangeColor === 'menu' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>Menu</Link>
                            <Link href={`/menu/${Menu[0].Tittle?.replace(/ /g, '-')}`} className={`${ChangeColor === 'Menu-Details' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>Menu Details</Link>
                        </ul>
                    </div>
                    <div className="w-1/3 2xl:w-auto h-full flex items-center border-l border-r border-[#c17d00]">
                        <ul className="h-full flex flex-col justify-between px-8 text-lg gap-2 text-gray-600">
                            <Link href="/services" className={`${ChangeColor === 'Services' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>Services</Link>
                            <Link href="/team" className={`${ChangeColor === 'Team' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>Team</Link>
                            <Link href="/reservation" className={`${ChangeColor === 'Reservation' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>Reservation</Link>
                        </ul>
                    </div>
                    <div className="w-1/3 2xl:w-auto h-full flex items-center">
                        <ul className="h-full flex flex-col justify-between px-8 text-lg gap-2 text-gray-600">
                            <Link href="/blog" className={`${ChangeColor === 'Blog' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>Blog</Link>
                            <Link href="/blog-details" className={`${ChangeColor === 'Blog-Details' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>Blog-Details</Link>
                            <Link href="/contact" className={`${ChangeColor === 'Contact' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>Contact</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}