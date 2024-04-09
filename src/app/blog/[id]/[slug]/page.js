import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { config } from "@/config";
import SingleBlog from "@/section/blog/SingleBlog"

export async function generateMetadata({ params }) {
    const result = await fetch(`${config.API_URL}/config/blogs/${params.id}`, {
        cache: 'no-cache'
    });
    const { data } = await result.json();
    return {
        title: data?.metadata?.title,
        description: data?.metadata?.description,
        openGraph: {
            title: data?.metadata?.title,
            description: data?.metadata?.description,
            url: `https://ryzerapp.vercel.app/blog/${data?.id}/${data?.title.replace(/\s/g, '-')}`,
            siteName: '@ryzer_app',
            images: [
                {
                    url: data?.thumbnail,
                    width: 800,
                    height: 600,
                }
            ],
            locale: 'en_US',
            type: 'article',
            authors: ['Surya'],
        },
        twitter: {
            card: 'summary_large_image',
            title:  data?.metadata?.title,
            description:data?.metadata?.description,
            siteId: '@ryzer_app',
            creator: '@ryzer_app',
            creatorId: '@ryzer_app',
            images: [data?.thumbnail],
        },
    }
}
const page = ({ params }) => {
    return (
        <>
            <Navbar />
            <SingleBlog id={params.id} />
            <Footer />
        </>
    )
}

export default page
