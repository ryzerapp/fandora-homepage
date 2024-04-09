import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { FaArrowLeft } from "react-icons/fa6";
// markdown plugins
import rehypeRaw from "rehype-raw";
import Comment from "./Comment";
import { config } from "@/config";
const SingleBlog = async ({ id }) => {
  const result = await fetch(
    `${config.API_URL}/config/blogs/${id}`,
    {
      cache: "no-cache",
    }
  );
  const { data } = await result.json();
  function formatDateFromISO(isoDateString) {
    const date = new Date(isoDateString);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return `${month} ${day}, ${year}`;
  }
  return (
    <section className="py-20 max-xs:px-2 max-sm:px-5">
      <div className="bs-container">
        <div className="row justify-center">
          <div className="col-md-9">
            <div className="row justify-center">
              <div className="">
                <div className="mb-4 w-[30px] h-[30px] flex justify-center items-center bg-[#5b7bf8] rounded-[50%]">
                  <Link href="/insights">
                    <FaArrowLeft className="text-[white]" />
                  </Link>
                </div>
                <h1 className="text-[#444762] text-[20px] xs:text-[22px] leading-[32px] sm:text-[28px] sm:leading-[38px]  lg:text-[34px] lg:leading-[44px] xl:text-[44px] xl:leading-[54px] poppins-600">
                  {data.title}
                </h1>
              </div>
              <div className="flex items-center mt-5">
                <p className="text-sm uppercase mr-4 poppins-600 text-[#00000080]">
                  surya
                </p>
                <p className="text-[#00000080] text-sm poppins-600 uppercase">
                  {formatDateFromISO(data.date)}
                </p>
              </div>
              <div className="mt-5">
                <img alt={data.title} className="" src={data.thumbnail} />
              </div>
              <div className="mt-[3rem]">
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  components={components}
                  children={data.content}
                />
              </div>
            </div>
            <Comment id={id} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
const components = {
  h1: ({ ...props }) => (
    <h1
      className="text-[20px] xs:text-[22px] leading-[32px] sm:text-[28px] sm:leading-[38px]  lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] text-[#45485F] poppins-700"
      {...props}
    />
  ),
  h2: ({ ...props }) => <h2 {...props} />,
  h3: ({ ...props }) => <h3 {...props} />,
  h4: ({ ...props }) => <h4 {...props} />,
  h5: ({ ...props }) => <h5 {...props} />,
  h6: ({ ...props }) => <h6 {...props} />,
  li: ({ ...props }) => (
    <li
      className="mt-5 blog-list text-[16px] md:text-[18px] leading-[28px] md:leading-[30px]  poppins-400"
      {...props}
    />
  ),
  ul: ({ ...props }) => (
    <ul
      className="pl-10  list-disc text-[16px] md:text-[18px] leading-[30px] poppins-400"
      {...props}
    />
  ),
  ol: ({ ...props }) => (
    <ul
      className="pl-10  list-decimal text-[16px] md:text-[18px]  poppins-400"
      {...props}
    />
  ),
  p: ({ ...props }) => (
    <p
      className="text-[16px]  md:text-[18px] leading-[28px] md:leading-[30px]  poppins-400"
      {...props}
    />
  ),
  a: ({ ...props }) => <Link {...props} />,
};
