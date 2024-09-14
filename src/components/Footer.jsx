import React from 'react';

export const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
        <div className='pb-4'>
        <header className="bg-yellow-200 pb-4 text-center w-[60%] m-auto rounded-lg ">
        <h1 className="text-xl font-bold">Join Our Agriculture Community Today</h1>
        <p className="mt-2">
          Want to stay up-to-date with the latest trends and innovations in the agriculture industry? Join our community today
          and gain access to exclusive content, expert insights, and networking opportunities. Don't miss out on the chance to
          grow your knowledge and your business.
        </p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded shadow">JOIN NOW</button>
      </header>
        </div>
      

      <main className="flex-1 p-4 bg-black text-white">
        <div className='grid grid-cols-1 sm:grid-cols-3 '>
            <div className='col-span-2 space-x-1'>
        <h2 className="text-2xl font-semibold m-8 border-b">Let's get started with something great</h2>
        <div className='border-b p-4'>
        <div className="grid grid-cols-1  p-4 md:grid-cols-3 gap-4 ">
          <div className=''>
            <h3 className="font-semibold">Customer service</h3>
            <p>+1 234 56789</p>
            <p>help@website.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Opening hours</h3>
            <p>Mon - Fri: 9 AM to 5 PM</p>
            <p>Weekend: Closed</p>
          </div>
          <div>
            <h3 className="font-semibold">Office location</h3>
            <p>1600 Amphitheatre Pkwy, Mountain View, CA 94043</p>
          </div>
        </div>
        </div>
        <div className=' flex p-8'>
            <div className='flex flex-col'>
               <p className='font-semibold '>Follow us</p>
               <div className='flex space-x-4 pt-2'>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8a4 4 0 0 1 3.37 3.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>


               </div>
            
            </div>
            

        </div>
        </div >
          <div className="text-center mt-8 pb-8 col-span-1">
            <img src="/images/BG-1.jpg" alt="" className='h-23 rem'/>
          {/* <p className="text-xl font-semibold mb-4">At </p> */}
          <p className='indent-8'>We believe that the future of agriculture lies in leveraging the power of technology to create a more sustainable, resilient, and equitable food system. Join us on this mission to transform the way we feed the world.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow">BOOK A MEETING</button>
        </div>
        </div>
        
      </main>

      {/* <footer className="bg-gray-200 text-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between text-sm">
            <p>ECO Certification: Energy Star Certified: EST-1111, (IAQ) Certified: IAQ-1111</p>
            <p className="text-center mt-8 md:mt-12">© All rights reserved OrionWP 2012 - 2023.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};