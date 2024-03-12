"use client";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import BgImg from "../../assets/images/light-green-ingredients-bg.jpg"
import Footer from "@/components/Footer";

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
    <main className="bg-gray-5 pb-7">
      {/* Inner Page Header Start */}
      <div className="inner-page-section py-10 md:py-16 lg:py-28 bg-cover bg-center relative" style={fullBgImg}>
        <div className="container mx-auto relative z-[1]">
          <h1 className="text-font-26 lg:text-font-32 xl:text-font-38 text-black leading-normal">Frequently Asked Questions</h1>
        </div> 
      </div>
      {/* Inner Page Header End */}

      <div className="py-7 lg:py-12 xl:py-20">
        <div className="container mx-auto">
          <div id="faqAccordionExample">
            {/* Faq Item */}
            <div className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 bg-transparent">
              <h2 className="mb-0" id="faq-heading1">
                <button className="group relative flex w-full items-center rounded-none border-0 bg-transparent text-font-18 lg:text-font-20 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:shadow-border-b "
                  type="button" data-te-collapse-init data-te-target="#faq-collapse1" aria-expanded="false" aria-controls="faq-collapse1">
                  What are macros?
                  <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[te-collapse-collapsed]:me-0 group-data-[te-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </h2>
              <div id="faq-collapse1" className="!visible [&:not([data-te-collapse-show])]:bg-white [&:not([data-te-collapsing-show])]:bg-white" data-te-collapse-item data-te-collapse-show aria-labelledby="faq-heading1" data-te-parent="#faqAccordionExample">
                <div className="px-5 pb-4">
                  What’s a macronutrient? There are three categories of nutrients consumed that provide you with most of your energy: protein, carbohydrates and fats. When you’re counting your macros, you’re counting the grams of proteins, carbs and fats that you’re consuming.
                </div>
              </div>
            </div>

            {/* Faq Item */}
            <div className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 bg-transparent">
              <h2 className="mb-0" id="faq-heading2">
                <button className="group relative flex w-full items-center rounded-none border-0 bg-transparent text-font-18 lg:text-font-20 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:shadow-border-b "
                  type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#faq-collapse2" aria-expanded="false" aria-controls="faq-collapse2">
                   Is your program gluten free?
                  <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[te-collapse-collapsed]:me-0 group-data-[te-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </h2>
              <div id="faq-collapse2" className="!visible hidden [&:not([data-te-collapse-show])]:bg-white [&:not([data-te-collapsing-show])]:bg-white" data-te-collapse-item aria-labelledby="faq-heading2" data-te-parent="#faqAccordionExample">
                <div className="px-5 pb-4">
                  Every meal is gluten free besides the wraps, we offer gluten free wraps if needed.
                </div>
              </div>
            </div>

            {/* Faq Item */}
            <div className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 bg-transparent">
              <h2 className="mb-0" id="faq-heading3">
                <button className="group relative flex w-full items-center rounded-none border-0 bg-transparent text-font-18 lg:text-font-20 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:shadow-border-b " type="button"
                  data-te-collapse-init data-te-collapse-collapsed data-te-target="#faq-collapse3" aria-expanded="false" aria-controls="faq-collapse3">
                  Do i select my meals?
                  <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[te-collapse-collapsed]:me-0 group-data-[te-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </h2>
              <div id="faq-collapse3" className="!visible hidden [&:not([data-te-collapse-show])]:bg-white [&:not([data-te-collapsing-show])]:bg-white" data-te-collapse-item aria-labelledby="faq-heading3" data-te-parent="#faqAccordionExample">
                <div className="px-5 pb-4">
                  We have a wide variety of meals on our menus that we rotate every month, you will receive a variety of the meals on the weekly menu. Just tell us your dislikes and/or food allergies and we will make sure those are not included.
                </div>
              </div>
            </div>

            {/* Faq Item */}
            <div className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 bg-transparent">
              <h2 className="mb-0" id="faq-heading4">
                <button className="group relative flex w-full items-center rounded-none border-0 bg-transparent text-font-18 lg:text-font-20 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:shadow-border-b " type="button"
                  data-te-collapse-init data-te-collapse-collapsed data-te-target="#faq-collapse4" aria-expanded="false" aria-controls="faq-collapse4">
                  Can i be on the program while pregnant?
                  <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[te-collapse-collapsed]:me-0 group-data-[te-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </h2>
              <div id="faq-collapse4" className="!visible hidden [&:not([data-te-collapse-show])]:bg-white [&:not([data-te-collapsing-show])]:bg-white" data-te-collapse-item aria-labelledby="faq-heading4" data-te-parent="#faqAccordionExample">
                <div className="px-5 pb-4">
                  Of course! It’s extra important that your baby is getting great nutrition as well!
                </div>
              </div>
            </div>

            {/* Faq Item */}
            <div className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 bg-transparent">
              <h2 className="mb-0" id="faq-heading5">
                <button className="group relative flex w-full items-center rounded-none border-0 bg-transparent text-font-18 lg:text-font-20 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:shadow-border-b " type="button"
                  data-te-collapse-init data-te-collapse-collapsed data-te-target="#faq-collapse5" aria-expanded="false" aria-controls="faq-collapse5">
                  How long will it take to see results?
                  <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[te-collapse-collapsed]:me-0 group-data-[te-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </h2>
              <div id="faq-collapse5" className="!visible hidden [&:not([data-te-collapse-show])]:bg-white [&:not([data-te-collapsing-show])]:bg-white" data-te-collapse-item aria-labelledby="faq-heading5" data-te-parent="#faqAccordionExample">
                <div className="px-5 pb-4">
                Everybody is different, but most people see results within the first week or two. You may see weight loss, muscle gain, or just feel like you have more energy!
                </div>
              </div>
            </div>

            {/* Faq Item */}
            <div className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 bg-transparent">
              <h2 className="mb-0" id="faq-heading6">
                <button className="group relative flex w-full items-center rounded-none border-0 bg-transparent text-font-18 lg:text-font-20 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:shadow-border-b " type="button"
                  data-te-collapse-init data-te-collapse-collapsed data-te-target="#faq-collapse6" aria-expanded="false" aria-controls="faq-collapse6">
                        Do i keep my containers?
                  <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[te-collapse-collapsed]:me-0 group-data-[te-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </h2>
              <div id="faq-collapse6" className="!visible hidden [&:not([data-te-collapse-show])]:bg-white [&:not([data-te-collapsing-show])]:bg-white" data-te-collapse-item aria-labelledby="faq-heading6" data-te-parent="#faqAccordionExample">
                <div className="px-5 pb-4">
                  The containers are yours to keep. Stay environmentally conscious and reuse them as much as you like! If you would like to return them, we will gladly recycle them for you.
                </div>
              </div>
            </div>

            {/* Faq Item */}
            <div className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 bg-transparent">
              <h2 className="mb-0" id="faq-heading7">
                <button className="group relative flex w-full items-center rounded-none border-0 bg-transparent text-font-18 lg:text-font-20 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:shadow-border-b " type="button"
                  data-te-collapse-init data-te-collapse-collapsed data-te-target="#faq-collapse7" aria-expanded="false" aria-controls="faq-collapse7">
                     Do i return the fed up bags?
                  <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[te-collapse-collapsed]:me-0 group-data-[te-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </h2>
              <div id="faq-collapse7" className="!visible hidden [&:not([data-te-collapse-show])]:bg-white [&:not([data-te-collapsing-show])]:bg-white" data-te-collapse-item aria-labelledby="faq-heading7" data-te-parent="#faqAccordionExample">
                <div className="px-5 pb-4">
                  Yes, please! We like to recycle and reuse our bags if they are returned in good condition.
                </div>
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
