import { insights } from "@/assets/data/blog"
import { config } from "@/config";
import Link from "next/link";

const BlogContent = async () => {
    const result = await fetch(`${config.API_URL}/config/blogs`, {
        cache:"no-cache"
    });
    const { data } = await result.json();
    function formatDateFromISO(isoDateString) {
        const date = new Date(isoDateString);

        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const day = date.getUTCDate();
        const month = months[date.getUTCMonth()];
        const year = date.getUTCFullYear();

        return `${month} ${day}, ${year}`;
    }
    return (
        <section className="py-20">
            <div className="bs-container">
                <div className="row max-md:justify-center">
                    {
                        data.length > 0 ?
                            data.map((item, index) => {
                                return (

                                    <div key={index} className="col-lg-4 col-md-6 col-sm-9 col-xs-10 col-11 mt-10">
                                        <Link href={`/blog/${item.id}/${item.title.replace(/\s/g, '-')}`}>
                                            <div className="xxl:px-5 lg:px-1 md:px-5">
                                                <div className="rz-shadow-review">
                                                    <div className="flex-center">
                                                        <img  alt={item.title} src={item.thumbnail} />
                                                    </div>
                                                    <div className="px-5 md:px-7 py-7  lg:px-5 xl:px-7">
                                                        <div className="flex items-center ">
                                                            <p className="text-xs uppercase mr-4 poppins-600 text-[black]">surya</p>
                                                            <p className="text-[#00000080] text-xs poppins-600 uppercase">
                                                                {formatDateFromISO(item.date)}
                                                            </p>
                                                        </div>
                                                        <h3 className="text-[#181B31] poppins-600 mt-4 text-[16px] sm:text-[18px] lg:text-[16px] xl:text-[20px]">{item.title}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                )
                            }) :
                            <></>
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogContent
