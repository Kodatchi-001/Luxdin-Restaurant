import Hero from "@/components/menu-details/hero";

type ParamsType = {
    products: string
}

export default async function Products({ params }: { params: ParamsType }) {
    const Tittle = params.products.replace(/-/g, ' ').replace(/And/g, '&');

    return <Hero Props={{ CardTittle: Tittle }} />
}