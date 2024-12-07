import Link from "next/link";

export default function ServicesHome() {
    return <>
        <section className="w-full mt-14 px-2 lg:px-5 xl:px-20 py-6 flex flex-col justify-between gap-5 sm:gap-8 lg:gap-10">
            <div className="w-full h-[20%] flex flex-col justify-center items-center gap-3 lg:gap-5">
                <h1 className="text-xl text-[#d1a374]">SERVICES</h1>
                <h1 className="text-3xl lg:text-6xl">Our Dining Services</h1>
            </div>
            <div className="w-full h-3/4 flex justify-between sm:justify-center lg:justify-between items-center flex-wrap gap-5 lg:gap-0 p-2 lg:py-3">
                <Link href="/" className="w-full sm:w-[48.5%] lg:w-[31%] h-[45vh] sm:h-[70vh] background-image-size flex items-end p-5 cards-services duration-500" id="services-1">
                    <div className="w-full py-5 text-center bg-[#fffdf8]">
                        <h1 className="text-2xl lg:text-xl xl:text-2xl">Fine Dining Experience</h1>
                    </div>
                </Link>
                <Link href="/" className="w-full sm:w-[48.5%] lg:w-[31%] h-[45vh] sm:h-[70vh] background-image-size flex items-end p-5 cards-services duration-500" id="services-2">
                    <div className="w-full py-5 text-center bg-[#fffdf8]">
                        <h1 className="text-2xl lg:text-xl xl:text-2xl">Private Dining Events</h1>
                    </div>
                </Link>
                <Link href="/" className="w-full sm:w-[48.5%] lg:w-[31%] h-[45vh] sm:h-[70vh] background-image-size flex items-end p-5 cards-services duration-500" id="services-3">
                    <div className="w-full py-5 text-center bg-[#fffdf8]">
                        <h1 className="text-2xl lg:text-xl xl:text-2xl">Food Catering Services</h1>
                    </div>
                </Link>
            </div>
        </section>
    </>
}