import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaTabletAlt } from "react-icons/fa";   
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Header() {
  return (
    <div style={{ backgroundColor: "#333333" }}>
      <div className="bg-tertiary text-white flex justify-between ">
        <div className=" flex gap-4" >
          <div className="py-3 px-3"><img src="Logo.png" className="h-8"></img>
          </div>
          <div> <button className="py-4 px-6 text-center text-l bg-[#222222] border-gray-500  hover:text-white hover:border-pink-600 hover:border-r-2 hover:border-l-2 whitespace-pre">+  CLEVER</button>
          </div>
       
        </div>
        <div>
          <ul className="flex flex-row text-2xl text-gray-400">
            <li>
              <button className="border-l-2 border-gray-500 px-4 py-4 hover:bg-[#222222] hover:text-white"><HiOutlineComputerDesktop /></button>
            </li>
            <li>
              <button className="border-l-2 border-gray-500 px-4 py-4 hover:bg-[#222222] hover:text-white"><FaTabletAlt /></button>
            </li>
            <li>
              <button className="border-l-2 border-gray-500 px-4 py-4 hover:bg-[#222222] hover:text-white"><MdOutlinePhoneAndroid /></button>
            </li>
            <li>
              <button className="text-white px-4 py-4 bg-[#7AC64D] hover:bg-[#222222] hover:text-white"><FaShoppingCart /></button>
            </li>
            <li>
              <button className=" border-gray-500 px-4 py-4  hover:bg-[#222222] hover:text-white"><ImCross /></button>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-primary">Bottom</div>
    </div>
  );
}

export default Header;
