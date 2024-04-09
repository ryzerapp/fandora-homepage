import seo from "@/assets/data/seo";
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Legal from "@/section/legal/Legal"
export const metadata = {
  ...seo.LEGAL
}
const page = () => {
  return (
    <>
        <Navbar />
        <Legal />
        <Footer />
    </>
  )
}

export default page
