export default function Contact_Information() {
    return <>
        <section className="w-full flex justify-between flex-wrap gap-10 lg:gap-0 px-5 lg:px-20 py-20 mt-2 lg:mt-10">
            <div className="w-full lg:w-[52%] h-[30vh] lg:h-[70vh] background-image-size" style={{ backgroundImage: `url(https://framerusercontent.com/images/GDhlzXKekfUMVfrV89UZoG7EFA.png)` }}>

            </div>
            <div className="w-full lg:w-[45%] h-full lg:py-20 lg:pl-10 lg:pr-5 flex flex-col gap-8">
                <div className="flex flex-col gap-6 lg:gap-8">
                    <h2 className="text-[18px] text-[#d1a374] tracking-[0.3rem]">CONTACT</h2>
                    <h1 className="text-3xl lg:text-[55px]">Find us here.</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="w-full flex justify-between text-xl py-5 border-b border-gray-400">
                        <h1 className="font-bold">Phone</h1>
                        <p>+1 (555) 123-4567</p>
                    </div>
                    <div className="w-full flex justify-between text-xl pb-5 border-b border-gray-400">
                        <h1 className="font-bold">Socials</h1>
                        <p>@luxdin.restaurant</p>
                    </div>
                    <div className="w-full flex justify-between text-xl pb-5 border-b border-gray-400">
                        <h1 className="font-bold">Email</h1>
                        <p>information@luxdin.com</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}