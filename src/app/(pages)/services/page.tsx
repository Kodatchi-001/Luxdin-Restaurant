import Favorite from "@/components/services/favorite";
import Hero from "@/components/hero";
import Other from "@/components/services/other";
import Specialty from "@/components/services/specialty";

export default function Services() {
    return <>
        <Hero FirstText="Discover" LastText="Dining Services" PictureId="bg-hero-2"/>
        <Specialty />
        <Favorite />
        <Other />
    </>
}