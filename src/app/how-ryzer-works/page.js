import seo from "@/assets/data/seo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Faqs from "@/section/home/Faqs";
import WorkFlow from "@/section/home/WorkFlow";
export const metadata = {
    ...seo.HOW_IT_WORK
}
const Work = () => {
    return (
        <>
            <Navbar />
            <WorkFlow/>
            <Faqs />
            <Footer />
        </>
    )
}

export default Work;