export default function Achievements() {
    return <>
        <section className="w-full lg:h-[75vh] p-3 lg:px-10 xl:px-20">
            <div className="w-full h-full background-image-size px-5 lg:px-16 py-14" id="bg-section-5">
                <div className="w-full h-full flex justify-between flex-wrap gap-10 lg:gap-5">
                    <div className="w-full lg:w-1/3 h-full flex flex-col gap-3 lg:gap-5 text-white">
                        <h2 className="text-xl">ACHIEVEMENTS</h2>
                        <h1 className="text-3xl lg:text-6xl xl:text-7xl">Recognized Excellence</h1>
                    </div>
                    <div className="w-full lg:w-[40%] xl:w-[30%] h-full px-8 py-10 lg:p-10 bg-[#fffdf8]">
                        <div className="w-full h-1/2 flex flex-col justify-between gap-8 lg:gap-0 pb-8 border-b border-black">
                            <h2 className="text-2xl lg:text-xl text-[#d1a374]">2022</h2>
                            <div className="flex flex-col gap-1">
                                <h1 className="text-2xl font-bold">Golden Fork Award</h1>
                                <h2 className="text-xl text-[#6e5959]">Exemplary Craftsmanship</h2>
                            </div>
                        </div>
                        <div className="w-full h-1/2 flex flex-col justify-between gap-8 lg:gap-0 pt-8">
                            <h2 className="text-2xl lg:text-xl text-[#d1a374]">2023</h2>
                            <div className="flex flex-col gap-1">
                                <h1 className="text-2xl font-bold">Wine Spectator Award</h1>
                                <h2 className="text-xl text-[#6e5959]">Outstanding Wine Selection</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}