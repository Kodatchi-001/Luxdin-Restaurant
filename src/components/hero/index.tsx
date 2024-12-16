interface StructurProps {
    FirstText: string,
    LastText: string,
    PictureId: string
}

export default function Hero({ FirstText, LastText, PictureId }: StructurProps) {
    return <>
        <section>
            <div className="w-full h-[40vh] sm:h-[45vh] lg:h-[55vh] 2xl:max-h-[500px] flex justify-center text-white background-image-size" id={`${PictureId}`}>
                <div className="w-full 2xl:max-w-[1600px] h-full flex flex-col justify-end gap-2 px-10 py-16 lg:pl-20">
                    <h1 className="text-4xl lg:text-6xl xl:text-7xl">{FirstText}</h1>
                    <h1 className="text-4xl lg:text-6xl xl:text-7xl">{LastText}</h1>
                </div>
            </div>
        </section>
    </>
}