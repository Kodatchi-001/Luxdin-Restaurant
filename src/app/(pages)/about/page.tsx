import Hero from "@/components/hero";
import OurStory from "@/components/about/our-story";
import Values from "@/components/about/values";
import Team from "@/components/about/team";
import Numbers from "@/components/about/numbers";
import Achievements from "@/components/about/achievements";
import Milestones from "@/components/about/milestones";

export default function About() {
    return <>
        <Hero FirstText="About" LastText="Our Restaurant" PictureId="bg-hero" />
        <OurStory />
        <Values />
        <Team />
        <Numbers />
        <Achievements />
        <Milestones />
    </>
}