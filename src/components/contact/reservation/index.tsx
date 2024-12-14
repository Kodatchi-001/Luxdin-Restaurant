export default function Reservation() {
    return <>
        <section className="w-full h-[50vh] lg:h-[90vh] mt-10 lg:mt-28">
            <div
                className="w-full h-full flex flex-col justify-between items-center lg:items-start background-image-size py-10 lg:px-20 lg:py-10 text-white"
                style={{ backgroundImage: `url(https://framerusercontent.com/images/XZny2G7lVQBH65h2Fp0KD3Lvso.png?scale-down-to=2048)` }}>
                <h1 className="w-full xl:w-[80%] text-3xl lg:text-6xl text-center lg:text-start">
                    Delve into the rich tapestry
                    of flavors with our special menu.
                </h1>
                <h1 className="lg:ml-auto px-8 py-3 text-xl rounded-full bg-white text-black hover:bg-[#8a6624] duration-500 hover:text-white cursor-pointer">Make Reservation</h1>
            </div>
        </section>
    </>
}