import { AccordionItem as Item } from "@szhsin/react-accordion";
import { FaChevronDown } from "react-icons/fa6";
const AccordianMenu = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <div className={`flex items-center mt-5`}>
          <div>
            <p className="text-[#103A40]  hover:text-[black] poppins-500 mb-0 text-start ">{header}</p>
          </div>
          <FaChevronDown className={`transition-transform ml-1.5 duration-200 ease-out text-[#103A40]   hover:text-[black] poppins-500 rotate-${isEnter ? "180" : "0"} ${isEnter && "rotate-180"
            }`} />

        </div>
      </>
    )}
    buttonProps={{
      className: ({ isEnter }) =>
        `w-full`
    }}
    contentProps={{
      className: "transition-height duration-200 pt-3 ease-out"
    }}
    panelProps={{ className: "" }}
  />
);
export default AccordianMenu;