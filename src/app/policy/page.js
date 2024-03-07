"use client";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BgImg from "../../assets/images/light-green-ingredients-bg.jpg"
import Link from "next/link";

export default function Home() {

  useEffect(() => {
      const init = async () => {
          const { Ripple, Collapse, initTE } = await import("tw-elements");
          initTE({ Ripple, Collapse });
      };
      init();

  }, []);

  const fullBgImg = {
    backgroundImage: `url(${BgImg.src})`
  };


  return (
    <>
    <Header />
    <main className="bg-gray-3 pb-7">
      {/* Inner Page Header Start */}
      <div className="inner-page-section py-10 md:py-16 lg:py-28 bg-cover bg-center relative " style={fullBgImg}>
        <div className="container mx-auto relative z-[1]">
          <h1 className="text-font-28 lg:text-font-38 xl:text-font-48 text-black leading-normal">Policy</h1>
        </div> 
      </div>
      {/* Inner Page Header End */}
      <div className="py-7 lg:py-12 xl:py-20">
        <div className="container mx-auto">
            <div className="default-content">
              <h2>Return policy</h2> 
              <p>There are no refunds after your first pick up. You will receive a credit if you choose to cancel your program at anytime.</p>
            </div>
        </div>
      </div>
      
    </main>
    <Footer />
    </>
  );
}
