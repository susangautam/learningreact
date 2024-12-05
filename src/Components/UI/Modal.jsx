/* eslint-disable react/prop-types */

function Modal({loginShow,setLoginShow,children}){
    console.log(loginShow);
    return (
    <div className="relative">
        <div className={`w-fit border  h-fit p-10 shadow-xl bg-white shadow-gray-300 ${loginShow ? "translate-y-0" :  "-translate-y-96"} transistion-all duration-700 delay-75 ease-in-out fixed top-6 left-0 z-50 right-0 bottom-0 mx-auto  `} >
            <div>
                {children}
            </div>
            <div onClick={()=> setLoginShow(false)}  className="absolute -top-4 -right-5 flex  items-center justify-center text-center rounded-full bg-red-500 h-10 w-10 text-white font-bold cursor-pointer">
                X
            </div>
        </div>
    </div>

        
    )
}
export default Modal