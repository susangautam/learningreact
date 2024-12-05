import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "../UI/modal";
import { useState } from "react";

function SubHeader() {
  const [registerShow, setRegisterShow] = useState(false);  
  const [LoginShow, setLoginShow] = useState(true);  

  return (
    <>
      <Modal registerShow={registerShow} setRegisterShow={setRegisterShow}>
        <div className="w-96 flex flex-col gap-10">
          <div className="text-primary font-bold text-3xl underline">
            {LoginShow ? "Login" : "Register"}
          </div>
          <div className="flex gap-4 flex-col">
            {!LoginShow && (
              <div>
                <label>Username: </label>
                  <input type="text" className="border outline-none border-gray-300 py-2 px-4 ml-2 placeholder:capitalize" placeholder="Username"/>
              </div>
            )}
            <div>
              <label>Email: </label>
                <input type="email" className="border outline-none ml-10 border-gray-300 py-2 px-4 placeholder:capitalize" placeholder="Enter your email"
              />
            </div>
            <div>
              <label>Password: </label>
              <input type="password" className="border outline-none border-gray-300 py-2 px-4 ml-3 placeholder:capitalize" placeholder="Enter your password"/>
            </div>
            <div>
              <button className="border-primary border rounded-md p-3 text-primary group relative shadow-lg">
                <div className="relative z-10 group-hover:text-white font-semibold">
                  {LoginShow ? "Login" : "Register"}
                </div>
                <div className="h-full absolute top-0 -left-0 rounded-md bg-primary w-0 group-hover:w-full transition-all duration-700 delay-75 ease-in-out"></div>
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <div className="flex justify-between px-5 mt-3">
        <div className="tracking-widest font-bold text-2xl py-3">CLEVER</div>
        <div>
          <div className="flex gap-6 ml-20">
            <ul className="text-gray-500 py-4 flex gap-6">
              <Link to="/" className="hover:text-black cursor-pointer transition ease-in duration-300">
                Home
              </Link>
              <Link to="/pages" className="hover:text-black cursor-pointer transition ease-in duration-300">
                Pages
              </Link>
              <Link to="/courses" className="hover:text-black cursor-pointer transition ease-in duration-300">
                Courses
              </Link>
              <Link to="/instructors" className="hover:text-black cursor-pointer transition ease-in duration-300">
                Instructors
              </Link>
              <Link
                to="/blog" className="hover:text-black cursor-pointer transition ease-in duration-300">
                Blog
              </Link>
              <Link to="/contact" className="hover:text-black cursor-pointer transition ease-in duration-300">
                Contact
              </Link>
            </ul>
            <div className="ml-10">
              <FaSearch className="absolute mt-5 ml-11 cursor-pointer" />
              <input
                type="text" placeholder="Search" className="border border-gray-500 border-none focus:outline-none pl-8 rounded-md mt-2 ml-9 w-60 h-10"/>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => {
              setRegisterShow(true);
              setLoginShow(false);  
            }}
            className="text-blue-700 w-fit h-fit bg-none hover:bg-[#D7E0FC] px-6 py-3 rounded-md font-semibold transition ease-in duration-300">
            REGISTER
          </button>
          <button
            onClick={() => {
              setRegisterShow(true);  
              setLoginShow(true);
            }}
            className="text-blue-700 w-fit h-fit bg-[#D7E0FC] px-6 py-3 rounded-md font-semibold">
            LOGIN
          </button>
        </div>
      </div>
    </>
  );
}

export default SubHeader;
