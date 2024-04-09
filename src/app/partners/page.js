import seo from "@/assets/data/seo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Agent from "@/section/partners/Agent";
import ChanelPartner from "@/section/partners/ChanelPartner";
import Growth from "@/section/partners/Growth";
import PartnerHero from "@/section/partners/PartnerHero";
import Platform from "@/section/partners/Platform";
import Review from "@/section/partners/Review";
import Steps from "@/section/partners/Steps";
export const metadata = {
    ...seo.PARTNERS
}
export default function index(){
    return (
        <>
            <Navbar />
            <PartnerHero />
            <Steps />
            <ChanelPartner />
            <Platform />
            <Growth />
            <Review />
            <Agent />
            <Footer />
        </>
    )
}