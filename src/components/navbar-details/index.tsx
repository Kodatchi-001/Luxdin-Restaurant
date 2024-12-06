'use client'

import { Shareinfo } from "@/share";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function NavbarDetails() {
    const { HoverNavbar, setHoverNavbar } = useContext(Shareinfo);
    const [ChangeColor, setChangeColor] = useState('')
    /*---------------*/
    const HiddenNavbar = ():void => setHoverNavbar?.(false)
    /*---------------*/
    useEffect(() => {
        switch (window.location.pathname) {
            case '/':
                setChangeColor('HomePage')
                break;
            case '/About':
                setChangeColor('About')
                break;
            case '/Menu':
                setChangeColor('Menu')
                break;
            case '/Menu-Details':
                setChangeColor('Menu-Details')
                break;
            case '/Services':
                setChangeColor('Services')
                break;
            case '/Team':
                setChangeColor('Team')
                break;
            case '/Reservation':
                setChangeColor('Reservation')
                break;
            case '/Blog':
                setChangeColor('Blog')
                break;
            case '/Blog-Details':
                setChangeColor('Blog-Details')
                break;
            case '/Contact':
                setChangeColor('Contact')
                break;
            default:
                setChangeColor('');
        }
    }, [ChangeColor])
    return <>
        <div className="pl-24 absolute hidden lg:flex">
            <div className={`w-[40vw] 2xl:w-auto h-full ${HoverNavbar ? 'card-visible' : 'card-hidden'} duration-500 flex flex-col justify-between ml-28 pl-8 pt-6 pb-7 shadow-xl gap-5 2xl:gap-4 bg-[#fffdf8] border border-[#0000001d] z-50`}
                onMouseLeave={HiddenNavbar} onMouseEnter={() => setHoverNavbar?.(true)}>
                <h1 className="w-full text-[#d1a374]">INNER PAGES</h1>
                <div className="w-full h-5/6 flex">
                    <div className="w-1/3 2xl:w-auto h-full flex items-center 2xl:pr-8">
                        <ul className="h-full flex flex-col justify-between text-lg gap-2 text-gray-600">
                            <Link href="/About" className={`${ChangeColor === 'About' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>About</Link>
                            <Link href="/Menu" className={`${ChangeColor === 'Menu' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>Menu</Link>
                            <Link href="/Menu-Details" className={`${ChangeColor === 'Menu-Details' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>Menu Details</Link>
                        </ul>
                    </div>
                    <div className="w-1/3 2xl:w-auto h-full flex items-center border-l border-r border-[#c17d00]">
                        <ul className="h-full flex flex-col justify-between px-8 text-lg gap-2 text-gray-600">
                            <Link href="/Services" className={`${ChangeColor === 'Services' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>Services</Link>
                            <Link href="/Team" className={`${ChangeColor === 'Team' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>Team</Link>
                            <Link href="/Reservation" className={`${ChangeColor === 'Reservation' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>Reservation</Link>
                        </ul>
                    </div>
                    <div className="w-1/3 2xl:w-auto h-full flex items-center">
                        <ul className="h-full flex flex-col justify-between px-8 text-lg gap-2 text-gray-600">
                            <Link href="/Blog" className={`${ChangeColor === 'Blog' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>Blog</Link>
                            <Link href="/Blog-Details" className={`${ChangeColor === 'Blog-Details' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>Blog-Details</Link>
                            <Link href="/Contact" className={`${ChangeColor === 'Contact' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`} onClick={HiddenNavbar}>Contact</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}