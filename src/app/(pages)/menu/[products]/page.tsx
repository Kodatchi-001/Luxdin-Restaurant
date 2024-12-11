import Hero from "@/components/menu-details/hero";
import MainCourse from "@/components/menu-details/main-course";
import Others from "@/components/menu-details/others";
import Reservation from "@/components/menu-details/reservation";
import Testimonials from "@/components/menu-details/testimonials";
import { ProductsTittleProps } from "@/types";

export default async function Products({ params }: ProductsTittleProps) {
    const { products } = await params
    const Tittle = products.replace(/-/g, ' ').replace(/And/g, '&');

    return <>
        <Hero Props={{ CardTittle: Tittle }} />
        <MainCourse Props={{ CardTittle: Tittle }} />
        <Testimonials Props={{ CardTittle: Tittle }} />
        <Others Props={{ CardTittle: Tittle }} />
        <Reservation />
    </>
}