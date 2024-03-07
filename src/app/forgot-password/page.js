"use client";
import React, { useEffect } from "react";
import Image from "next/image"; 
import ForgotpwdImg from "../../assets/images/forgot-password.svg"
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
            <div className="py-14 px-10 rounded-custom bg-white relative items-center justify-center hidden lg:flex">
                <Image src={ForgotpwdImg} alt="Forgot Password" className="w-full h-auto"  priority/>
            </div>
            <div className="p-2.5 lg:py-14 lg:px-16">
              <div className="mx-auto block max-w-sm rounded-lg bg-white ">
                <h2 className="text-font-26 lg:text-font-32 text-black mb-2 leading-normal">Forgot Password?</h2>
                <p className="text-basecolor">Email address you use to log in to your account We&apos;ll send you an email with a new password.</p>
                <hr class="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-gray-500 via-gray-400 to-transparent opacity-25" />
                <form className="mt-5">
                    
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <label htmlFor="emailInput" className="text-font-16 mb-2 inline-block">Email address</label>
                        <input type="email" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none"
                            id="emailInput" aria-describedby="emailHelp" placeholder="Enter Email address" />
                    </div>
                    <button type="submit" className="btn btn-md btn-green w-full" data-te-ripple-init data-te-ripple-color="light">Reset Password</button>
                  
                    <p className="mt-6 text-center">Remember password? <Link href="/login" className="text-primary hover:underline focus:outline-none">Login</Link></p>
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
