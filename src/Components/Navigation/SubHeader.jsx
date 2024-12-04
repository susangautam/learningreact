
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom'
function SubHeader() {

  return (

   <>
   
   <div className="flex justify-between px-5  mt-3">
    <div className="tracking-widest font-bold text-2xl py-3">CLEVER</div>
    <div>
    <div className="flex gap-6 ml-20">
      <ul className=" text-gray-500 py-4 flex gap-6">
    
        <Link to='/' className="hover:text-black cursor-pointer   transition ease-in duration-300 " >Home</Link>
        <Link to='/pages' className="hover:text-black cursor-pointer  transition ease-in duration-300 ">Pages</Link>
        <Link to='/courses' className="hover:text-black cursor-pointer  transition ease-in duration-300 ">Courses</Link>
        <Link to='/instructors' className="hover:text-black cursor-pointer  transition ease-in duration-300 ">Instructors</Link>
        <Link to='/blog' className="hover:text-black cursor-pointer  transition ease-in duration-300 ">Blog</Link>
        <Link to='/contact' className="hover:text-black cursor-pointer  transition ease-in duration-300 ">Contact</Link>
        
      </ul>
      
      <div className="ml-10"><FaSearch className="absolute mt-5 ml-11 cursor-pointer "/><input type="text" placeholder="Search" className="border border-gray-500 border-none focus-outline-none pl-8 rounded-md mt-2 ml-9 w-60 h-10"></input></div>
    </div>
    </div>
    <div className="flex gap-2">
      <button className="text-blue-700 w-fit h-fit bg-none  hover:bg-[#D7E0FC] px-6 py-3 rounded-md font-semibold transistion ease-in duration-300" >REGISTER</button>
      <button className="text-blue-700 w-fit h-fit bg-[#D7E0FC] px-6 py-3  rounded-md font-semibold">LOGIN</button>
    </div>
    </div>
   </>
  )
}

export default SubHeader
