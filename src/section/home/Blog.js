import { config } from "@/config";
import Link from "next/link";
import { BsTypeH3 } from "react-icons/bs";

export default async function Blog() {
  const result = await fetch(`${config.API_URL}/config/blogs`, {
    cache: "no-cache",
  });
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
    <section className="py-20">
      <div className="bs-container">
        <div className="row px-5 items-center">
          <div className="col-lg-6 max-lg:justify-center flex">
            <div>
              <div className="flex max-lg:justify-center lg:mb-5 mb-2">
                <div className="bg-[#EDF3F7] max-lg:text-center px-3 rounded-md py-[2px] poppins-600 text-xs text-[#333B41]">
                  LEARN FROM OUR
                </div>
              </div>
              <h2 className="md:leading-[55px] xs:leading-[45px]  leading-[32px]  max-lg:text-center text-[23px] xs:text-[30px] md:text-[40px] poppins-700 text-[#45485F]">
                Latest Blogs
              </h2>
            </div>
          </div>
          <div className="col-lg-6 max-lg:mt-5 max-lg:justify-center flex">
            <div>
              <p className="text-[#27273A] max-lg:text-center poppins-400 text-[18px]">
              We will share blogs soon
              </p>
            </div>
          </div>
        </div>
        {/* <div className="row max-md:justify-center lg:mt-10">
          {data.length > 0 ? (
            data.slice(0, 3).map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-4 col-6 col-sm-9 col-xs-10 col-11 max-lg:mt-10"
                >
                  <Link href={`/blog/${item.id}/${item.title.replace(/\s/g, '-')}`}>
                    <div className="xxl:px-5 lg:px-1 md:px-5">
                      <div className="rz-shadow-review">
                        <div className="flex-center">
                          <img alt={item.title} src={item.thumbnail} />
                        </div>
                        <div className="p-7">
                          <div className="flex items-center ">
                            <p className="text-xs uppercase mr-4 poppins-600 text-[black]">
                              {"surya"}
                            </p>
                            <p className="text-[#00000080] text-xs poppins-600 uppercase">
                              {formatDateFromISO(item.date)}
                            </p>
                          </div>
                          <h3 className="text-[#181B31] poppins-500 mt-4 sm:text-[18px]">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <></>
          )}
          <div className="col-12 justify-center mt-10 flex">
            <Link href={"/insights"}>
              <button className="bg-[#52C1B9] text-[white] flex items-center px-7 xs:px-8 py-3 transition-all duration-300 hover:scale-105 rounded-md">
                <span className=" poppins-600 text-center mr-3 text-base xs:text-lg">
                  Read more
                </span>
              </button>
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
}
