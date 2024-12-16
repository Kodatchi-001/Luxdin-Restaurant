export default function Specialty() {
    return <>
        <section className="w-full h-full flex justify-center mt-20">
            <div className="w-full 2xl:max-w-[1600px] h-full px-3 lg:px-5 xl:px-20 flex flex-col gap-8 lg:gap-16">
                <div className="w-full flex flex-col items-center gap-3 lg:gap-5">
                    <h2 className="text-xl text-[#d1a374]">OUR SPECIALTY</h2>
                    <h1 className="text-3xl lg:text-6xl">Fine Dining Experience</h1>
                </div>
                <div className="w-full lg:h-[90vh] 2xl:max-h-[800px] py-3 flex flex-wrap gap-8 lg:gap-0">
                    <div className="w-full h-[35vh] sm:h-[50vh] lg:h-[82%] background-image-size" id="bg-Services-2"></div>
                    <div className="w-full h-[18%] flex justify-center lg:justify-between items-center text-xl flex-wrap gap-8 lg:gap-0">
                        <p className="w-full sm:w-5/6 lg:w-[45%] text-[#6e5959] text-center lg:text-start">
                            Immerse yourself in an elegant ambiance and impeccable service,
                            elevating your dining experience to new heights.
                        </p>
                        <button className="px-12 py-3 bg-[#d3a574] text-white rounded-full text-2xl">
                            Make Reservation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
}