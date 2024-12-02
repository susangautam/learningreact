import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaTabletAlt } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";


function Header() {
  return (
   <div className="bg-#333333">
    <div className="bg-tertiary text-white flex justify-between px-6 py-6">
      <div>Email and Number</div>
      <div><ul  className="flex flex-row gap-10 text-3xl">
        <li><HiOutlineComputerDesktop /></li>
        <li><FaTabletAlt /></li>
        <li><MdOutlinePhoneAndroid /></li>simport { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaTabletAlt } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-[#333333]">
      <div className="bg-tertiary text-white flex justify-between px-6 py-6">
        <div className="flex-1">Email and Number</div>
        <div className="flex justify-end">
          <ul className="flex flex-row gap-10 text-3xl">
            <li><HiOutlineComputerDesktop /></li>
            <li><FaTabletAlt /></li>
            <li><MdOutlinePhoneAndroid /></li>
            <li className="bg-[#7AC64D]"><FaShoppingCart /></li>
          </ul>
        </div>
      </div>
      <div className="bg-primary">Bottom</div>
    </div>
  )
}

export default Header
        <li className="bg-[#7AC64D]"><FaShoppingCart /></li>
      </ul></div>
    </div>
    <div className="bg-primary">Bottom</div>
    
   </div>
  )
}

export default Header
