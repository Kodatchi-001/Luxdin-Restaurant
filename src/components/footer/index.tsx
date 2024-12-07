'use client'

export default function Footer() {
    return <>
        <footer className="w-full mt-10">
            <div className="w-full h-4/6 px-2 lg:px-16 py-8 lg:py-14 bg-[#2a2a2a]">
                <div className="w-full h-full flex flex-wrap gap-8 lg:gap-0 text-white">
                    <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center lg:items-start gap-4">
                        <h1 className="text-6xl sm:text-5xl lg:text-6xl text-[#d1a374]">Luxdin</h1>
                        <p className="w-full sm:w-4/6 text-center lg:text-start text-lg text-white">
                            At LuxDin, we believe in the power of luxurious
                            food dining gastronomy to create memorable experiences.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 h-full flex justify-center lg:justify-end px-2 lg:px-0">
                        <div className="flex flex-col justify-center gap-4">
                            <h1 className="text-2xl hidden lg:flex">Register to Newsletter</h1>
                            <div className="flex justify-between flex-wrap gap-6 lg:gap-0 xl:gap-6">
                                <input type="text" placeholder="Write Your Email" className="w-full lg:w-[65%] xl:w-auto text-xl pl-5 pr-44 py-4 lg:py-3" />
                                <button className="w-full lg:w-[30%] xl:w-auto text-center px-11 lg:px-0 xl:px-11 py-4 lg:py-3 text-2xl bg-[#d1a374]">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-2/6 flex justify-center sm:justify-between items-center flex-wrap lg:flex-nowrap sm:px-16 text-lg gap-3 lg:gap-0 py-3 lg:py-6">
                <h2 className="w-5/6 sm:w-auto text-center lg:text-start">Copyright © LuxDin in 2023. All rights reserved.</h2>
                <button className="px-8 py-3 text-white bg-[#2a2a2a]" onClick={() => window.scrollTo({top : 0, behavior : 'smooth'})}>Back To Top</button>
            </div>
        </footer>
    </>
}
