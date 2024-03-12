"use client";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import TextureBg from "../../assets/images/texture-green-2.jpg";
import UserProfileImg from "../../assets/images/placeholder.jpg"
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {

  useEffect(() => {
      const init = async () => {
          const { Ripple, Collapse, Tab, Datepicker, Input, Select, initTE } = await import("tw-elements");
          initTE({ Ripple, Collapse, Tab, Datepicker, Input, Select });
      };
      init();

  }, []);

  const textureBg = {
    backgroundImage: `url(${TextureBg.src})`
  };  
  const userProfileImg = {
    backgroundImage: `url(${UserProfileImg.src})`
  };

  


  return (
    <>
    <Header />
    <div className="account-menubar bg-white border-b border-gray-3">
      <div className="container mx-auto">
        <nav className="flex-no-wrap relative flex w-full items-center justify-between ">
            <ul className="list-style-none flex flex-col ps-0 p-0 lg:flex-row *:mx-5">
              <li className="first:ml-0 last:mr-0">
                <Link className="active text-font-16 font-semibold text-black transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none py-4 inline-block border-b-2 border-transparent [&.active]:!border-light-green"
                  href="#">My Account</Link>
              </li>
              <li className="first:ml-0 last:mr-0">
                <Link className="text-font-16 font-semibold text-black transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none py-4 inline-block border-b-2 border-transparent [&.active]:!border-light-green"
                  href="#">Address Book</Link>
              </li>
              <li className="first:ml-0 last:mr-0">
                <Link className="text-font-16 font-semibold text-black transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none py-4 inline-block border-b-2 border-transparent [&.active]:!border-light-green"
                  href="#">Recent Orders</Link>
              </li>
              <li className="first:ml-0 last:mr-0">
                <Link className="text-font-16 font-semibold text-black transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none py-4 inline-block border-b-2 border-transparent [&.active]:!border-light-green"
                  href="#">Saved Card</Link>
              </li>
            </ul>
        </nav>
      </div>
    </div>
    
    <main className="bg-gray-5 py-7">
        <div className="account-page-heading mb-6">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <h1 className="h5">My Account</h1>
              <p className="font-semibold text-black ml-3">Welcome Chetan Bhati</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-5">
                {/* Card Start */}
                <div className="block bg-white shadow-2 rounded-custom">
                    {/* Card Header Start */}
                    <div className="border-b border-gray-1 px-6 py-4 flex justify-between">
                        <h5 className="text-font-18">Default Address</h5>
                        <Link href="#" className="group w-8 h-8 min-w-8 min-h-8 p-2 rounded-full bg-extra-light-green hover:bg-gray-4 transition duration-150 ease-in-out " data-te-ripple-init data-te-ripple-color="dark">
                          <svg xmlns="http://www.w3.org/2000/svg" className="fill-black transition duration-150 ease-in-out" viewBox="0 0 512 512"><path d="M495 59.6C516.9 81.47 516.9 116.9 495 138.8L182.3 451.6C170.9 462.9 156.9 471.2 141.5 475.8L20.52 511.4C14.9 513 8.827 511.5 4.687 507.3C.5466 503.2-1.002 497.1 .6506 491.5L36.23 370.5C40.76 355.1 49.09 341.1 60.44 329.7L373.2 16.97C395.1-4.897 430.5-4.897 452.4 16.97L495 59.6zM341 94.4L417.6 170.1L472.4 116.2C481.8 106.8 481.8 91.6 472.4 82.23L429.8 39.6C420.4 30.23 405.2 30.23 395.8 39.6L341 94.4zM318.4 117L83.07 352.4C75.5 359.9 69.95 369.3 66.93 379.6L39.63 472.4L132.4 445.1C142.7 442.1 152.1 436.5 159.6 428.9L394.1 193.6L318.4 117z"/></svg>
                        </Link>
                    </div>
                    {/* Card Header End */}
                    {/* Card Body Start */}
                    <div className="p-6">
                      <p className="text-font-16 lg:text-font-18 text-black">Clark Residence Hall (Poly), New York, NY, New York, 654123 - USA</p>
                    </div>
                    {/* Card Body End */}
                </div>
                {/* Card End */}

                {/* Card Start */}
                <div className="block bg-white shadow-2 rounded-custom">
                    {/* Card Header Start */}
                    <div className="border-b border-gray-1 px-6 py-4 flex justify-between">
                        <h5 className="text-font-18">Default Location</h5>
                        <Link href="#" className="btn btn-sm btn-green px-4" data-te-ripple-init data-te-ripple-color="dark">
                          Change Location
                        </Link>
                    </div>
                    {/* Card Header End */}
                    {/* Card Body Start */}
                    <div className="p-6">
                      <p className="text-font-16 lg:text-font-18 text-black"><strong>SLC - Sugarhouse :</strong> 2120 S 1300 E Salt Lake City Utah 84106</p>
                    </div>
                    {/* Card Body End */}
                </div>
                {/* Card End */}
            </div>
            <div className="col-span-12 md:col-span-4">
                {/* Card Start */}
                <div className="block bg-gray-4 shadow-2 rounded-custom bg-cover bg-no-repeat" style={textureBg}>
                    {/* Card Body Start */}
                    <div className="p-6">
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-white w-10 h-10 mb-4' viewBox="0 0 576 512"><path d="M80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"/></svg>
                        <p className="text-font-16 lg:text-font-18 text-white">You have 23 items: $2,446.68</p>
                        <Link href="#" className="btn btn-green btn-md mt-4">Checkout Now</Link>
                      </div>
                    </div>
                    {/* Card Body End */}
                </div>
                {/* Card End */}
            </div>
          </div>
          {/* Profile Detail Start */}
          <div className="profile-detail mt-5">
              {/* Card Start */}
              <div className="block bg-white shadow-2 rounded-custom">
                    {/* Card Header Start */}
                    <div className="border-b border-gray-1 px-6 py-4 flex justify-between">
                        <h5 className="text-font-18">Profile Details</h5>
                    </div>
                    {/* Card Header End */}
                    {/* Card Body Start */}
                    <div className="p-6 flex">
                        <div className="w-64">
                            <div className="user-profile-img w-32 h-32 rounded-custom bg-none bg-cover bg-center border-4 border-white shadow-4" style={userProfileImg}></div>
                        </div>
                        <div className="flex-1">
                            <ul className="mb-5 flex list-none flex-row flex-wrap border-b border-gray-1 ps-0" role="tablist" data-te-nav-ref>
                              <li role="presentation">
                                <a href="#tabs-tab1" className="block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-font-16 font-medium leading-tight text-black hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-light-green data-[te-nav-active]:text-light-green" data-te-toggle="pill" data-te-target="#tabs-tab1" data-te-nav-active role="tab" aria-controls="tabs-tab1" aria-selected="true">Your Detail</a>
                              </li>
                              <li role="presentation">
                                <a href="#tabs-tab2" className="block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-font-16 font-medium leading-tight text-black hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-light-green data-[te-nav-active]:text-light-green" data-te-toggle="pill" data-te-target="#tabs-tab2" role="tab" aria-controls="tabs-tab2" aria-selected="false">Family Detail</a>
                              </li>
                            </ul>

                            <div className="mb-6">
                              <div className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="tabs-tab1"
                                role="tabpanel" aria-labelledby="tabs-1-tab" data-te-tab-active>
                                    <form>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className="relative">
                                            <input type="text" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="first-name" placeholder="First Name" value="Chetan" />
                                        </div>

                                        <div className="relative">
                                          <input type="text" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="last-name" placeholder="Last Name" value="Bhati"/>
                                        </div>
                                      </div>
                                      <div className="grid grid-cols-1 gap-4 mb-4">
                                        <div className="relative">
                                          <input type="email" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="email" placeholder="Email Address" value="abc123@test.com"/>
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className="relative">
                                            <input type="phone" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="telephone" placeholder="Phone" value="(123)-654-1236"/>
                                        </div>

                                        <div className="relative">
                                            <select data-te-select-init data-te-select-size="lg" className="border border-solid border-gray-1">
                                              <option>Select Gender</option>
                                              <option value="Male" defaultValue>Male</option>
                                              <option value="Female">Female</option>
                                            </select>
                                        </div>
                                      </div>

                                      

                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className="relative mb-3" data-te-datepicker-init data-te-input-wrapper-init>
                                          <input type="text" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" placeholder="Select a DOB (DD/MM/YYYY)" value="05/05/1992"/>
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-3 gap-4 mb-4">
                                        <div className="relative">
                                            <input type="number" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="height" placeholder="Height (Ft.)" value="5"/>
                                        </div>
                                        <div className="relative">
                                            <input type="number" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="height_inch" placeholder="Height (In.)" value="6"/>
                                        </div>

                                        <div className="relative">
                                            <input type="number" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="weight" placeholder="Weight (lbs)" value="45"/>
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className="relative">
                                          <select data-te-select-init multiple data-te-select-placeholder="Select Allergies" data-te-select-size="lg">
                                            <option value="No Allergies" selected>No Allergies</option>
                                            <option value="Bananas">Bananas</option>
                                            <option value="Gluten">Gluten</option>
                                            <option value="Peanut">Peanut</option>
                                          </select>
                                        </div>

                                        <div className="relative">
                                          <select data-te-select-init data-te-select-placeholder="How did you hear about Fed up Kitchen?" data-te-select-size="lg">
                                            <option>Select Reference</option>
                                            <option value="Radio">Radio</option>
                                            <option value="Google">Google</option>
                                            <option value="Family" defaultValue>Family</option>
                                            <option value="Friends">Friends</option>
                                          </select>
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-1 gap-4 mb-4">
                                        <div className="relative">
                                          <select data-te-select-init multiple data-te-select-placeholder="How do you want us to contact?" data-te-select-size="lg">
                                            <option>Select Contact</option>
                                            <option value="Text">Text</option>
                                            <option value="Email" defaultValue>Email</option>
                                          </select>
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-1 gap-4 mb-4">
                                          <div className="block min-h-[1.5rem] ps-[1.5rem]">
                                              <input
                                                  className="relative float-left -ms-[1.5rem] me-[6px] mt-[3px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-light-green checked:bg-light-green checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right"
                                                  type="checkbox"
                                                  name="newsletter"
                                                  value="1"
                                                  id="newsletter"
                                              />
                                              <label className="inline-block ps-[0.15rem] hover:cursor-pointer" htmlFor="newsletter"> Keep me up-to-date with offers by email.</label>
                                          </div>
                                      </div>

                                      <div className="mt-6">
                                        <button type="submit" className="btn btn-md btn-green" data-te-ripple-init data-te-ripple-color="light">Save Detail</button>
                                      </div>  
                                  </form>
                              </div>
                              <div className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="tabs-tab2" role="tabpanel" aria-labelledby="tabs-2-tab">
                                  {/* Card Start */}
                                  <div className="block bg-extra-light-green shadow-2 rounded-custom">
                                    {/* Card Header Start */}
                                    <div className="border-b border-gray-1 px-6 py-4 flex justify-between">
                                        <h5 className="text-font-18">Add Family Members</h5>
                                    </div>
                                    {/* Card Header End */}
                                    {/* Card Body Start */}
                                    <div className="p-6">
                                      <form className="max-w-[500px]">
                                        <label htmlFor="search-family-member" className="inline-block mb-2">Search Family Member</label>
                                        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                                            <input type="text" id="search-family-member"
                                              className="relative m-0 -me-px block flex-auto rounded-s-custom border border-solid border-light-green bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-black focus:z-[3] focus:border-green-600 focus:shadow-inset focus:outline-none motion-reduce:transition-none"
                                              placeholder="Search by Email"
                                              aria-label="Search by Email"
                                              aria-describedby="button-addon2" />
                                            <button
                                              className="z-[2] btn btn-green inline-block rounded-e-custom rounded-s-none px-6 py-2 "
                                              data-te-ripple-init
                                              type="button"
                                              id="button-addon2">
                                              Search
                                            </button>
                                          </div>
                                      </form>
                                    </div>
                                    {/* Card Body End */}
                                  </div>
                                  <div className="overflow-x-auto bg-white mt-5">
                                    <table className="min-w-full text-left text-sm whitespace-nowrap">
                                      <thead className="uppercase tracking-wider border-b-2 border-gray-1">
                                        <tr>
                                          <th scope="col" className="px-6 py-4 first:pl-0 last:pr-0">
                                            Name
                                          </th>
                                          <th scope="col" className="px-6 py-4 first:pl-0 last:pr-0">
                                            Email
                                          </th>
                                          <th scope="col" className="px-6 py-4 first:pl-0 last:pr-0">
                                            Phone
                                          </th>
                                          <th scope="col" className="px-6 py-4 first:pl-0 last:pr-0">
                                            Action
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="border-b border-gray-1">
                                          <td className="px-6 py-4 first:pl-0 last:pr-0">xyx abcd</td>
                                          <td className="px-6 py-4 first:pl-0 last:pr-0">fasfs@sfs.sdf</td>
                                          <td className="px-6 py-4 first:pl-0 last:pr-0">(989)-898-9898</td>
                                          <td className="px-6 py-4 first:pl-0 last:pr-0">
                                            <div className="flex gap-3">
                                              {/* Edit Button Start*/}
                                              <Link href="#" className="group block w-8 h-8 min-w-8 min-h-8 p-2 rounded-full bg-light-green/15 hover:bg-light-green/30 transition duration-150 ease-in-out " >
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-black transition duration-150 ease-in-out" viewBox="0 0 512 512"><path d="M495 59.6C516.9 81.47 516.9 116.9 495 138.8L182.3 451.6C170.9 462.9 156.9 471.2 141.5 475.8L20.52 511.4C14.9 513 8.827 511.5 4.687 507.3C.5466 503.2-1.002 497.1 .6506 491.5L36.23 370.5C40.76 355.1 49.09 341.1 60.44 329.7L373.2 16.97C395.1-4.897 430.5-4.897 452.4 16.97L495 59.6zM341 94.4L417.6 170.1L472.4 116.2C481.8 106.8 481.8 91.6 472.4 82.23L429.8 39.6C420.4 30.23 405.2 30.23 395.8 39.6L341 94.4zM318.4 117L83.07 352.4C75.5 359.9 69.95 369.3 66.93 379.6L39.63 472.4L132.4 445.1C142.7 442.1 152.1 436.5 159.6 428.9L394.1 193.6L318.4 117z"/></svg>
                                              </Link>
                                              {/* Edit Button End*/}

                                              {/* Remove Button Start*/}
                                              <Link href="#" className="group block w-8 h-8 min-w-8 min-h-8 p-2 rounded-full bg-red-100 hover:bg-red-200 transition duration-150 ease-in-out " >
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-black transition duration-150 ease-in-out" viewBox="0 0 512 512"><path d="M495 59.6C516.9 81.47 516.9 116.9 495 138.8L182.3 451.6C170.9 462.9 156.9 471.2 141.5 475.8L20.52 511.4C14.9 513 8.827 511.5 4.687 507.3C.5466 503.2-1.002 497.1 .6506 491.5L36.23 370.5C40.76 355.1 49.09 341.1 60.44 329.7L373.2 16.97C395.1-4.897 430.5-4.897 452.4 16.97L495 59.6zM341 94.4L417.6 170.1L472.4 116.2C481.8 106.8 481.8 91.6 472.4 82.23L429.8 39.6C420.4 30.23 405.2 30.23 395.8 39.6L341 94.4zM318.4 117L83.07 352.4C75.5 359.9 69.95 369.3 66.93 379.6L39.63 472.4L132.4 445.1C142.7 442.1 152.1 436.5 159.6 428.9L394.1 193.6L318.4 117z"/></svg>
                                              </Link>
                                              {/* Remove Button End*/}
                                            </div>  
                                            
                                          </td>
                                        </tr>
                                        <tr className="border-b border-gray-1">
                                          <td className="px-6 py-4 first:pl-0 last:pr-0">xyx abcd</td>
                                          <td className="px-6 py-4 first:pl-0 last:pr-0">fasfs@sfs.sdf</td>
                                          <td className="px-6 py-4 first:pl-0 last:pr-0">(989)-898-9898</td>
                                          <td className="px-6 py-4 first:pl-0 last:pr-0">-</td>
                                        </tr>
                                        <tr className="border-b border-gray-1">
                                          <td className="px-6 py-4 first:pl-0 last:pr-0">xyx abcd</td>
                                          <td className="px-6 py-4 first:pl-0 last:pr-0">fasfs@sfs.sdf</td>
                                          <td className="px-6 py-4 first:pl-0 last:pr-0">(989)-898-9898</td>
                                          <td className="px-6 py-4 first:pl-0 last:pr-0">-</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                              </div>
                            </div>
                        </div>
                    </div>
                    {/* Card Body End */}
                </div>
                {/* Card End */}
          </div>
          {/* Profile Detail End */}
        </div>
        
    </main>
    <Footer />
    </>
  );
}
