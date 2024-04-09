import seo from "@/assets/data/seo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Blog from "@/section/home/Blog";
import Community from "@/section/home/Community";
import ExploreAsset from "@/section/home/ExploreAsset";
import Faqs from "@/section/home/Faqs";
import Feature from "@/section/home/Feature";
import Hero from "@/section/home/Hero";
import Join from "@/section/home/Join";
import Principle from "@/section/home/Principle";
import Review from "@/section/home/Review";
import WorkFlow from "@/section/home/WorkFlow";
export const metadata = {
  ...seo.HOME
}
export default function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <ExploreAsset />
        {/* <Feature /> */}
        <Principle />
        {/* <Community /> */}
        <WorkFlow home={true}/>
        <Faqs />
        {/* <Review /> */}
        <Blog />
        <Join />
        <Footer />
    </>
  )
}
