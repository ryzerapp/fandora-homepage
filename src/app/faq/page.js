import seo from "@/assets/data/seo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FaqContent from "@/section/faq/FaqContent";
import FaqHero from "@/section/faq/FaqHero";
export const metadata = {
    ...seo.FAQ
}
export default function index(){
    return(
        <>
            <Navbar />
            <FaqHero />
            <FaqContent />
            <Footer />
        </>
    )
}