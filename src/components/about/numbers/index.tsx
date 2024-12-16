export default function Numbers() {
    return <>
        <section className="w-full lg:h-[50vh] 2xl:max-h-[600px]  my-10 sm:my-16 lg:my-10 flex justify-center">
            <div className="w-full 2xl:max-w-[1600px] h-full flex justify-between items-center flex-wrap px-5 lg:px-20 gap-10 sm:gap-20 lg:gap-0">
                <h1 className="w-full lg:w-[30%] text-3xl sm:text-5xl lg:text-6xl text-center lg:text-start">This is our numbers</h1>
                <div className="w-full lg:w-[65%] h-full flex justify-around items-center flex-wrap gap-8 sm:gap-0">
                    <div className="w-full sm:w-1/3 flex flex-col justify-center items-center gap-3">
                        <h1 className="text-5xl lg:text-6xl text-[#d1a374]">100+</h1>
                        <h2 className="lg:text-lg">DISHES</h2>
                    </div>
                    <div className="w-[0.1vw] h-[5vh] bg-[#0000004f] sm:hidden"></div>
                    <div className="w-full sm:w-1/3 h-1/2 flex flex-col justify-center items-center gap-3 lg:border-l lg:border-r border-[#0000004f]">
                        <h1 className="text-5xl lg:text-6xl text-[#d1a374]">28k+</h1>
                        <h2 className="lg:text-lg">GUESTS</h2>
                    </div>
                    <div className="w-[0.1vw] h-[5vh] bg-[#0000004f] sm:hidden"></div>
                    <div className="w-full sm:w-1/3 flex flex-col justify-center items-center gap-3">
                        <h1 className="text-5xl lg:text-6xl text-[#d1a374]">12+</h1>
                        <h2 className="lg:text-lg">ACHIVEMENTS</h2>
                    </div>
                </div>
            </div>
        </section>
    </>
}