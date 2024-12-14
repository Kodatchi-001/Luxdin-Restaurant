import Contact_Information from "@/components/contact/contact-information";
import Hero from "@/components/contact/hero";
import Information from "@/components/contact/information";
import Questions from "@/components/contact/quetions";
import Reservation from "@/components/contact/reservation";

export default function Contact() {
    return <>
        <Hero />
        <Information />
        <Contact_Information />
        <Questions />
        <Reservation />
    </>
}