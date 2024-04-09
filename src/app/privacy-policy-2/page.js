// "use client";
import seo from "@/assets/data/seo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PrivacyPolicy from "@/section/privacy-policy-2/PrivacyPolicy";
export const metadata = {
    ...seo.PRIVACY_POLICY
}
export default function index(){
    return (
        <>
            <Navbar />
            <PrivacyPolicy />
            <Footer />
        </>
    )
}