import Link from "next/link";

export default function SignaturesHome() {
    return <>
        <section className="w-full mt-12 lg:mt-24 xl:mt-16 px-4 xl:px-20 flex flex-wrap gap-6">
            <div className="w-full lg:h-[25vh] flex justify-between items-end flex-wrap lg:pb-8 gap-6 lg:gap-0">
                <div className="w-full sm:w-auto flex flex-col justify-center gap-3 lg:gap-5">
                    <h2 className="text-xl text-[#d1a374]">SIGNATURES</h2>
                    <h1 className="text-3xl lg:text-6xl">Popular Delights</h1>
                </div>
                <Link href="/" className="border border-[#d1a374] w-full text-center sm:w-auto px-10 py-3 lg:py-2 text-lg rounded-full text-[#d1a374] hover:bg-[#d1a374] hover:text-white duration-500">
                    See All Menu
                </Link>
            </div>
            <div className="w-full flex justify-between flex-wrap">
                <div className="w-full lg:w-[50%] lg:h-full flex flex-col justify-between gap-3 lg:gap-0 lg:pr-16 lg:pb-5">
                    {/*Cards*/}
                    <Link href="/" className="w-full lg:h-[23%] py-8 flex flex-col gap-3 cards-Homepage cursor-pointer">
                        <div className="w-full flex justify-between">
                            <h1 className="w-5/6 text-2xl font-bold duration-300">Prime Truffle Ribeye</h1>
                            <h2 className="text-lg font-bold duration-300">$60</h2>
                        </div>
                        <p className="w-full lg:w-5/6 xl:w-[90%] text-[17px]">
                            Succulent ribeye steak infused with aromatic
                            truffle essence, served with buttery mashed potatoes.
                        </p>
                    </Link>
                    <Link href="/" className="w-full lg:h-[23%] py-8 flex flex-col gap-3 cards-Homepage cursor-pointer">
                        <div className="w-full flex justify-between">
                            <h1 className="w-5/6 text-2xl font-bold duration-300">Crispy Pork Tonkatsu</h1>
                            <h2 className="text-lg font-bold duration-300">$30</h2>
                        </div>
                        <p className="w-full lg:w-5/6 xl:w-[90%] text-[17px]">
                            Succulent pork cutlets delicately coated in panko breadcrumbs,
                            fried to golden perfection, and served with a tangy tonkatsu sauce.
                        </p>
                    </Link>
                    <Link href="/" className="w-full lg:h-[23%] py-8 flex flex-col gap-3 cards-Homepage cursor-pointer">
                        <div className="w-full flex justify-between">
                            <h1 className="w-5/6 text-2xl font-bold duration-300">Steak & Grilled Cauliflower</h1>
                            <h2 className="text-lg font-bold duration-300">$80</h2>
                        </div>
                        <p className="w-full lg:w-5/6 xl:w-[90%] text-[17px]">
                            Tender, perfectly seared steak paired with smoky grilled cauliflower,
                            harmonizing to create a decadent gastronomic experience.
                        </p>
                    </Link>
                    <Link href="/" className="w-full lg:h-[23%] py-8 flex flex-col gap-3 cards-Homepage cursor-pointer">
                        <div className="w-full flex justify-between">
                            <h1 className="w-5/6 text-2xl font-bold duration-300">Oceanic Symphony Risotto</h1>
                            <h2 className="text-lg font-bold duration-300">$80</h2>
                        </div>
                        <p className="w-full lg:w-5/6 xl:w-[90%] text-[17px]">
                            A vibrant paella bursting with flavors of the Mediterranean,
                            featuring fresh seafood and saffron-infused rice.
                        </p>
                    </Link>
                </div>
                <div className="w-full lg:w-[45%] h-[40vh] lg:h-full py-5">
                    <div className="w-full h-full background-image-size" id="signatures"></div>
                </div>
            </div>
        </section>
    </>
}