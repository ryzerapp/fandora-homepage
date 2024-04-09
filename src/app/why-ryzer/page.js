import seo from "@/assets/data/seo"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import CommingSoon from "@/section/why-ryzer/CommingSoon"
import Invest from "@/section/why-ryzer/Invest"
import WhyBuild from "@/section/why-ryzer/WhyBuild"
seo
export const metadata = {
   ...seo.WHY_RYZER
}
export default function index() {
    return (
        <>
            <Navbar />
            <WhyBuild />
            <Invest />
            <CommingSoon />
            <Footer />
        </>
    )
}

