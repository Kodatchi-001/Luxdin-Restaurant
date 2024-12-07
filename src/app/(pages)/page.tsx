import AboutHome from "@/components/home/about";
import CategoriesHome from "@/components/home/categories";
import Hero from "@/components/home/hero";
import ReservationHome from "@/components/home/reservation";
import ServicesHome from "@/components/home/services";
import SignaturesHome from "@/components/home/signatures";
import TestimonialsHome from "@/components/home/testimonials";

export default function Home() {
    return <>
        <Hero />
        <AboutHome />
        <CategoriesHome />
        <SignaturesHome />
        <TestimonialsHome />
        <ServicesHome />
        <ReservationHome />
    </>
}