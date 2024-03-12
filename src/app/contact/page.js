/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import contactBgImg from "../../assets/images/bg.jpg"
import PickupBG from "../../assets/images/green-bg-contact-puckup.jpg"
import PickupMan from "../../assets/images/pickup-man.png"
import pickupHrs from "../../assets/images/pickup-hrs.svg"
import pickupDelivery from "../../assets/images/pickup-delivery.svg"
import Link from "next/link";
import Image from "next/image";

export default function Home() {

  useEffect(() => {
      const init = async () => {
          const { Ripple, Collapse, initTE } = await import("tw-elements");
          initTE({ Ripple, Collapse });
      };
      init();

  }, []);

  const contactFullBg = {
    backgroundImage: `url(${contactBgImg.src})`
  };
  const pickupBG = {
    backgroundImage: `url(${PickupBG.src})`
  };

  


  return (
    <>
    <Header />
    <main className="bg-gray-5">
      {/* Inner Page Header End */}
      <div className="container mx-auto py-10 md:py-16 lg:py-28">
        <div className="sm:flex items-center">
            <div className="w-full lg:w-1/2 sm:border-r-2 border-light-green sm:pr-5 md:pr-8">
                <p className="text-light-green uppercase mb-1 font-semibold ">Contact Us</p>
                <h1>Have a question <br /> or comment for us?</h1>  
                
            </div>

            <div className="w-full lg:w-1/2 sm:pl-5 md:pl-8 mt-3 sm:mt-0">
              <h4 className="font-normal"> We'd love to hear from you! Simply fill out our contact form and we'll be in touch shortly.</h4>  
            </div>
        </div>
      </div>
      <Image src={contactBgImg} alt="Contact Image" width="100%" priority className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover object-center overflow-hidden hidden lg:block"/>

      <div className="contact-detail-section pb-10 md:pb-16 lg:pb-[85px]">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 xl:gap-32 2xl:gap-40">
              <div className="lg:mt-[61px] xl:mt-[134px]">
                  <div className="contact-info-box">
                    <div className="shadow-2 flex bg-white p-5 rounded-custom mb-5 last:mb-0">
                        <div className="bg-extra-light-green w-14 min-w-14 h-14 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-light-green" viewBox="0 0 384 512"><path d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 240C218.5 240 240 218.5 240 192C240 165.5 218.5 144 192 144C165.5 144 144 165.5 144 192C144 218.5 165.5 240 192 240zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 32C103.6 32 32 103.6 32 192C32 207.6 37.43 229 48.56 255.4C59.47 281.3 74.8 309.4 92.14 337.5C126.2 392.8 166.6 445.7 192 477.6C217.4 445.7 257.8 392.8 291.9 337.5C309.2 309.4 324.5 281.3 335.4 255.4C346.6 229 352 207.6 352 192C352 103.6 280.4 32 192 32z"/></svg>
                        </div>
                        <div className="flex-1 ml-5">
                            <h5>Address</h5>
                            <p>2120 S 1300 E Suite 300 Salt Lake City Utah 84106</p>
                        </div>
                    </div>
                    <div className="shadow-2 flex bg-white p-5 rounded-custom mb-5 last:mb-0">
                        <div className="bg-extra-light-green w-14 min-w-14 h-14 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-light-green" viewBox="0 0 512 512"><path d="M484.6 330.6C484.6 330.6 484.6 330.6 484.6 330.6l-101.8-43.66c-18.5-7.688-40.2-2.375-52.75 13.08l-33.14 40.47C244.2 311.8 200.3 267.9 171.6 215.2l40.52-33.19c15.67-12.92 20.83-34.16 12.84-52.84L181.4 27.37C172.7 7.279 150.8-3.737 129.6 1.154L35.17 23.06C14.47 27.78 0 45.9 0 67.12C0 312.4 199.6 512 444.9 512c21.23 0 39.41-14.44 44.17-35.13l21.8-94.47C515.7 361.1 504.7 339.3 484.6 330.6zM457.9 469.7c-1.375 5.969-6.844 10.31-12.98 10.31c-227.7 0-412.9-185.2-412.9-412.9c0-6.188 4.234-11.48 10.34-12.88l94.41-21.91c1-.2344 2-.3438 2.984-.3438c5.234 0 10.11 3.094 12.25 8.031l43.58 101.7C197.9 147.2 196.4 153.5 191.8 157.3L141.3 198.7C135.6 203.4 133.8 211.4 137.1 218.1c33.38 67.81 89.11 123.5 156.9 156.9c6.641 3.313 14.73 1.531 19.44-4.219l41.39-50.5c3.703-4.563 10.16-6.063 15.5-3.844l101.6 43.56c5.906 2.563 9.156 8.969 7.719 15.22L457.9 469.7z"/></svg>
                        </div>
                        <div className="flex-1 ml-5">
                            <h5>Mobile</h5>
                            <p><Link href="tel:801-641-3746">801-641-3746</Link></p>
                        </div>
                    </div>
                    <div className="shadow-2 flex bg-white p-5 rounded-custom mb-5 last:mb-0">
                        <div className="bg-extra-light-green w-14 min-w-14 h-14 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-light-green" viewBox="0 0 512 512"><path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM32 128V167.9L227.6 311.3C244.5 323.7 267.5 323.7 284.4 311.3L480 167.9V128C480 110.3 465.7 96 448 96H63.1C46.33 96 31.1 110.3 31.1 128H32zM32 207.6V384C32 401.7 46.33 416 64 416H448C465.7 416 480 401.7 480 384V207.6L303.3 337.1C275.1 357.8 236.9 357.8 208.7 337.1L32 207.6z"/></svg>
                        </div>
                        <div className="flex-1 ml-5">
                            <h5>Email</h5>
                            <p><Link href="mailto:slc@fedupkitchen.com">slc@fedupkitchen.com</Link></p>
                        </div>
                    </div>
                  </div>
              </div>
              <div className="relative lg:-mt-[100px]">
                  <div className="bg-white p-5 xl:p-14 rounded-custom w-full shadow-4">
                    <h2 className="text-font-26 lg:text-font-32 text-black mb-2 leading-normal">Get in Touch</h2>
                    <form className="mt-7">   
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <input type="email" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="full_name" aria-describedby="full_name" placeholder="Full Name" />
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <input type="email" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="email" aria-describedby="email" placeholder="Email address" />
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <input type="email" className="block h-12 w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="telephone" aria-describedby="telephone" placeholder="Phone" />
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <textarea className="block w-full rounded-custom border border-solid border-gray-1 bg-white px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-gray-500 focus:placeholder:opacity-100  motion-reduce:transition-none" id="comment" aria-describedby="comment" placeholder="Message"rows="3" ></textarea>
                        </div>
                        <button type="submit" className="btn btn-md btn-green w-full" data-te-ripple-init data-te-ripple-color="light">Submit</button>
                    </form>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="pickup-section grid grid-cols-1 lg:grid-cols-2 bg-white px-[15px] py-10 md:py-16 lg:px-0 lg:py-0">
        <div className="pickup-image bg-no-repeat bg-center bg-cover max-lg:!bg-none flex" style={pickupBG}>
          <div className="pt-6 lg:w-1/3 xl:w-7/12 hidden lg:flex items-end">
              <Image src={PickupMan} alt="Pickup" priority className="" />
          </div>
          <div className="lg:w-2/3 xl:w-5/12 p-0 lg:pr-7 xl:pr-16 2xl:pr-24 xl:pl-4 flex flex-col justify-center text-center lg:text-right">
            <h2 className=" text-black lg:text-white mb-4">Pickup or <br className="max-lg:hidden"/> <span className="text-light-green">Delivery</span></h2>
            <p className="text-font-16 md:text-font-18 xl:text-font-20 text-black lg:text-white">You are assigned two pick-up days a week. Stop by your chosen location between 04:30 pm - 06:30 pm on your assigned days and get your delicious meals or have them delivered.</p>
          </div>
        </div>
        <div className="pickup-block bg-white lg:flex items-center justify-center pt-8 lg:p-5 xl:p-16 2xl:p-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              <div className="shadow-2 bg-extra-light-green p-5 lg:p-8 xl:p-10 rounded-custom">
                  <Image src={pickupHrs} priority alt="pickup hours" className="w-24 h-auto mb-4"/>
                  <h5 className="mb-4">PICK UP HOURS</h5>
                  <p className="text-black"><strong>Mon & Thu</strong></p>
                  <p className="text-black">04:20 am - 04:25 am</p>
                  <hr className="my-4 border-light-green"/>
                  <p className="text-black"><strong>Tue & Fri</strong></p>
                  <p className="text-black">04:20 am - 04:25 am</p>
              </div>
              <div className="shadow-2 bg-gray-4 p-5 lg:p-8 xl:p-10 rounded-custom">
                    <Image src={pickupDelivery} priority alt="pickup Delivery" className="w-24 h-auto mb-4"/>
                    <h5 className="mb-4">DELIVERY HOURS</h5>
                    <p className="text-black"><strong>Mon & Thu</strong></p>
                    <p className="text-black">02:30 pm - 04:30 pm</p>
                    <hr className="my-4 border-light-green"/>
                    <p className="text-black"><strong>Tue & Fri</strong></p>
                    <p className="text-black">04:30 pm - 06:30 pm</p>
              </div>
            </div>
        </div>
      </div>
      
    </main>
    <Footer />
    </>
  );
}
