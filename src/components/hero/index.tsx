interface StructurProps {
    FirstText: string,
    LastText: string,
    PictureId: string
}

export default function Hero({ FirstText, LastText, PictureId }: StructurProps) {
    return <>
        <section>
            <div className="w-full h-[35vh] sm:h-[45vh] lg:h-[55vh] flex flex-col justify-end px-10 py-16 lg:pl-20 gap-2 text-white background-image-size" id={`${PictureId}`}>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl">{FirstText}</h1>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl">{LastText}</h1>
            </div>
        </section>
    </>
}