"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Thumb1 from "../../assets/images/thumb-1.jpg"
import Thumb2 from "../../assets/images/thumb-2.jpg"
import Link from "next/link";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";



export default function Home() {

  useEffect(() => {
      const init = async () => {
          const { Ripple, initTE } = await import("tw-elements");
          initTE({ Ripple});
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
    <Header />
    <main className="bg-gray-3 py-7">
      <div className="container container-xl mx-auto">
        <div className="lg:flex">
            <div className="left-content flex-1 lg:pr-[30px]">
              {/* Store location and detail start */}
              <div className="bg-white p-5 rounded-custom shadow-custom-1 grid grid-cols-1 lg:grid-cols-2 gap-[15px]">
                  <div className="flex">
                      <span className="w-7 min-w-7 h-7 xl:w-10 xl:min-w-10 xl:h-10 xl:min-h-10 mr-3 mt-1.5 block">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M431.3 206.8C426.5 203.3 422.2 199.4 418.3 195C414.4 199.3 410.1 203.2 405.4 206.7C390.9 217.5 372.8 224 353.1 224C333.5 224 315.6 217.6 301.1 206.1C296.3 203.4 291.9 199.4 287.9 195C283.9 199.4 279.5 203.4 274.7 206.1C260.2 217.6 242.3 224 222.7 224C203.2 224 185.2 217.6 170.7 206.1C165.9 203.4 161.5 199.4 157.6 195C153.6 199.4 149.1 203.4 144.3 206.1C129.9 217.6 111.1 224 92.36 224C88.3 224 84.21 223.7 80.24 223.2C24.92 215.8-1.255 150.6 28.33 103.8L85.66 13.13C90.76 4.979 99.87 0 109.6 0H466.4C476.1 0 485.2 4.978 490.3 13.13L547.6 103.8C577.3 150.7 551 215.8 495.5 223.2C491.6 223.7 487.6 224 483.4 224C463.8 224 445.8 217.5 431.3 206.8H431.3zM464.4 32H111.6L55.38 120.9C36.71 150.5 55.1 187.5 84.44 191.5C87.11 191.8 89.8 192 92.36 192C108.1 192 123.6 184.8 133.8 173.6C139.9 166.9 148.5 163 157.6 163C166.6 163 175.2 166.9 181.3 173.6C191.5 184.8 206.2 192 222.7 192C239.3 192 253.1 184.8 264.2 173.6C270.2 166.9 278.9 163 287.9 163C296.1 163 305.6 166.9 311.6 173.6C321.8 184.8 336.5 191.1 353.1 191.1C369.7 191.1 384.3 184.8 394.5 173.6C400.6 166.9 409.2 163 418.2 163C427.2 163 435.9 166.8 441.9 173.5C452.2 184.8 466.1 191.1 483.4 191.1C486.1 191.1 488.7 191.8 491.4 191.5C520.9 187.5 539.3 150.5 520.6 120.9L464.4 32zM96 272V352H480V272C480 263.2 487.2 256 496 256C504.8 256 512 263.2 512 272V448C512 483.3 483.3 512 448 512H128C92.65 512 64 483.3 64 448V272C64 263.2 71.16 256 80 256C88.84 256 96 263.2 96 272zM96 448C96 465.7 110.3 480 128 480H448C465.7 480 480 465.7 480 448V384H96V448z"/></svg>
                      </span>
                      <div>
                        <h1 className="text-font-18 lg:text-font-20">SLC - Sugarhouse</h1>
                        <p>2120 S 1300 E Suite 300 Salt Lake City Utah 84106</p>
                      </div>
                  </div>
                  <div className="flex">
                      <span className="w-7 min-w-7 h-7 xl:w-10 xl:min-w-10 xl:min-h-10 mr-3 mt-1.5 block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 min-w-7 h-7 xl:w-10 xl:min-w-10 xl:min-h-10 fill-[#000000]" viewBox="0 0 512 512">
                        <path d="M240 112C240 103.2 247.2 96 256 96C264.8 96 272 103.2 272 112V247.4L360.9 306.7C368.2 311.6 370.2 321.5 365.3 328.9C360.4 336.2 350.5 338.2 343.1 333.3L247.1 269.3C242.7 266.3 239.1 261.3 239.1 256L240 112zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256z"/></svg>
                      </span>
                      <span>Pick up your food twice a week. You can choose Monday & Thursday OR Tuesday & Friday as your pickup days</span>
                  </div>
              </div>
              {/* Store location and detail End */}

              {/* Meal Heading and Description start*/}
              <div className="bg-white p-5 rounded-custom shadow-custom-1 mt-5 sm:flex">
                  <div className="meal-image-wrap relative">
                    <Image src={Thumb1} alt="Variety Packs" className="w-full sm:w-[100px] sm:h-[100px] sm:min-w-[100px] sm:min-h-[100px] md:w-[200px] md:h-[200px] md:min-w-[200px] md:min-h-[200px] lg:w-[160px] lg:h-[160px] lg:min-w-[160px] lg:min-h-[160px] xl:w-[200px] xl:h-[200px] xl:min-w-[200px] xl:min-h-[200px] object-cover border border-solid border-gray-1 rounded-custom" />
                  </div>
                  <div className="flex-1 sm:ml-5 mt-3 sm:mt-0 default-content">
                      <h5 className="text-font-16 lg:text-font-18 mb-[15px]">Variety Packs</h5>
                      <p>A variety pack of our delicious breakfast, lunch and dinner options. Perfect for anyone who wants healthy and convenient meal options throughout the week.</p> 
                      <p>The male and female portions for macro-based meals are typically differentiated by the calorie content and macronutrient ratios, reflecting the general differences in nutritional needs between genders, with male portions usually being larger and containing more calories and protein.</p>
                      <p className="font-semibold">*Available for pickup and/or delivery Monday, Tuesday, Thursday, Friday!</p>
                  </div>
              </div>
              {/* Meal Heading and Description End*/}

              {/* Select Meal Gender Portion Start */}
              <div className="inline-flex rounded-custom mt-[30px]" role="group">
                <button type="button" className="btn btn-md btn-green w-[164px] py-[11px] inline-block rounded-l-custom rounded-r-none" data-te-ripple-init>
                  Female Portion
                </button>
                <button type="button" className="btn btn-md btn-white w-[164px] py-[11px] inline-block rounded-r-custom rounded-l-none"
                  data-te-ripple-init> 
                  Male Portion
                </button>
              </div>
              {/* Select Meal Gender Portion End */}

              {/* How many meals Section Start */}
              <div className="mt-[30px]">
                <h2 className="text-font-18 mb-5">How many meals would you like this week?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 xl:gap-[30px]">
                  <div className="relative custom-check">
                    <input className="custom-check-input" type="radio" name="HowManyMealsWouldYouLikeThisWeek" id="mealCheck1" defaultChecked />
                    <label className="custom-check-label" htmlFor="mealCheck1" data-te-ripple-init>
                      <span className="custom-check-title text-font-18 font-bold block">12 Meals</span>
                      <span className="custom-check-price text-font-16 font-normal block">$9.12/meal</span>
                    </label>
                  </div>
                  <div className="relative custom-check">
                    <input className="custom-check-input" type="radio" name="HowManyMealsWouldYouLikeThisWeek" id="mealCheck2" />
                    <label className="custom-check-label" htmlFor="mealCheck2" data-te-ripple-init>
                      <span className="custom-check-title text-font-18 font-bold block">10 Meals</span>
                      <span className="custom-check-price text-font-16 font-normal block">$9.12/meal</span>
                    </label>
                  </div>
                  <div className="relative custom-check">
                    <input className="custom-check-input" type="radio" name="HowManyMealsWouldYouLikeThisWeek" id="mealCheck3" />
                    <label className="custom-check-label" htmlFor="mealCheck3" data-te-ripple-init>
                      <span className="custom-check-title text-font-18 font-bold block">8 Meals</span>
                      <span className="custom-check-price text-font-16 font-normal block">$9.12/meal</span>
                    </label>
                  </div>
                  <div className="relative custom-check">
                    <input className="custom-check-input" type="radio" name="HowManyMealsWouldYouLikeThisWeek" id="mealCheck4" />
                    <label className="custom-check-label" htmlFor="mealCheck4" data-te-ripple-init>
                      <span className="custom-check-title text-font-18 font-bold block">4 Meals</span>
                      <span className="custom-check-price text-font-16 font-normal block">$9.12/meal</span>
                    </label>
                  </div>
                </div>
              </div>
              {/* How many meals Section End */}

              {/* How many Each Section Start */}
              <div className="mt-[30px]">
                <h2 className="text-font-18 mb-5">How many of each? </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-[30px]">
                  <div className="how-many-card">
                      <div className="image-wrap overflow-hidden border border-solid border-gray-1 rounded-custom relative w-full pt-[99.443%]">
                        <Image src={Thumb1} alt="Variety Packs" className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0" />
                      </div>
                      <div className="flex justify-between mt-4">
                        <div className="mr-5">
                            <h5 className="text-font-16">Breakfast</h5>
                        </div>
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
                  <div className="how-many-card">
                      <div className="image-wrap overflow-hidden border border-solid border-gray-1 rounded-custom relative w-full pt-[99.443%]">
                        <Image src={Thumb2} alt="Variety Packs" className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0" />
                      </div>
                      <div className="flex justify-between mt-4">
                        <div className="mr-5">
                            <h5 className="text-font-16">Lunch</h5>
                        </div>
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
                  <div className="how-many-card">
                      <div className="image-wrap overflow-hidden border border-solid border-gray-1 rounded-custom relative w-full pt-[99.443%]">
                        <Image src={Thumb1} alt="Variety Packs" className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0" />
                      </div>
                      <div className="flex justify-between mt-4">
                        <div className="mr-5">
                            <h5 className="text-font-16">Dinner</h5>
                        </div>
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
              </div>
              {/* How many Each Section End */}

              {/* Select Add-ons Section Start */}
              <div className="mt-[30px]">
                <h2 className="text-font-18 mb-5">Select your add-ons (Optinal)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-[30px]">
                  <div className="relative custom-check">
                    <input className="custom-check-input" type="radio" name="SelectYourAddOns" id="selectAddonsCheck1" defaultChecked />
                    <label className="custom-check-label" htmlFor="selectAddonsCheck1" data-te-ripple-init>
                      <span className="custom-check-title text-font-18 font-bold block">Protein Muffins</span>
                      <span className="custom-check-price text-font-16 font-normal block">6 Protein Muffins per box</span>
                    </label>
                  </div>
                  <div className="relative custom-check">
                    <input className="custom-check-input" type="radio" name="SelectYourAddOns" id="selectAddonsCheck2" />
                    <label className="custom-check-label" htmlFor="selectAddonsCheck2" data-te-ripple-init>
                      <span className="custom-check-title text-font-18 font-bold block">Protein Muffins</span>
                      <span className="custom-check-price text-font-16 font-normal block">6 Protein Muffins per box</span>
                    </label>
                  </div>
                </div>
              </div>
              {/* Select Add-ons Section End */}

              <hr className="my-[30px] h-[1px] border-t-0 bg-gray-2" />

              {/* Meal total and cart content start */}
              <div className="flex justify-between gap-4">
                  <div className="md:w-1/3">
                      <p className="text-basecolor text-font-18">Meal Total</p>
                      <h5 className="text-black text-font-18">$739</h5>
                  </div>
                  <div className="ml-auto md:w-2/3">
                      <p className="text-right">You’ve choosen for a package of 12 meals, including the Protein Muffins addon (6 per box), featuring 4 breakfasts, 2 lunches, and no dinner.</p>
                  </div>
              </div>
              {/* Meal total and cart content End */}

              <button className="btn btn-green mt-[30px] w-[200px]">Add to Cart</button>

            </div>
            
            <Sidebar />
          </div>
      </div>
    </main>
    </>
  );
}
