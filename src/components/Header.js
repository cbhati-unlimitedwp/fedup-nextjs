"use client";
import React from 'react';
import { useEffect } from "react";
import Image from 'next/image';
import Logo from '../assets/images/logo.png';
import MenuBar from '../assets/images/menu-bar.svg';
import Link from 'next/link';

const Header = () => {
    useEffect(() => {
        const init = async () => {
            const { Collapse, Dropdown, Offcanvas, Tooltip, Sidenav, initTE } = await import("tw-elements");
            initTE({ Collapse, Dropdown, Offcanvas, Tooltip, Sidenav, });
        };
        init();
    }, []);

  return (
    <>
    <header className="header relative bg-white py-4 shadow-[0_2px_5px_0_rgba(0,0,0,0.06)]">
      <div className="container mx-auto">
        <nav className="flex-no-wrap relative flex w-full items-center justify-between lg:flex-wrap lg:justify-start ">
            <div className="flex w-full flex-wrap items-center justify-between ">
                {/* <!-- Logo --> */}
                <Link href="/" className="flex flex-col lg:flex-row items-start lg:items-center">
                    <Image src={Logo} className="w-auto h-12 lg:h-[60px] " alt="Fedup Logo" priority />
                    <span className='text-black text-font-14 lg:text-font-16 font-semibold lg:ml-3 lg:border-l lg:border-solid lg:border-black lg:pl-3 mt-0.5 lg:mt-0'>SLC - Sugarhouse</span>
                </Link>
                
                {/* <!-- Desktop Main menu start --> */}
                <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContent1" data-te-collapse-item>
                    <div className="relative flex items-center ml-auto">
                        <ul className="list-style-none flex flex-col pl-0 lg:flex-row lg:items-center *:px-1"
                            data-te-navbar-nav-ref>
                            <li className="first:pl-0 last:pr-0" data-te-nav-item-ref>
                                <a className="btn btn-green btn-sm leading-none py-1.5 px-3"
                                href="#" data-te-nav-link-ref >Try us for free</a>
                            </li>
                            <li className="first:pl-0 last:pr-0" data-te-nav-item-ref>
                                <a className="text-font-16 font-semibold text-black transition duration-200 hover:text-basecolor hover:ease-in-out focus:text-basecolor motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 "
                                href="#" data-te-nav-link-ref >Order Now</a>
                            </li>
                            <li className="first:pl-0 last:pr-0" data-te-nav-item-ref data-te-dropdown-ref data-te-dropdown-alignment="end">
                                <a className="flex items-center text-font-16 font-semibold text-black transition duration-200 hover:text-basecolor hover:ease-in-out focus:text-basecolor motion-reduce:transition-none lg:px-2 [&.active]:text-black/90"
                                href="#"
                                type="button"
                                id="dropdownMenuButton2"
                                data-te-dropdown-toggle-ref
                                aria-expanded="false">
                                Salt Lake City  
                                    <span className="ml-1 w-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </a>
                                <ul className="absolute z-[1000] float-right m-0 hidden min-w-[180px] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                    aria-labelledby="dropdownMenuButton2" data-te-dropdown-menu-ref>
                                    <li>
                                        <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-font-16 font-normal text-black hover:bg-neutral-100 active:text-neutral-800 active:no-underline"
                                        href="#" data-te-dropdown-item-ref >St. George</a>
                                    </li>
                                    <li>
                                        <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-font-16 font-normal text-black hover:bg-neutral-100 active:text-neutral-800 active:no-underline"
                                        href="#" data-te-dropdown-item-ref >Draper</a>
                                    </li>
                                    <li>
                                        <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-font-16 font-normal text-black hover:bg-neutral-100 active:text-neutral-800 active:no-underline"
                                        href="#" data-te-dropdown-item-ref >Summerlin</a>
                                    </li>
                                    <li>
                                        <a className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-font-16 font-normal text-black hover:bg-neutral-100 active:text-neutral-800 active:no-underline"
                                        href="#" data-te-dropdown-item-ref >Daybreak</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Desktop Main menu End --> */}
                
                <div className='ml-auto flex lg:hidden'>
                    <a className="btn btn-green btn-sm leading-none py-1.5 px-3 pl-2 inline-block" href="#">Order Now</a>
                </div>
                
                {/* Cart Icon */}
                <a className="ml-4 lg:ml-6 w-6 h-6 object-contain inline-block relative" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-black' viewBox="0 0 576 512"><path d="M80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"/></svg>
                    <span className="absolute -top-1 -right-1 rounded-full bg-light-green px-[0.35em] py-[0.15em] text-font-12 font-bold leading-none text-white">1</span>
                </a>

                {/* Sidebar munu icon */}
                <a className="ml-4 lg:ml-6 w-6 h-6 object-contain inline-block" data-te-offcanvas-toggle href="#offcanvasExample" role="button" aria-controls="offcanvasExample" data-te-ripple-init data-te-ripple-color="light">
                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-black' viewBox="0 0 448 512"><path d="M0 80C0 71.16 7.164 64 16 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H16C7.164 96 0 88.84 0 80zM0 240C0 231.2 7.164 224 16 224H432C440.8 224 448 231.2 448 240C448 248.8 440.8 256 432 256H16C7.164 256 0 248.8 0 240zM432 416H16C7.164 416 0 408.8 0 400C0 391.2 7.164 384 16 384H432C440.8 384 448 391.2 448 400C448 408.8 440.8 416 432 416z"/></svg>
                </a>

                {/* <!-- Sidenav and Mobilemenu start --> */}
                <div className="invisible fixed bottom-0 left-0 top-0 z-[1045] flex w-11/12  max-w-[272px] -translate-x-full flex-col border-none bg-dark-2 bg-clip-padding text-white shadow-sm outline-none transition duration-300 ease-in-out [&[data-te-offcanvas-show]]:transform-none" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" data-te-offcanvas-init>
                    <div className="flex items-center justify-end p-4">
                        <button type="button" className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-offcanvas-dismiss>
                            <span  className="w-7 focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="flex-grow flex flex-col p-4">
                        <nav className="relative !h-[calc(100vh-150px)]" data-te-sidenav-init>
                            <ul className="list-style-none flex flex-col pl-0 *:mb-1"
                                data-te-sidenav-menu-ref>
                                <li className="relative">
                                    <a className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-font-18 lg:text-font-20 font-medium text-light-green outline-none transition duration-300 ease-linear hover:bg-white/5 hover:text-light-green hover:outline-none focus:bg-white/5 focus:text-light-green focus:outline-none active:bg-white/5 active:text-light-green active:outline-none data-[te-sidenav-state-active]:text-light-green data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                                        data-te-sidenav-link-ref>
                                        <span>Order Now</span>
                                    </a>
                                </li>
                                <li className="relative">
                                    <a className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-font-18 lg:text-font-20 font-medium text-light-green outline-none transition duration-300 ease-linear hover:bg-white/5 hover:text-light-green hover:outline-none focus:bg-white/5 focus:text-light-green focus:outline-none active:bg-white/5 active:text-light-green active:outline-none data-[te-sidenav-state-active]:text-light-green data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                                        data-te-sidenav-link-ref>
                                        <span>Salt Lake City  </span>
                                        <span  className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-white/50"
                                        data-te-sidenav-rotate-icon-ref>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                        </span>
                                    </a>
                                    <ul className="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block " data-te-sidenav-collapse-ref>
                                        <li className="relative">
                                            <a className="flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 pl-11 pr-6 text-font-18 lg:text-font-20 font-medium text-light-green outline-none transition duration-300 ease-linear hover:bg-white/5 hover:text-light-green hover:outline-none focus:bg-white/5 focus:text-light-green focus:outline-none active:bg-white/5 active:text-light-green active:outline-none data-[te-sidenav-state-active]:text-light-green data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"  data-te-sidenav-link-ref>St. George</a>
                                        </li>
                                        <li className="relative">
                                            <a className="flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 pl-11 pr-6 text-font-18 lg:text-font-20 font-medium text-light-green outline-none transition duration-300 ease-linear hover:bg-white/5 hover:text-light-green hover:outline-none focus:bg-white/5 focus:text-light-green focus:outline-none active:bg-white/5 active:text-light-green active:outline-none data-[te-sidenav-state-active]:text-light-green data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"  data-te-sidenav-link-ref>Draper</a>
                                        </li>
                                        <li className="relative">
                                            <a className="flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 pl-11 pr-6 text-font-18 lg:text-font-20 font-medium text-light-green outline-none transition duration-300 ease-linear hover:bg-white/5 hover:text-light-green hover:outline-none focus:bg-white/5 focus:text-light-green focus:outline-none active:bg-white/5 active:text-light-green active:outline-none data-[te-sidenav-state-active]:text-light-green data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"  data-te-sidenav-link-ref>Summerlin</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="relative">
                                    <a className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-font-18 lg:text-font-20 font-medium text-light-green outline-none transition duration-300 ease-linear hover:bg-white/5 hover:text-light-green hover:outline-none focus:bg-white/5 focus:text-light-green focus:outline-none active:bg-white/5 active:text-light-green active:outline-none data-[te-sidenav-state-active]:text-light-green data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                                        data-te-sidenav-link-ref>
                                        <span>Contact</span>
                                    </a>
                                </li>
                                <li className="relative">
                                    <a className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-font-18 lg:text-font-20 font-medium text-light-green outline-none transition duration-300 ease-linear hover:bg-white/5 hover:text-light-green hover:outline-none focus:bg-white/5 focus:text-light-green focus:outline-none active:bg-white/5 active:text-light-green active:outline-none data-[te-sidenav-state-active]:text-light-green data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                                        data-te-sidenav-link-ref>
                                        <span>FAQ</span>
                                    </a>
                                </li>
                                <li className="relative">
                                    <a className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-font-18 lg:text-font-20 font-medium text-light-green outline-none transition duration-300 ease-linear hover:bg-white/5 hover:text-light-green hover:outline-none focus:bg-white/5 focus:text-light-green focus:outline-none active:bg-white/5 active:text-light-green active:outline-none data-[te-sidenav-state-active]:text-light-green data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                                        data-te-sidenav-link-ref>
                                        <span>This Week&lsquo;s Menu</span>
                                    </a>
                                </li>
                                <hr className="my-2 h-[1px] !p-0 bg-gray-1 opacity-20 " />
                                <li className="relative mt-2">
                                    <a className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-font-18 lg:text-font-20 font-medium text-light-green outline-none transition duration-300 ease-linear hover:bg-white/5 hover:text-light-green hover:outline-none focus:bg-white/5 focus:text-light-green focus:outline-none active:bg-white/5 active:text-light-green active:outline-none data-[te-sidenav-state-active]:text-light-green data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                                        data-te-sidenav-link-ref>
                                        <span>Sign in</span>
                                    </a>
                                </li>
                                <li className="relative">
                                    <a className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-font-18 lg:text-font-20 font-medium text-light-green outline-none transition duration-300 ease-linear hover:bg-white/5 hover:text-light-green hover:outline-none focus:bg-white/5 focus:text-light-green focus:outline-none active:bg-white/5 active:text-light-green active:outline-none data-[te-sidenav-state-active]:text-light-green data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
                                        data-te-sidenav-link-ref>
                                        <span>Sign up</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className='mt-auto z-10'>
                            <a className="btn btn-green btn-md leading-none w-full py-3" href="#" data-te-nav-link-ref >Try us for free</a>
                        </div>
                    </div>
                </div>
                {/* <!-- Sidenav and Mobilemenu End --> */}
            </div>
        </nav>
      </div>  
    </header>

    {/* Pause Program Start */}
    <button type="button" data-te-ripple-init data-te-ripple-color="light" className="!fixed bottom-14 lg:bottom-5 right-5 rounded-full bg-light-green p-2 lg:p-3 hover:bg-lime-600 focus:bg-lime-600 focus:outline-none focus:ring-0 z-[999]" data-te-toggle="tooltip" title="Pause Program">
        <svg className="w-6 h-6 min-w-6 lg:w-[30px] lg:h-[30px] lg:min-w-[30px] fill-white" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"></path>
            </svg>
    </button>
     {/* Pause Program End */}
    </>
  );
}

export default Header;




