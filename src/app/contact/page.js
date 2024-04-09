import seo from "@/assets/data/seo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactHero from "@/section/contact/ContactHero";
import ContactUs from "@/section/contact/ContactUs";
export const metadata = {
    ...seo.CONTACT
}
export default function index(){
    return (
        <>
            <Navbar />
            <ContactHero />
            <ContactUs />
            <Footer />
        </>
    )
}