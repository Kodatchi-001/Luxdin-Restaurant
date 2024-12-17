'use client'

import { Shareinfo } from "@/context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Header() {
    const [NavbarSize, setNavbarSize] = useState<boolean>(false);
    const [ChangeColor, setChangeColor] = useState<string>('');
    const { HoverNavbar, setHoverNavbar } = useContext(Shareinfo);
    const [Color, setColor] = useState<string>('');
    const Pathname = usePathname();
    /*------------------------*/
    const ChangeSize = (): void => setNavbarSize((prevstate: boolean) => !prevstate);
    /*------------------------*/
    useEffect(() => {
        if (NavbarSize) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'
        }
    }, [NavbarSize])
    /*-------------*/
    useEffect(() => {
        switch (Pathname) {
            case '/':
                setChangeColor('HomePage')
                setColor('black');
                break;
            case '/about':
                setChangeColor('about')
                setColor('white');
                break;
            case '/menu':
                setChangeColor('menu');
                setColor('black');
                break;
            case '/menu/':
                setChangeColor('menu-details');
                setColor('black');
                break;
            case '/services':
                setChangeColor('services')
                setColor('white');
                break;
            case '/team':
                setChangeColor('team');
                setColor('black');
                break;
            case '/reservation':
                setChangeColor('reservation');
                setColor('black');
                break;
            case '/blog':
                setChangeColor('blog');
                setColor('white');
                break;
            case '/blog-details':
                setChangeColor('blog-details');
                setColor('white');
                break;
            case '/contact':
                setChangeColor('contact');
                setColor('black');
                break;
            default:
                setChangeColor('');
        }
    }, [Pathname])

    return <>
        <header className={`w-full flex justify-center absolute text-${Color} ${NavbarSize ? 'bg-[#fffdf8] xl:bg-transparent duration-300 shadow-xl' : ''}`}
            onMouseLeave={() => setHoverNavbar?.(false)}>
            <div className="w-full 2xl:max-w-[1600px] h-full flex justify-between items-center flex-wrap px-6 xl:px-20 2xl:px-[90px]">
                <div className="w-full xl:w-4/6 2xl:w-auto lg:h-[10vh] xl:h-full flex items-center py-6 sm:py-7">
                    <div className="w-1/2 lg:w-full h-full flex items-center gap-12">
                        <Link href="/" onClick={() => setHoverNavbar?.(false)}>
                            <h1 className="text-2xl text-[#d1a374] font-bold cursor-pointer">LuxDin</h1>
                        </Link>
                        <ul className={`w-[45%] 2xl:w-auto xl:flex justify-around 2xl:gap-10 text-lg hidden text-${Color}`}>
                            <li className="h-full flex items-center gap-1 cursor-pointer Links" onMouseOver={() => setHoverNavbar?.(true)}>
                                Inner Pages
                                <i className={`bx bx-chevron-down duration-500 ${HoverNavbar === true ? '-rotate-180' : 'rotate-0'} text-gray-400 text-xl mt-1`}></i>
                            </li>
                            <Link href="/services" className={`${ChangeColor === 'services' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`}>Services</Link>
                            <Link href="/team" className={`${ChangeColor === 'team' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`}>Team</Link>
                            <Link href="/blog" className={`${ChangeColor === 'blog' ? 'text-[#a46c32]' : ''} hover:text-[#a46c32]`}>Blog</Link>
                        </ul>
                    </div>
                    <div className="w-1/2 h-full flex justify-end items-center xl:hidden">
                        <div className={`w-[15%] h-full flex flex-col justify-center items-center scale-110 cursor-pointer ${NavbarSize ? ' pt-0' : ' pt-2'}`} onClick={ChangeSize}>
                            <div className={`w-[4.5vw] sm:w-[2.5vw] xl:w-[4.5vw] duration-300 ${NavbarSize ? 'rotate-45 mb-0' : `rotate-0 mb-2`} border border-[#c17d00]`}></div>
                            <div className={`w-[4.5vw] sm:w-[2.5vw] xl:w-[4.5vw] duration-300 ${NavbarSize ? '-rotate-45 mt-[-0.2vh]' : `rotate-0 mb-2`} border border-[#c17d00]`}></div>
                        </div>
                    </div>
                </div>
                <div className={`w-full h-[90%] flex flex-col justify-between items-center ${NavbarSize ? 'flex gap-5 lg:gap-0' : 'hidden'} xl:hidden`}>
                    <div className="w-full h-1/2 flex flex-col gap-5">
                        <h1 className="w-full text-center text-[#c17d00] text-xl">INNER PAGES</h1>
                        <div className="text-xl lg:text-2xl bg-red-700w flex justify-between items-center flex-wrap pt-2 text-gray-600">
                            <Link href="/about" className={`w-1/3 text-center ${ChangeColor === 'about' ? 'text-[#a46c32]' : ''}`}>About</Link>
                            <Link href="/menu" className={`w-1/3 text-center ${ChangeColor === 'menu' ? 'text-[#a46c32]' : ''}`}>Menu</Link>
                            <Link href="/services" className={`w-1/3 text-center ${ChangeColor === 'services' ? 'text-[#a46c32]' : ''}`}>Services</Link>
                            <Link href="/team" className={`w-1/3 text-center mt-3 ${ChangeColor === 'team' ? 'text-[#a46c32]' : ''}`}>Team</Link>
                            <Link href="/contact" className={`w-1/3 text-center mt-3 ${ChangeColor === 'contact' ? 'text-[#a46c32]' : ''}`}>Contact</Link>
                            <Link href="/blog" className={`w-1/3 text-center mt-3 ${ChangeColor === 'blog' ? 'text-[#a46c32]' : ''}`}>Blog</Link>
                            <Link href="/reservation" className={`w-1/3 flex justify-center mt-3 ${ChangeColor === 'reservation' ? 'text-[#a46c32]' : ''}`}>Reservation</Link>
                        </div>
                    </div>
                    <div className="w-full h-1/2 flex justify-around sm:justify-center items-center pt-8 px-2 pb-6 sm:gap-14">
                        <div className="h-full flex justify-start items-center gap-2">
                            <i className='bx bxs-phone-call text-xl text-[#c17d00]'></i>
                            <h2>+123 456 7890</h2>
                        </div>
                        <div className="w-[0.1vw] h-[4vh] border border-[#c17d00]"></div>
                        <Link href="/reservation" className="text-lg">
                            Book Table
                        </Link>
                    </div>
                </div>
                <div className={`w-2/6 2xl:w-auto h-full xl:flex gap-8 justify-end items-center text-lg hidden text-${Color}`}>
                    <div className="h-full flex justify-start items-center gap-2 pl-2">
                        <i className='bx bxs-phone-call text-xl text-[#c17d00]'></i>
                        <h2>+123 456 7890</h2>
                    </div>
                    <div className="py-3 px-[0.2px] bg-[#d1a374]"></div>
                    <Link href="/reservation">
                        Book Table
                    </Link>
                </div>
            </div>
        </header>
    </>
}
