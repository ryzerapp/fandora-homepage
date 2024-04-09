import seo from "@/assets/data/seo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutHero from "@/section/about-us/AboutHero";
import Team from "@/section/about-us/Team";
import CommingSoon from "@/section/why-ryzer/CommingSoon";

export const metadata = {
    ...seo.ABOUT_US
}
export default function index() {
    return (
        <>
            <Navbar />
            <AboutHero />
            <Team />
            <CommingSoon />
            <Footer />
        </>
    )
}