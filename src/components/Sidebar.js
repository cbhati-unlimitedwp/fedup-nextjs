"use client";
import React from 'react';
import { useEffect } from "react";

const Sidebar = () => {
    useEffect(() => {
        const init = async () => {
            const { Collapse, Dropdown, Offcanvas, Datepicker, Input, initTE } = await import("tw-elements");
            initTE({ Collapse, Dropdown, Offcanvas, Datepicker, Input }); 
        };
        
        init();
    }, []);

  return (
    <>
    <div className="right-sidebar w-[365px]">
       <div className="bg-white p-5 rounded-custom shadow-custom-1">
          {/* Select Pick up Date Start */}
          <label htmlFor="pickupdate" className="mb-2 inline-block text-neutral-700">Select Pick Up Date</label>
          <div id="pickupdate" className="relative mb-3" data-te-datepicker-init>
              <input  type="text" className="peer block min-h-[auto] w-full rounded border border-solid border-gray-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none" placeholder="dd/mm/yyyy" data-te-datepicker-toggle-ref  data-te-datepicker-toggle-button-ref/>
              
              <button data-te-datepicker-toggle-ref data-te-datepicker-toggle-button-ref className="justify-content-center absolute right-0.5 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center border-none bg-transparent outline-none hover:text-primary focus:text-primary [&>svg]:h-5 [&>svg]:w-5">
                  <svg fill="currentColor" className="w-[24px] h-[24px] fill-basecolor/50" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path>
                  </svg>
              </button>
          </div>
          {/* Select Pick up Date End */}
          <p className='text-center'>Add menu items to your cart.</p>
       </div>
      </div>
    </>
  );
}

export default Sidebar;




