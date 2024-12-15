export default function Hero() {
    return <>
        <div className="hidden lg:flex py-14"></div>
        <section className="w-full flex flex-col items-center gap-16 pt-14">
            <div>
                <h1 className="text-center text-4xl lg:text-7xl">Secure</h1>
                <h1 className="text-center text-4xl lg:text-7xl">Your Reservation</h1>
            </div>
            <div className="w-4/6 xl:w-[55%] lg:h-[25vh] flex flex-wrap border-t border-b border-[#00000041] lg:py-6">
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center gap-3 py-8 lg:py-0 border-b lg:border-b-0 lg:border-r border-[#00000041]">
                    <h1 className="text-2xl">Address</h1>
                    <div className="text-center">
                        <p>123 Gourmet Avenue, Culinary</p>
                        <p>City, Food Island, States</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center gap-3 py-8 lg:py-0">
                    <h1 className="text-2xl">Hours</h1>
                    <div className="text-center">
                        <p>Tue - Sun ( 04:00 - 10:00 PM )</p>
                        <p>Closed on Monday</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}