export default function Hero() {
    return <>
        <section className="w-full h-full flex justify-center pt-36">
            <div className="w-full 2xl:max-w-[1600px] h-full flex flex-col items-center gap-16 ">
                <div>
                    <h1 className="text-center text-4xl lg:text-7xl">Secure</h1>
                    <h1 className="text-center text-4xl lg:text-7xl">Your Reservation</h1>
                </div>
                <div className="w-4/6 xl:w-[55%] h-full flex flex-wrap border-t border-b border-[#00000041] sm:py-14">
                    <div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center gap-3 py-8 sm:py-0 border-b sm:border-b-0 sm:border-r border-[#00000041]">
                        <h1 className="text-2xl">Address</h1>
                        <div className="text-center">
                            <p>123 Gourmet Avenue, Culinary</p>
                            <p>City, Food Island, States</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center gap-3 py-8 sm:py-0">
                        <h1 className="text-2xl">Hours</h1>
                        <div className="text-center">
                            <p>Tue - Sun ( 04:00 - 10:00 PM )</p>
                            <p>Closed on Monday</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}