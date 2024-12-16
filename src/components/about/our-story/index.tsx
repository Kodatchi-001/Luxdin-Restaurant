export default function OurStory() {
    return <>
        <section className="w-full h-full flex justify-center mt-10 lg:mt-16">
            <div className="w-full 2xl:max-w-[1600px] h-full lg:h-auto flex justify-between items-center flex-wrap gap-5 lg:gap-0 lg:pl-5 xl:pl-16 lg:pr-14 xl:pr-20 2xl:px-8">
                <div className="w-full lg:w-[65%] h-full flex flex-wrap py-4 gap-10 lg:gap-0 px-1 lg:px-0">
                    <div className="w-full h-5/6 pl-2 lg:px-10 xl:px-16 lg:pt-20 lg:pb-14 flex flex-col justify-between gap-7 lg:gap-3 xl:gap-8">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-xl text-[#d1a374]">OUR STORY</h2>
                            <h1 className="text-3xl lg:text-5xl xl:text-6xl">Experience luxury dining like never before.</h1>
                        </div>
                        <div className="w-full lg:w-[85%] xl:w-5/6 ml-auto flex flex-col gap-5 text-[#6e5959]">
                            <p className="text-xl">
                                Discover a world where every dish is a masterpiece, meticulously
                                crafted with the finest ingredients. Our commitment to excellence
                                extends beyond the kitchen, creating an atmosphere that always resonate
                                with sophistication as a celebration of culinary finesse.
                            </p>
                            <p className="text-xl">
                                Established 20 years ago, LuxDin has redefined the
                                art of fine dining, offering an unparalleled blend
                                of exquisite flavors, elegant ambiance, and exceptional
                                service.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[30%] h-[50vh] lg:h-full 2xl:min-h-[45rem] lg:px-3 xl:px-8 2xl:px-10 lg:py-14">
                    <div className="w-full h-full lg:rounded-full background-image-size" id="bg-story"></div>
                </div>
            </div>
        </section>
    </>
}