import Articles from "@/components/blog-details/articles";
import Hero from "@/components/blog-details/hero";
import { PropsBlogsType } from "@/types"

export default async function BlogDetails({ params }: PropsBlogsType) {
    const { details } = await params;
    const Tittle = details.replace(/-/g, ' ').replace(/and/g, '&').replace(/yes/g, ':')

    return <>
        <Hero Props={{ BlogTitle: Tittle }} />
        <Articles Props={{ BlogTitle: Tittle }} />
    </>
}