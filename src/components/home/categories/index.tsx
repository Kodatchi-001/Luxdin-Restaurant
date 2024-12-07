import Link from "next/link";

export default function CategoriesHome() {
    return <>
        <section className="w-full lg:h-screen 2xl:h-[80vh] mt-6 lg:mt-0 xl:h-[80vh] flex flex-wrap">
            <Link href="/" className="w-1/2 xl:w-1/4 h-[30vh] sm:h-[30vh] lg:h-1/2 xl:h-full cursor-pointer lg:grayscale hover:grayscale-0 duration-300 flex justify-center items-center text-white text-2xl sm:text-3xl lg:text-4xl background-image-size" id="plat-restaurant-1">
                <h1>Appetizers</h1>
            </Link>
            <Link href="/" className="w-1/2 xl:w-1/4 h-[30vh] sm:h-[30vh] lg:h-1/2 xl:h-full cursor-pointer lg:grayscale hover:grayscale-0 duration-300 flex justify-center items-center text-white text-2xl sm:text-3xl lg:text-4xl background-image-size" id="plat-restaurant-2">
                <h1>Main Dishes</h1>
            </Link>
            <Link href="/" className="w-1/2 xl:w-1/4 h-[30vh] sm:h-[30vh] lg:h-1/2 xl:h-full cursor-pointer lg:grayscale hover:grayscale-0 duration-300 flex justify-center items-center text-white text-2xl sm:text-3xl lg:text-4xl background-image-size" id="plat-restaurant-3">
                <h1>Disserts</h1>
            </Link>
            <Link href="/" className="w-1/2 xl:w-1/4 h-[30vh] sm:h-[30vh] lg:h-1/2 xl:h-full cursor-pointer lg:grayscale hover:grayscale-0 duration-300 flex justify-center items-center text-white text-2xl sm:text-3xl lg:text-4xl background-image-size" id="plat-restaurant-4">
                <h1>Salad</h1>
            </Link>
        </section>
    </>
}