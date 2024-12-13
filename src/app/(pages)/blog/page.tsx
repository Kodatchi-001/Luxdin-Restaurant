import Articles from "@/components/blog/articles";
import Blogs from "@/components/blog/blogs";
import Latest from "@/components/blog/latest";
import Hero from "@/components/hero";

export default function Blog() {
    return <>
        <Hero FirstText="Explore" LastText="Culinary Insight" PictureId="bg-hero" />
        <Blogs />
        <Articles />
        <Latest />
    </>
}