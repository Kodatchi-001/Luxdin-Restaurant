'use client'

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';


export default function TestimonialsHome() {
    const [cardactive, setcardactive] = useState(0);
    // Ensure you import Swiper types
    SwiperCore.use([Autoplay]);
    const handelslide = (slide: SwiperCore) => setcardactive(slide.activeIndex);

    return <>
        <section className="w-full h-[70vh] lg:h-screen xl:h-[90vh] mt-5 lg:mt-16 lg:px-5 xl:px-16">
            <div className="w-full h-full flex items-end overflow-hidden relative">
                <div className='w-full h-full flex'>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        onSlideChange={handelslide}
                        autoplay={{ delay: 3000 }}
                        speed={800}>
                        <SwiperSlide>
                            <div className="w-full h-full lg:p-2 cursor-pointer">
                                <div className="w-full h-full flex items-end p-3 lg:p-10 pb-12 lg:pb-14 background-image-size" id="testimonials-1">
                                    <div className="w-full flex flex-col justify-between p-5 lg:p-10 gap-6 lg:gap-10 bg-[#fffdf8]">
                                        <h1 className="text-xl text-[#d1a374]">TESTIMONIALS</h1>
                                        <h1 className="text-lg lg:text-4xl">
                                            The sophisticated atmosphere, outstanding service,
                                            and exquisite cuisine made for a perfect evening.
                                        </h1>
                                        <h2 className="text-xl">Michael Roberts</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-full lg:p-2 cursor-pointer">
                                <div className="w-full h-full flex items-end p-3 lg:p-10 pb-12 lg:pb-14 background-image-size" id="testimonials-2">
                                    <div className="w-full flex flex-col justify-between p-5 lg:p-10 gap-6 lg:gap-10 bg-[#fffdf8]">
                                        <h1 className="text-xl text-[#d1a374]">TESTIMONIALS</h1>
                                        <h1 className="text-lg lg:text-4xl">
                                            Dining at LuxDin was experience.
                                            The ambiance was elegant, the staff were incredibly attentive!
                                        </h1>
                                        <h2 className="text-xl">Jessica Thompson</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-full lg:p-2 cursor-pointer">
                                <div className="w-full h-full flex items-end p-3 lg:p-10 pb-12 lg:pb-14 background-image-size" id="testimonials-3">
                                    <div className="w-full flex flex-col justify-between p-5 lg:p-10 gap-6 lg:gap-10 bg-[#fffdf8]">
                                        <h1 className="text-xl text-[#d1a374]">TESTIMONIALS</h1>
                                        <h1 className="text-lg lg:text-4xl">
                                            LuxDin exceeded all my expectations.
                                            Eating here with every moment felt like a celebration
                                        </h1>
                                        <h2 className="text-xl">Robert Azykawic</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='w-full py-4 lg:py-7 flex justify-center items-center gap-2 absolute z-20'>
                    <div className={`p-[0.35rem] ${cardactive === 0 ? 'bg-white' : 'backdrop-brightness-75'} rounded-full`}></div>
                    <div className={`p-[0.35rem] ${cardactive === 1 ? 'bg-white' : 'backdrop-brightness-75'} rounded-full`}></div>
                    <div className={`p-[0.35rem] ${cardactive === 2 ? 'bg-white' : 'backdrop-brightness-75'} rounded-full`}></div>
                </div>
            </div>
        </section>
    </>
}