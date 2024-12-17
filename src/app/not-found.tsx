import Link from "next/link";

export default function NotFound() {
    return <>
        <section className="w-full h-full flex justify-center pt-24 lg:py-20">
            <div className="w-full 2xl:max-w-[1600px] h-full">
                <div className="w-full lg:h-[87vh] 2xl:max-h-[800px] flex flex-wrap-reverse lg:flex-nowrap px-2 xl:px-20">
                    <div className="w-full lg:w-1/2 h-[55%] lg:h-full lg:pb-4 flex flex-col justify-between gap-16 lg:gap-0">
                        <div className="w-full h-[80%] flex flex-col justify-end pt-10 lg:pt-24 gap-5 lg:gap-8 px-2 lg:px-0">
                            <h1 className="w-full text-8xl lg:text-[200px]">
                                404
                            </h1>
                            <p className="w-full lg:w-5/6 text-xl text-[#6e5959]">
                                Oops! It looks like the page youre looking for doesnt exist.
                                But dont worry, the culinary journey at Luxdin awaits you. Head
                                back to our homepage to explore our exquisite menu, make a reservation,
                                or discover more about our dining experience.
                            </p>
                        </div>
                        <div>
                            <Link href="/" className="px-8 py-3 sm:py-2 lg:py-3 rounded-full font text-lg lg:text-2xl bg-[#3f2d0b] hover:bg-[#8a6624] duration-500 text-white cursor-pointer">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 h-[40vh] lg:h-full p-1 lg:pl-14 lg:pr-2 lg:py-8">
                        <div className="w-full h-full background-image-size" style={{ backgroundImage: 'url(https://framerusercontent.com/images/XD3b9O0TH2zhufcizN3EMaXis.png?scale-down-to=2048)' }}></div>
                    </div>
                </div>
            </div>
        </section>
    </>
}