import Hero from "@/components/menu-details/hero";

export default function Products({ params }: { params: { products: string } }) {
    const { products } = params
    const Tittle = products.replace(/-/g, ' ').replace(/And/g, '&');

    return <Hero Props={{ CardTittle: Tittle }} />
}