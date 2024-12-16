export default function Information() {
    return <>
        <section className="w-full h-full flex justify-center bg-[#183534]">
            <div className="w-full 2xl:max-w-[1600px] h-full py-14 lg:py-20 flex flex-col gap-14">
                <div className="w-full h-full flex flex-col items-center gap-12 text-white">
                    <div className="flex flex-col items-center gap-5">
                        <h2 className="text-xl text-[#d1a374]">INFORMATION</h2>
                        <h1 className="text-3xl lg:text-5xl xl:text-6xl">Operation Time</h1>
                    </div>
                    <div className="w-4/6 xl:w-[55%] flex flex-wrap sm:py-10">
                        <div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center gap-3 py-8 lg:py-0 border-b sm:border-b-0 sm:border-r border-[#d1a374]">
                            <h1 className="text-2xl text-[#d1a374]">Address</h1>
                            <div className="text-center">
                                <h2>123 Gourmet Avenue, Culinary</h2>
                                <h2>City, Food Island, States</h2>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center gap-3 py-8 lg:py-0">
                            <h1 className="text-2xl text-[#d1a374]">Hours</h1>
                            <div className="text-center">
                                <h2>Tue - Sun ( 04:00 - 10:00 PM )</h2>
                                <h2>Closed on Monday</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[40vh] lg:h-[70vh] 2xl:max-h-[700px] px-5 lg:px-20 flex justify-center text-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d9742.795491357248!2d4.891295!3d52.37588!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDIyJzMzLjIiTiA0wrA1MycyOC43IkU!5e0!3m2!1sen!2sus!4v1733233406714!5m2!1sen!2sus"
                        className="w-full h-full"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    </>
}