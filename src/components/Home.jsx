import { useState } from "react";
import { Content } from "./ContentHome";
import { useNavigate } from "react-router-dom";
import { Services } from "./Service";
import { Certifications } from "./Certification";
import { Footer } from "./Footer";

export function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();
  return (
    <div>
    <div className="  w-full  bg-custom-bg bg-cover bg-center h-screen ">
      <div className="grid grid-cols-2">
        <div className="hidden md:block ">
          {/* This is a placeholder for future content */}
        </div>
        <div className="flex flex-col md:flex-row border-b justify-between items-center pt-4">
          {/* Sidebar Icon (visible on mobile) */}
          <div className="md:hidden p-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900"
            >
              {/* SVG Icon for Sidebar Toggle */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Buttons for larger screens */}
          <div className={`hidden md:flex  justify-evenly space-x-8 ${isOpen ? 'hidden' : 'flex'} pt-4 bg-transparent`}>
            <button onClick={()=>{
                navigate('/signup');
            }} type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 text-lg font-semibold rounded-lg px-5 py-2.5 text-center me-2 mb-2">Join Us</button>
            <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 text-lg font-semibold rounded-lg px-5 py-2.5 text-center me-2 mb-2">Contact</button>
            <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 text-lg font-semibold rounded-lg px-5 py-2.5 text-center me-2 mb-2">Support</button>
            <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 text-lg font-semibold rounded-lg px-5 py-2.5 text-center me-2 mb-2"><a href="#services">Services</a></button>
          </div>
        </div>
      </div>

      {/* Sidebar for mobile view */}
      <div className={`fixed top-0 left-0 h-full z-50 bg-gray-500 p-4 transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-900"
        >
          {/* SVG Icon for Sidebar Close */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul className="space-y-2 mt-12">
          <li><button onClick={()=>{
            navigate('/signup')
          }}className="block py-2 px-4 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 rounded-lg text-center">Join Us</button></li>
          <li><a href="#contact" className="block py-2 px-4 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 rounded-lg text-center">Contact</a></li>
          <li><a href="#support" className="block py-2 px-4 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 rounded-lg text-center">Support</a></li>
          <li><a href="#services" onClick={()=>{
            setIsOpen(false);
          }} className="block py-2 px-4 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 rounded-lg text-center">Services</a></li>
        </ul>
      </div>

      <div className="flex flex-col justify-center items-center h-screen my-0 ">
        <Content/>
      </div>
      
    </div>
    <Services/>
    <div>
      <Footer/>
    </div>
    
    </div>
  );
}
