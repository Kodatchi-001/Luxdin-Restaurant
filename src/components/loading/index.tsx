export default function Loading({ height }: { height: number }) {
    return <>
        <div className={`w-full h-[${height}vh] flex justify-center items-center`}>
            <iframe
                src="https://lottie.host/embed/12c95402-b5d4-465a-ab73-16cb7940714a/FKVcQJovkw.lottie"
                width="50%" height="50%" style={{ minHeight: "300px" }}
                frameBorder="0" allowFullScreen
            ></iframe>
        </div>
    </>
}