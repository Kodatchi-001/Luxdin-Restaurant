export default function AboutHome() {
    return <>
        <section className="w-full mt-5 lg:mt-24 lg:mb-24 flex flex-wrap-reverse lg:flex-nowrap lg:px-6 xl:px-20 gap-8 sm:gap-10 lg:gap-3">
            <div className="w-full lg:w-[35%] h-full flex justify-center items-center lg:px-8 xl:px-14 2xl:px-[68px] lg:py-4">
                <div className="w-full lg:w-[95%] xl:w-full 2xl:block object-cover object-center hidden lg:flex lg:h-[40rem] rounded-full 2xl:rounded-full background-image-size" id="bg-image-2"></div>
            </div>
            <div className="w-full lg:w-[65%] h-full pl-2 lg:px-5 xl:px-12 flex flex-wrap py-4 gap-10 sm:gap-14 lg:gap-0">
                <div className="w-full h-4/6 lg:pt-20 lg:pb-14 flex flex-col justify-between gap-5 xl:gap-10">
                    <h2 className="text-xl 2xl:text-2xl text-[#d1a374]">ABOUT US</h2>
                    <h1 className="text-3xl lg:text-5xl 2xl:text-6xl">Experience luxury dining like never before.</h1>
                    <p className="text-xl 2xl:text-2xl">
                        Discover a world where every dish is a masterpiece, everything
                        meticulously crafted with the finest ingredients. Our utmost years
                        commitment to excellence extends beyond the kitchen, creating an atmosphere
                        that resonates with sophistication and finesse.
                    </p>
                </div>
                <div className="w-full xl:w-5/6 h-2/6 flex justify-center lg:justify-between items-center flex-wrap">
                    <div className="w-1/2 sm:w-1/3 lg:w-auto flex flex-col items-center lg:items-start gap-2">
                        <h1 className="text-5xl lg:text-6xl text-[#d1a374]">100+</h1>
                        <h1 className="text-xl">DISHES</h1>
                    </div>
                    <div className="w-1/2 sm:w-1/3 lg:w-auto flex flex-col items-center lg:items-start gap-2">
                        <h1 className="text-5xl lg:text-6xl text-[#d1a374]">28k+</h1>
                        <h1 className="text-xl">GUESTS</h1>
                    </div>
                    <div className="w-1/2 sm:w-1/3 lg:w-auto flex flex-col items-center lg:items-start gap-2 mt-3 sm:mt-0">
                        <h1 className="text-5xl lg:text-6xl text-[#d1a374]">12+</h1>
                        <h1 className="text-xl">ACHIVEMENTS</h1>
                    </div>
                </div>
            </div>
        </section>
    </>
}