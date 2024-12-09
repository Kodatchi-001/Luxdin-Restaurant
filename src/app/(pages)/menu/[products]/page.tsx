import Hero from "@/components/menu-details/hero";

export default async function Products({ params }: { params: { products: string } }) {
    const Tittle = params.products.replace(/-/g, ' ').replace(/And/g, '&');

    return <Hero Props={{ CardTittle: Tittle }} />
}