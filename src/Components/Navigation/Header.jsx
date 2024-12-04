import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaTabletAlt } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import SubHeader from "./SubHeader";

function Header() {
  return (
    <>
      <div style={{ backgroundColor: "#333333" }}>
        <div className="bg-tertiary text-white flex justify-between ">
          <div className=" flex gap-4">
            <div className="py-3 px-3">
              <img src="Logo.png" className="h-8"></img>
            </div>
            <div>
              {" "}
              <button className="py-4 px-6 text-center text-l bg-[#222222] border-gray-500  hover:text-white hover:border-pink-600 hover:border-r-2 hover:border-l-2 whitespace-pre">
                + CLEVER
              </button>
            </div>
          </div>
          <div>
            <ul className="flex flex-row text-2xl text-gray-400">
              <li>
                <button className="border-l-[1px] border-gray-500 px-4 py-4 hover:bg-[#222222] hover:text-white">
                  <HiOutlineComputerDesktop />
                </button>
              </li>
              <li>
                <button className="border-l-[1px] border-gray-500 px-4 py-4 hover:bg-[#222222] hover:text-white">
                  <FaTabletAlt />
                </button>
              </li>
              <li>
                <button className="border-l-[1px] border-gray-500 px-4 py-4 hover:bg-[#222222] hover:text-white">
                  <MdOutlinePhoneAndroid />
                </button>
              </li>
              <li>
                <button className="text-white px-4 py-4 bg-[#7AC64D] hover:bg-[#222222] hover:text-white">
                  <FaShoppingCart />
                </button>
              </li>
              <li>
                <button className=" border-gray-500 px-4 py-4  hover:bg-[#222222] hover:text-white">
                  <ImCross />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-gray-500  border-gray-500">
        <ul className="flex gap-10 px-4 ">
          <li className="hover:text-black cursor-pointer text-xs transition ease-in duration-300 py-3 px-3 font-medium">
            PHONE : +977 971231232
          </li>
          <li className="hover:text-black cursor-pointer text-xs transition ease-in duration-300 py-3 px-3 font-medium">
            EMAIL : info@clever.com
          </li>
        </ul>
        <div>
          <ul className="flex  items-center">
            <div className="hover:text-black cursor-pointer text-xs transition ease-in duration-300 px-3 ">
              FOLLOW US
            </div>
            <li className="hover:text-black cursor-pointer text-xs transition ease-in duration-300 border-l-[1px] py-3 px-6">
              <FaFacebookF />
            </li>
            <li className="hover:text-black cursor-pointer text-xs transition ease-in duration-300 border-l-[1px] py-3 px-6">
              <FaInstagram />
            </li>
            <li className="hover:text-black cursor-pointer text-xs transition ease-in duration-300 border-l-[1px] py-3 px-6">
              <FaTwitter />
            
            </li>
          </ul>
        </div>
      </div>
      
      <div><SubHeader /></div>
    </>
  );
}

export default Header;
