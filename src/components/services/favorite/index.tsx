import Link from "next/link";

export default function Favorite() {
    return <>
        <section className="w-full lg:h-screen 2xl:max-h-[800px] mt-20 flex flex-wrap">
            <div className="w-full lg:w-[54%] h-[45vh] lg:h-full background-image-size" id="bg-Services-3"></div>
            <div className="w-full lg:w-[46%] h-full px-5 xl:px-24 pt-14 lg:pt-44 flex flex-col items-start gap-10 lg:gap-24 py-14 lg:py-0 bg-[#183534]">
                <div className="flex flex-col gap-8">
                    <h2 className="text-xl text-[#d3a574]">FANS FAVORITE</h2>
                    <h1 className="w-5/6 lg:w-full 2xl:w-5/6 text-4xl lg:text-5xl 2xl:text-6xl text-white">Private Dining Events</h1>
                    <p className="text-[#fbf8f4] text-xl">
                        Host your special occasions in style with our customizable
                        private dining options, tailored to exceed your expectations.
                    </p>
                </div>
                <Link href="/reservation" className="px-10 py-3 bg-white text-black rounded-full text-xl hover:bg-[#d3a574] hover:text-white duration-500 cursor-pointer">
                    Make Reservation
                </Link>
            </div>
        </section>
    </>
}