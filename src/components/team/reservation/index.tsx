import Link from "next/link";

export default function Reservation() {
    return <>
        <section className="w-full h-[50vh] lg:h-[80vh] 2xl:max-h-[1000px] flex justify-center mt-10 lg:mt-24 background-image-size"
            style={{ backgroundImage: `url(https://framerusercontent.com/images/L3HigTDy45wIYeiZA3qPpxVpJ5o.png)` }}>
            <div
                className="w-full 2xl:max-w-[1600px] h-full flex flex-col justify-between items-center lg:items-start py-10 lg:p-20 text-white">
                <h1 className="w-full xl:w-[70%] text-3xl lg:text-6xl text-center lg:text-start">
                    Delve into the rich tapestry
                    of flavors with our special menu.
                </h1>
                <Link href="/reservation" className="lg:ml-auto px-10 py-4 text-xl rounded-full bg-white text-black hover:bg-[#8a6624] duration-500 hover:text-white cursor-pointer">
                    Make Reservation
                </Link>
            </div>
        </section>
    </>
}