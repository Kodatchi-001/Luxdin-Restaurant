import Link from "next/link";

export default function Hero() {
    return <>
        <section>
            <div className="w-full px-5 lg:px-8 xl:px-20 2xl:px-[80px] pb-8 lg:pb-14 gap-5 sm:gap-10 xl:gap-0 overflow-hidden mt-8 lg:mt-20 flex justify-between items-end flex-wrap">
                <h1 className="w-full lg:w-5/6 xl:w-[60%] text-5xl lg:text-7xl xl:text-[6.2rem]">
                    Experience Finest Feasts
                </h1>
                <div
                    className="w-full xl:w-[40%] flex flex-col items-start gap-9 text-[21px]">
                    <p className="sm:w-5/6 lg:w-4/6 xl:w-full text-gray-800">
                        Indulge in a gastronomic journey where every dish is a
                        culinary masterpiece, crafted with ultra precision.
                    </p>
                    <Link href="/" className="w-full sm:w-auto sm:px-14 py-4 lg:py-3 text-center text-2xl duration-500 bg-[#d1a374] hover:bg-[#3f2d0b] text-white rounded-full">
                        Explore Our Menu
                    </Link>
                </div>
            </div>
            <div className="w-full h-[62vh] xl:h-[80vh] background-image-size" id="bg-image"></div>
        </section>
    </>
}
