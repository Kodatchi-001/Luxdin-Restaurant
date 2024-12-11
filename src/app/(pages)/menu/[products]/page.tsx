import Hero from "@/components/menu-details/hero";

interface ProductsTittleProps {
    params: Promise<{
        products: string;
    }>
}

export default async function Products({ params }: ProductsTittleProps) {
    const { products } = await params
    const Tittle = products.replace(/-/g, ' ').replace(/And/g, '&');
    
    return <Hero Props={{ CardTittle: Tittle }} />
}