"use client";
import React, { useEffect } from "react";
import BgImg from "../../assets/images/bg.jpg"
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default function Home() {

  useEffect(() => {
      const init = async () => {
          const { Ripple, Datepicker, Input, Select,  initTE } = await import("tw-elements");
          initTE({ Ripple, Datepicker, Input, Select });
      };
      init();

  }, []);



  const fullBgImg = {
    backgroundImage: `url(${BgImg.src})`
  };

  return (
    <>
    <Header />
    <main className="bg-gray-3">
      <div className="login-page flex items-center justify-center bg-cover min-h-[calc(100vh-104px)] lg:min-h-[calc(100vh-197px)] bg-center relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/50" style={fullBgImg}>
        <div className="container container-xl mx-auto z-[1] relative flex items-center justify-center h-full py-12">
          <div className=" mx-auto bg-white p-5 rounded-custom h-full w-full grid grid-cols-12 gap-4">
            <div className="py-14 lg:px-8 xl:px-14 rounded-custom bg-light-green relative hidden lg:block col-span-12 lg:col-span-4">
                {/* <Image src={LogoWhite} alt="Sugar Logo" className="w-auto h-12 lg:h-[60px] mb-5" priority/> */}
                <h1 className="text-font-26 lg:text-font-32 text-white mb-2 leading-normal">Get Started Our Program</h1>
                <h2 className="text-white text-font-20 font-medium">Eat Better, Feel Better, Live Better</h2>

                <ul className="list-image-none mt-8 pl-[30px] *:my-4 *:text-white *:text-font-18 *:relative *:after:content-[''] *:after:w-5 *:after:h-5 *:after:bg-no-repeat *:after:bg-center *:after:bg-check-icon *:after:absolute *:after:top-[3px] *:after:-left-[30px]">
                  <li>We believe in empowering everyone to reach their personal goals through a healthy lifestyle.</li>
                  <li>Our meals are carefully crafted.</li>
                  <li>We make it easy and enjoyable to prioritize your well-being.</li>
                  <li>We use seasonally available ORGANIC & NATURAL ingredients. </li>
                  <li>We designs a program specifically for you ranging from 4/8/12 weeks</li>
                  <li>Delivery starts at $10.</li>
                </ul>

            </div>
            <div className="p-2.5 lg:py-14 lg:px-8 xl:px-12 col-span-12 lg:col-span-8">
              <div className="mx-auto block rounded-lg bg-white ">
                <h2 className="text-font-26 lg:text-font-32 text-black mb-8 leading-normal">Sign up</h2>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="relative">
                          <input type="text" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="first-name" placeholder="First Name" />
                      </div>

                      <div className="relative">
                        <input type="text" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="last-name" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                      <div className="relative">
                        <input type="email" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="email" placeholder="Email Address" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="relative">
                          <input type="phone" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="telephone" placeholder="Phone" />
                      </div>

                      <div className="relative">
                          <select data-te-select-init data-te-select-size="lg" className="border border-solid border-gray-1">
                            <option defaultValue>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mb-4">
                      <div className="relative">
                          <input type="text" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="address" placeholder="Enter Address" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="relative">
                          <input type="text" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="city" placeholder="City" />
                      </div>

                      <div className="relative">
                          <select data-te-select-init data-te-select-size="lg" className="border border-solid border-gray-1">
                            <option defaultValue>Select State</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Alabama">Alabama</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Colorado">Colorado</option>
                          </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="relative">
                          <input type="text" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="postcode" placeholder="Zipcode" />
                      </div>


                      <div className="relative mb-3" data-te-datepicker-init data-te-input-wrapper-init>
                        <input type="text" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" placeholder="Select a DOB (DD/MM/YYYY)" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="relative">
                          <input type="number" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="height" placeholder="Height (Ft.)" />
                      </div>
                      <div className="relative">
                          <input type="number" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="height_inch" placeholder="Height (In.)" />
                      </div>

                      <div className="relative">
                          <input type="number" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="weight" placeholder="Weight (lbs)" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="relative">
                        <select data-te-select-init multiple data-te-select-placeholder="Select Allergies" data-te-select-size="lg">
                          <option value="No Allergies">No Allergies</option>
                          <option value="Bananas">Bananas</option>
                          <option value="Gluten">Gluten</option>
                          <option value="Peanut">Peanut</option>
                        </select>
                      </div>

                      <div className="relative">
                        <select data-te-select-init data-te-select-placeholder="How did you hear about Fed up Kitchen?" data-te-select-size="lg">
                          <option defaultValue>Select Reference</option>
                          <option value="Radio">Radio</option>
                          <option value="Google">Google</option>
                          <option value="Family">Family</option>
                          <option value="Friends">Friends</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mb-4">
                      <div className="relative">
                        <select data-te-select-init multiple data-te-select-placeholder="How do you want us to contact?" data-te-select-size="lg">
                          <option defaultValue>Select Contact</option>
                          <option value="Text">Text</option>
                          <option value="Email">Email</option>
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
                            <label className="inline-block ps-[0.15rem] hover:cursor-pointer" htmlFor="newsletter"> Keep me up-to-date with offers by email and sms. By providing your phone number, you agree to receive text messages from Fed Up Kitchen. Message and data rates may apply. </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <div className="block min-h-[1.5rem] ps-[1.5rem]">
                            <input
                                className="relative float-left -ms-[1.5rem] me-[6px] mt-[3px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-light-green checked:bg-light-green checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right"
                                type="checkbox"
                                name="agree-terms"
                                value="1"
                                id="agree-terms"
                            />
                            <label className="inline-block ps-[0.15rem] hover:cursor-pointer" htmlFor="agree-terms"> By clicking Sign up, you agree to the <Link href="#!" className="text-light-green hover:underline focus:outline-none">Terms and Conditions</Link> set out by this site, including our Cookie Use. </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mb-4 mt-6">
                      <button type="submit" className="btn btn-md btn-green w-full" data-te-ripple-init data-te-ripple-color="light">Sign Up</button>
                    </div>  
                  
                    <p className="mt-6 text-center">Already have an account?  <Link href="/login" className="text-light-green hover:underline focus:outline-none">Log In</Link></p>
                </form>
            </div>

            </div>
          </div>
        </div>
      </div>
      
    </main>
    <Footer />
    </>
  );
}
