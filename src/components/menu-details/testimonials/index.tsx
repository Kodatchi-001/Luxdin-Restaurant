'use client'

import { useContext, useState } from 'react';
import { MenuTypes, PropsMenudetailsType } from '@/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import { Shareinfo } from '@/context';

export default function Testimonials({ Props }: PropsMenudetailsType) {
    const [cardactive, setcardactive] = useState<number>(0);
    const { Menu } = useContext(Shareinfo);
    // Ensure you import Swiper types
    SwiperCore.use([Autoplay]);
    const handelslide = (slide: SwiperCore) => setcardactive(slide.activeIndex)
    return <>
        <section className='w-full h-[70vh] lg:h-screen xl:h-[90vh] 2xl:max-h-[900px] flex justify-center'>
            <div className='w-full 2xl:max-w-[1600px] h-full'>
                {Menu
                    .filter((item: MenuTypes) => item.Tittle === Props.CardTittle)
                    .map((item: MenuTypes) => (
                        <div key={item.id} className="w-full h-full mt-10 px-2 lg:px-5 xl:px-16 lg:py-10">
                            <div className="w-full h-full flex items-end overflow-hidden relative">
                                <div className='w-full h-full flex'>
                                    <Swiper
                                        modules={[Autoplay]}
                                        slidesPerView={1}
                                        onSlideChange={handelslide}
                                        autoplay={{ delay: 3000 }}
                                        speed={800}>
                                        <SwiperSlide>
                                            <div className="w-full h-full p-2 cursor-pointer">
                                                <div className="w-full h-full flex items-end p-3 lg:p-10 pb-12 lg:pb-14 background-image-size" style={{ backgroundImage: `url(${item.Picture_3})` }}>
                                                    <div className="w-full h-auto flex flex-col justify-between p-6 lg:p-8 gap-6 lg:gap-5 bg-[#fffdf8]">
                                                        <h1 className="text-xl text-[#d1a374]">TESTIMONIALS</h1>
                                                        <h1 className="lg:text-4xl">
                                                            Indulging in this was an unparalleled experience of culinary excellence.
                                                            Each bite of the tender, succulent ribeye infused with rich truffle flavor
                                                            was pure bliss
                                                        </h1>
                                                        <h2 className="text-xl">Milena Roberts</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="w-full h-full p-2 cursor-pointer">
                                                <div className="w-full h-full flex items-end p-3 lg:p-10 pb-12 lg:pb-14 background-image-size" style={{ backgroundImage: `url(${item.Picture_4})` }}>
                                                    <div className="w-full h-auto flex flex-col justify-between p-6 lg:p-8 gap-6 lg:gap-5 bg-[#fffdf8]">
                                                        <h1 className="text-xl text-[#d1a374]">TESTIMONIALS</h1>
                                                        <h1 className="lg:text-4xl">
                                                            The Prime Truffle Ribeye exceeded my expectations.
                                                            Every bite was a luxurious experience, with the tender
                                                            steak perfectly complemented by the rich truffle essence.
                                                        </h1>
                                                        <h2 className="text-xl">Emma Silvester</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="w-full h-full p-2 cursor-pointer">
                                                <div className="w-full h-full flex items-end p-3 lg:p-10 pb-12 lg:pb-14 background-image-size" style={{ backgroundImage: `url(${item.Picture_5})` }}>
                                                    <div className="w-full h-auto flex flex-col justify-between p-6 lg:p-8 gap-6 lg:gap-5 bg-[#fffdf8]">
                                                        <h1 className="text-xl text-[#d1a374]">TESTIMONIALS</h1>
                                                        <h1 className="lg:text-4xl">
                                                            The tenderness of the steak combined with the
                                                            intoxicating aroma of truffle oil created a culinary
                                                            experience unlike any other
                                                        </h1>
                                                        <h2 className="text-xl">Michaela Langdon</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className='w-full py-7 flex justify-center items-center gap-2 absolute z-20'>
                                    <div className={`p-[0.35rem] ${cardactive === 0 ? 'bg-white' : 'backdrop-brightness-75'} rounded-full`}></div>
                                    <div className={`p-[0.35rem] ${cardactive === 1 ? 'bg-white' : 'backdrop-brightness-75'} rounded-full`}></div>
                                    <div className={`p-[0.35rem] ${cardactive === 2 ? 'bg-white' : 'backdrop-brightness-75'} rounded-full`}></div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    </>
}