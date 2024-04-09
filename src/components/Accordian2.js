import { AccordionItem as Item } from "@szhsin/react-accordion";
import { FaChevronDown } from "react-icons/fa6";
const Accordian2 = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <div className={`flex mt-2 ${isEnter ? 'mb-7' : 'mb-2'} px-4  sm:px-8 py-[1.2rem]  ${isEnter?'rz-shadow-md':'bg-[#F7F7F8]'} rounded-[25px] w-full items-center justify-between`}>
          <div>
            <h3 className="poppins-600 mb-0 text-start text-base text-[black] sm:text-[16px]">{header}</h3>
          </div>

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
export default Accordian2;