/* eslint-disable react/prop-types */ //kisan dai le banaunu vako(dk k ho)

function Modal({ registerShow, setRegisterShow, children }) {
    return (
      <div className="relative">
        <div
          className={`w-fit h-fit p-10 shadow-xl bg-white shadow-gray-300 fixed top-6 left-0 right-0 bottom-0 mx-auto z-50 transition-all duration-500 ease-in-out ${registerShow ? "translate-y-0 opacity-100" : "-translate-y-96 opacity-0"}`}>
          <div>{children}</div>
          <div onClick={() => setRegisterShow(false)} 
            className="absolute -top-4 -right-5 flex items-center justify-center text-center rounded-full bg-red-500 h-10 w-10 text-white font-bold cursor-pointer">
            X
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;
  