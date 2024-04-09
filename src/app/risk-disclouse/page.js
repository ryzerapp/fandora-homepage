import seo from "@/assets/data/seo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RiskDisclouse from "@/section/risk-disclouse/RiskDisclouse";
export const metadata = {
    ...seo.RISK_DISCLOUSURE
}
export default function index(){
    return (
        <>
            <Navbar />
            <RiskDisclouse />
            <Footer />
        </>
    )
}