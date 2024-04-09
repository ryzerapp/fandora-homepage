import seo from "@/assets/data/seo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BlogContent from "@/section/blog/BlogContent";
import BlogHero from "@/section/blog/BlogHero";
export const metadata = {
    ...seo.BLOG
}
export default function index(){
    return(
        <>
            <Navbar/>
            <BlogHero />
            <BlogContent />
            <Footer />
        </>
    )
}