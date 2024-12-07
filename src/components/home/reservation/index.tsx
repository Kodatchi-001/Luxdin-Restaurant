import Link from "next/link";

export default function ReservationHome() {
    return <>
        <section className="w-full mt-5 xl:mt-14 xl:px-20 2xl:px-48 lg:py-2 xl:py-5 lg:mb-24 xl:mb-0">
            <div className="w-full h-full py-14 flex flex-col items-center justify-center gap-14 px-2 lg:px-0 lg:rounded-full background-image-size" id="reservation-bg">
                <h1 className="w-full sm:w-5/6 lg:w-[58%] text-4xl sm:text-5xl xl:text-6xl text-center text-white">Elevate your <span className="text-[#d1a374]">dining experience</span> to a higher quality.</h1>
                <Link href="/" className="px-12 py-3 rounded-full text-xl bg-[#d1a374] text-white">
                    Make Reservation
                </Link>
            </div>
        </section>
    </>
}