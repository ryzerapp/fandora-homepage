import { AccordionItem as Item } from "@szhsin/react-accordion";
import { FaChevronDown } from "react-icons/fa6";
const Accordian1 = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <div className={`flex mt-2 ${isEnter ? 'mb-7' : 'mb-2'} px-4  sm:px-6 py-3.5 ${isEnter && 'rz-shadow-md'} rounded-3xl w-full items-center justify-between`}>
          <div>
            <p className="poppins-500 mb-0 text-start text-base sm:text-[18px]">{header}</p>
          </div>
          <FaChevronDown className={`transition-transform duration-200 ease-out text-[${isEnter ? '#725AEC' : ''}] rotate-${isEnter ? "180" : "0"} ${isEnter && "rotate-180"
            }`} />

        </div>
      </>
    )}
    buttonProps={{
      className: ({ isEnter }) =>
        `w-full`
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out"
    }}
    panelProps={{ className: "" }}
  />
);
export default Accordian1;