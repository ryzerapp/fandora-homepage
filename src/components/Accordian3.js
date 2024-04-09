import { AccordionItem as Item } from "@szhsin/react-accordion";
import { FaChevronDown } from "react-icons/fa6";
import { FiPlus, FiMinus } from "react-icons/fi";
const Accordian3 = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <div className={`flex border-b-[1px] border-[#dadde1] mt-4 ${isEnter ? 'mb-5' : 'mb-2'} pb-4  pt-3.5  w-full items-center justify-between`}>
          <div>
            <h3 className="poppins-700 mb-0 text-[#181B31] text-start  text-[16px] sm:text-[19px]">{header}</h3>
          </div>
          {
            isEnter ?
              <FiMinus className={`transition-transform text-[black] duration-200 ease-out`} /> :
              <FiPlus className={`transition-transform text-[black] duration-200 ease-out`} />
          }

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
export default Accordian3;