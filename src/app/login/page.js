"use client";
import React, { useEffect } from "react";
import Image from "next/image"; 
import LogoWhite from "../../assets/images/logo-white.png"
// import Leaf from "../../assets/images/leaf.png"
import BgImg from "../../assets/images/bg.jpg"
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default function Home() {

  useEffect(() => {
      const init = async () => {
          const { Ripple,  initTE } = await import("tw-elements");
          initTE({ Ripple });
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
          <div className="max-w-96 lg:max-w-[1000px] mx-auto bg-white p-5 rounded-custom h-full w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="py-14 px-16 rounded-custom bg-light-green relative hidden lg:block">
                {/* <Image src={LogoWhite} alt="Sugar Logo" className="w-auto h-12 lg:h-[60px] mb-5" priority/> */}
                <h1 className="text-font-26 lg:text-font-32 text-white mb-2 leading-normal">Get Started Our Program</h1>
                <h2 className="text-white text-font-20 lg:text-font-22 font-medium">Eat Better, Feel Better, Live Better</h2>

                <ul className="list-image-none mt-8 pl-[30px] *:my-4 *:text-white *:text-font-18 *:relative *:after:content-[''] *:after:w-5 *:after:h-5 *:after:bg-no-repeat *:after:bg-center *:after:bg-check-icon *:after:absolute *:after:top-[3px] *:after:-left-[30px]">
                  <li>We believe in empowering everyone to reach their personal goals through a healthy lifestyle.</li>
                  <li>Our meals are carefully crafted.</li>
                  <li>We make it easy and enjoyable to prioritize your well-being.</li>
                  <li>Delivery starts at $10.</li>
                </ul>

            </div>
            <div className="p-2.5 lg:py-14 lg:px-16">
              <div className="mx-auto block max-w-sm rounded-lg bg-white ">
                <h2 className="text-font-26 lg:text-font-32 text-black mb-8 leading-normal">Sign In</h2>
                <form>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <label htmlFor="emailInput" className="text-font-16 mb-2 inline-block">Email address</label>
                        <input type="email" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                   
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <label htmlFor="passwordInput" className="text-font-16 mb-2 inline-block">Password</label>
                        <input type="password"  className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="passwordInput" placeholder="Password" />
                    </div>
                    
                    <div className="mb-6 flex items-center justify-between">
                        <div className="block min-h-[1.5rem] ps-[1.5rem]">
                            <input
                                className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-light-green checked:bg-light-green checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right"
                                type="checkbox"
                                value=""
                                id="exampleCheck2"
                            />
                            <label className="inline-block ps-[0.15rem] hover:cursor-pointer" htmlFor="exampleCheck2"> Remember me </label>
                        </div>
                       
                        <Link href="/forgot-password" className="text-light-green hover:underline focus:outline-none">Forgot password?</Link>
                    </div>
                   
                    <button type="submit" className="btn btn-md btn-green w-full" data-te-ripple-init data-te-ripple-color="light">Sign in</button>
                  
                    <p className="mt-6 text-center">Don&apos;t have an account?  <Link href="/register" className="text-light-green hover:underline focus:outline-none">Register Now</Link></p>
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
