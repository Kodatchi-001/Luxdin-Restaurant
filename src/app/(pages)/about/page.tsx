import Achievements from "@/components/about/achievements";
import Hero from "@/components/about/hero";
import Numbers from "@/components/about/numbers";
import OurStory from "@/components/about/our-story/inde";
import Team from "@/components/about/team";
import Values from "@/components/about/values/inde";

export default function About() {
    return <>
        <Hero />
        <OurStory />
        <Values />
        <Team />
        <Numbers />
        <Achievements />
    </>
}