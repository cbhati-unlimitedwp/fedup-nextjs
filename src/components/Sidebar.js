"use client";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
    useEffect(() => {
        const init = async () => {
            const { Collapse, Dropdown, Offcanvas, Datepicker, Input, initTE } = await import("tw-elements");
            initTE({ Collapse, Dropdown, Offcanvas, Datepicker, Input }); 
        };
        
        init();
    }, []);

    const [value, setValue] = useState(0);
    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        setValue(value - 1);
    };

    const handleInputChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        if (!isNaN(newValue)) {
        setValue(newValue);
        }
    };

  return (
    <>
    <div className="right-sidebar w-full lg:w-[365px] hidden lg:block">
       <div className="bg-white rounded-custom shadow-custom-1">
          {/* Select Pick up Date Start */}
          <div className="p-5">
            <label htmlFor="pickupdate" className="mb-2 inline-block text-neutral-700">Select Pick Up Date</label>
            <div id="pickupdate" className="relative mb-3" data-te-datepicker-init>
                <input  type="text" className="peer block min-h-[auto] w-full rounded border border-solid border-gray-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-light-green data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none" placeholder="dd/mm/yyyy" data-te-datepicker-toggle-ref  data-te-datepicker-toggle-button-ref/>
                
                <button data-te-datepicker-toggle-ref data-te-datepicker-toggle-button-ref className="justify-content-center absolute right-0.5 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center border-none bg-transparent outline-none hover:text-light-green focus:text-light-green [&>svg]:h-5 [&>svg]:w-5">
                    <svg fill="currentColor" className="w-[24px] h-[24px] fill-basecolor/50" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path>
                    </svg>
                </button>
            </div>
            <p className='text-center'>Add menu items to your cart.</p>
          </div>
          {/* Select Pick up Date End */}
          

          {/* Added Cart Product sumary Start */}
          <div className='cart-summry max-h-[50vh] overflow-y-auto mt-4 px-5 border-'>
              <ul>
                <li className='flex items-start overflow-hidden py-1.5 border-b border-dashed border-gray-1 last:border-b-0'>
                  <button type="button" data-te-ripple-init data-te-ripple-color="dark" className="flex items-center justify-center w-6 h-6 min-w-6 rounded-full bg-gray-200 p-1 uppercase leading-normal text-basecolor transition duration-150 ease-in-out hover:bg-gray-300 focus:bg-gray-300  focus:outline-none focus:ring-0">
                      <svg className="w-[14px] h-[14px] fill-basecolor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
                      </svg>
                  </button>
                  <div className='w-[calc(100%-36px)] ml-3 mt-0.5'>
                    <div className='flex'>
                      <a href="#" className='truncate block w-[calc(100%-80px)] pr-2 text-font-14 text-light-green hover:text-lime-600 overflow-hidden'>
                        1 Dozen Double Chocolate Chip Protein Muffins
                      </a>
                      <span className='price block text-right ml-auto'>$15.99</span>
                    </div>
                  </div>
                  
                </li>
                <li className='flex items-start overflow-hidden py-1.5 border-b border-dashed border-gray-1 last:border-b-0'>
                  <button type="button" data-te-ripple-init data-te-ripple-color="dark" className="flex items-center justify-center w-6 h-6 min-w-6 rounded-full bg-gray-200 p-1 uppercase leading-normal text-basecolor transition duration-150 ease-in-out hover:bg-gray-300 focus:bg-gray-300  focus:outline-none focus:ring-0">
                      <svg className="w-[16px] h-[16px] fill-basecolor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
                      </svg>
                  </button>
                  <div className='w-[calc(100%-36px)] ml-3 mt-0.5'>
                    <div className='flex'>
                      <a href="#" className='truncate block w-[calc(100%-80px)] pr-2 text-font-14 text-light-green hover:text-lime-600 overflow-hidden'>
                        Mango Protein Smoothie - 3 Pack
                      </a>
                      <span className='price block text-right ml-auto'>$49.99</span>
                    </div>
                  </div>
                  
                </li>
                <li className='flex items-start overflow-hidden py-1.5 border-b border-dashed border-gray-1 last:border-b-0'>
                  <button type="button" data-te-ripple-init data-te-ripple-color="dark" className="flex items-center justify-center w-6 h-6 min-w-6 rounded-full bg-gray-200 p-1 uppercase leading-normal text-basecolor transition duration-150 ease-in-out hover:bg-gray-300 focus:bg-gray-300  focus:outline-none focus:ring-0">
                      <svg className="w-[16px] h-[16px] fill-basecolor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
                      </svg>
                  </button>
                  <div className='w-[calc(100%-36px)] ml-3 mt-0.5'>
                    <div className='flex'>
                      <a href="#" className='truncate block w-[calc(100%-80px)] pr-2 text-font-14 text-light-green hover:text-lime-600 overflow-hidden'>
                        4, 8 or 12 week Meal Programs
                      </a>
                      <span className='price block text-right ml-auto'>$49.99</span>
                    </div>
                    <div>
                      <p className='text-font-12'>Male 12 Week</p>
                      <p className='text-font-12'>3 meals per day + ALL IN - We will provide every meal and snack for you.  Save time and Money!!</p>
                      <div className='mt-2 rounded-custom border-2 border-solid border-light-green p-3 text-center text-font-14 bg-light-green/10'>
                        <p>You will pick up on Monday & Thursday, starting on the selected date above.</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='flex items-start overflow-hidden py-1.5 border-b border-dashed border-gray-1 last:border-b-0'>
                  <button type="button" data-te-ripple-init data-te-ripple-color="dark" className="flex items-center justify-center w-6 h-6 min-w-6 rounded-full bg-gray-200 p-1 uppercase leading-normal text-basecolor transition duration-150 ease-in-out hover:bg-gray-300 focus:bg-gray-300  focus:outline-none focus:ring-0">
                      <svg className="w-[16px] h-[16px] fill-basecolor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
                      </svg>
                  </button>
                  <div className='w-[calc(100%-36px)] ml-3 mt-0.5'>
                    <div className='flex'>
                      <a href="#" className='truncate block w-[calc(100%-80px)] pr-2 text-font-14 text-light-green hover:text-lime-600 overflow-hidden'>
                      Variety Pack (One Time Order)
                      </a>
                      <span className='price block text-right ml-auto'>$149.99</span>
                    </div>
                    <div>
                      <p className='text-font-12'>Male Portion</p>
                      <p className='text-font-12'>12 Meals + 6 protein muffins (Best Value) ($149.99)</p>
                      <div className='mt-2 rounded-custom border border-solid border-gray-1 p-3'>
                        <p className='font-bold text-font-14 mb-2'>Choose your meal preference.</p>
                        <div>
                          <div className="flex justify-between items-center mb-2 last:mb-0">
                            <span className="mr-2">Breakfast </span>
                            <div className="quantity-input flex max-w-[120px] md:max-w-[100px] rounded-custom border border-solid border-gray-1">
                                <button onClick={handleDecrement} data-te-ripple-init className="w-8 min-w-8 h-[30px] bg-transparent text-font-18 font-bold text-basecolor border-0 transition delay-100 flex items-center justify-center">
                                  <svg className="w-[10px] h-[10px] fill-basecolor/50" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
                                  </svg>
                                </button>
                                <input type="number" value={value} onChange={handleInputChange} className="h-[30px] w-auto min-w-0 text-center bg-transparent border-0 appearance-none text-font-14  placeholder:text-black outline-none shadow-none hover:outline-none hover:shadow-none [&::-webkit-inner-spin-button]:appearance-none"/>
                                <button onClick={handleIncrement} data-te-ripple-init className="w-8 min-w-8 h-[30px] bg-transparent text-font-18 font-bold text-basecolor border-0 transition delay-100 flex items-center justify-center">
                                  <svg className="w-[10px] h-[10px] fill-basecolor/50" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                                  </svg>
                                </button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mb-2 last:mb-0">
                            <span className="mr-2">Lunch    </span>
                            <div className="quantity-input flex max-w-[120px] md:max-w-[100px] rounded-custom border border-solid border-gray-1">
                                <button onClick={handleDecrement} data-te-ripple-init className="w-8 min-w-8 h-[30px] bg-transparent text-font-18 font-bold text-basecolor border-0 transition delay-100 flex items-center justify-center">
                                  <svg className="w-[10px] h-[10px] fill-basecolor/50" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
                                  </svg>
                                </button>
                                <input type="number" value={value} onChange={handleInputChange} className="h-[30px] w-auto min-w-0 text-center bg-transparent border-0 appearance-none text-font-14  placeholder:text-black outline-none shadow-none hover:outline-none hover:shadow-none [&::-webkit-inner-spin-button]:appearance-none"/>
                                <button onClick={handleIncrement} data-te-ripple-init className="w-8 min-w-8 h-[30px] bg-transparent text-font-18 font-bold text-basecolor border-0 transition delay-100 flex items-center justify-center">
                                  <svg className="w-[10px] h-[10px] fill-basecolor/50" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                                  </svg>
                                </button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mb-2 last:mb-0">
                            <span className="mr-2">Dinner   </span>
                            <div className="quantity-input flex max-w-[120px] md:max-w-[100px] rounded-custom border border-solid border-gray-1">
                                <button onClick={handleDecrement} data-te-ripple-init className="w-8 min-w-8 h-[30px] bg-transparent text-font-18 font-bold text-basecolor border-0 transition delay-100 flex items-center justify-center">
                                  <svg className="w-[10px] h-[10px] fill-basecolor/50" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
                                  </svg>
                                </button>
                                <input type="number" value={value} onChange={handleInputChange} className="h-[30px] w-auto min-w-0 text-center bg-transparent border-0 appearance-none text-font-14  placeholder:text-black outline-none shadow-none hover:outline-none hover:shadow-none [&::-webkit-inner-spin-button]:appearance-none"/>
                                <button onClick={handleIncrement} data-te-ripple-init className="w-8 min-w-8 h-[30px] bg-transparent text-font-18 font-bold text-basecolor border-0 transition delay-100 flex items-center justify-center">
                                  <svg className="w-[10px] h-[10px] fill-basecolor/50" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                                  </svg>
                                </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="my-2">
                        <textarea className="block min-h-[auto] w-full rounded-custom border border-solid border-gray-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none"
                          id="addNote" rows="2" placeholder="Add Note"></textarea>
                        <button type="button" data-te-ripple-init data-te-ripple-color="dark" className="btn btn-sm btn-green px-4 my-2 float-right">Save Note</button>  
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
          </div>
          {/* Added Cart Product sumary End */}

          {/* Coupon Code Start */}
          <div className="relative p-5 flex flex-wrap items-stretch border-t border-b border-solid border-gray-1">
            <input  type="text" className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-gray-1 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-font-16 font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary" placeholder="Enter Coupon Code" aria-label="Enter Coupon Code" aria-describedby="button-addon2" />
            <button className="z-[2] inline-block rounded-r bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-300 px-2.5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-basecolor transition duration-150 ease-in-out focus:z-[3] focus:bg-primary-600 focus:outline-none focus:ring-0"
            data-te-ripple-init  type="button"  id="button-addon2">
            <svg className="w-[16px] h-[16px] fill-basecolor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
              </svg>
            </button>
          </div>
          {/* Coupon Code End */}

          <div className="border-t border-b border-solid border-gray-1 p-5">
              <p><a href="#" className="text-light-green hover:text-lime-600 hover:underline">Login</a> to get it delivered</p>
          </div>

          {/* Total and Checkout Start*/}
          <div className="p-5">
            <table className="table w-full">
              <tbody>
                  <tr>
                      <td className="py-1.5">
                          <span className="text-basecolor">
                              Sub Total:
                          </span>
                      </td>
                      <td className="py-1.5 text-right text-black">
                          $4,604.94
                      </td>
                  </tr>

                  <tr>
                      <td className="py-1.5">
                          <span className="text-basecolor">
                              Sales Tax [7.75%]:
                          </span>
                      </td>
                      <td className="py-1.5 text-right text-black">
                          $356.88
                      </td>
                  </tr>
                  <tr>
                      <td className="py-1.5">
                          <span className="text-basecolor">
                              Order Total:
                          </span>
                      </td>
                      <td className="py-1.5 text-right text-black">
                          $4,961.82
                      </td>
                  </tr>
              </tbody>
            </table>
            <button type="button" data-te-ripple-init data-te-ripple-color="dark" className="btn btn-green w-full text-font-18 py-[13px] xl:text-font-24 font-semibold mt-3">Checkout</button>
          </div>
          

       </div>
      </div>
    </>
  );
}

export default Sidebar;




