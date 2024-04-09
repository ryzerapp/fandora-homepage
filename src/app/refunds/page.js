import seo from "@/assets/data/seo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Refunds from "@/section/refunds/Refunds";
export const metadata = {
    ...seo.REFUNDS
}
export default function index(){
    return (
        <>
            <Navbar />
            <Refunds />
            <Footer />
        </>
    )
}