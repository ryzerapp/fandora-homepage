// "use client";
import seo from "@/assets/data/seo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Terms from "@/section/terms-of-use/Terms";
export const metadata = {
    ...seo.TERMS_OF_USE
}
export default function index(){
    return(
        <>
            <Navbar />
            <Terms />  
            <Footer />
        </>
    )
}