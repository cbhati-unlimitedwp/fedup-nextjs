"use client";
import React from 'react';
import { useEffect } from "react";
import Image from 'next/image';
import Logo from '../assets/images/logo.png';
import MenuBar from '../assets/images/menu-bar.svg';

const Header = () => {
    useEffect(() => {
        const init = async () => {
            const { Collapse, Dropdown, Offcanvas, initTE } = await import("tw-elements");
            initTE({ Collapse, Dropdown, Offcanvas });
        };
        init();
    }, []);

  return (
    <>
    <header className="header bg-white py-5 xl:py-0 shadow-[0_2px_5px_0_rgba(0,0,0,0.06)]">
      <div className="container mx-auto">
        <nav className="flex-no-wrap relative flex w-full items-center justify-between py-2 lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
            {/* <!-- Hamburger button for mobile view --> */}
            <button
            className="block border-0 bg-transparent px-2 text-black hover:no-underline hover:shadow-xt-bastext-basecolorunderline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation">
            {/* <!-- Hamburger icon --> */}
            <span className="[&>svg]:w-7">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7">
                <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd" />
                </svg>
            </span>
            </button>

            {/* <!-- Collapsible navigation container --> */}
            <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContent1" data-te-collapse-item>
                {/* <!-- Logo --> */}
                <a href="#" className="flex items-center">
                    <Image src={Logo} className="w-auto h-[60px] " alt="Fedup Logo" priority />
                    <span className='text-black text-font-16 font-semibold ml-3 border-l border-solid border-black pl-3'>SLC - Sugarhouse</span>
                </a>
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
                    <a
                    className="ml-6 w-6 h-6 object-contain inline-block"
                    data-te-offcanvas-toggle href="#offcanvasExample" role="button" aria-controls="offcanvasExample" data-te-ripple-init data-te-ripple-color="light">
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-black' viewBox="0 0 448 512"><path d="M0 80C0 71.16 7.164 64 16 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H16C7.164 96 0 88.84 0 80zM0 240C0 231.2 7.164 224 16 224H432C440.8 224 448 231.2 448 240C448 248.8 440.8 256 432 256H16C7.164 256 0 248.8 0 240zM432 416H16C7.164 416 0 408.8 0 400C0 391.2 7.164 384 16 384H432C440.8 384 448 391.2 448 400C448 408.8 440.8 416 432 416z"/></svg>
                    </a>
                    <div className="invisible fixed bottom-0 left-0 top-0 z-[1045] flex w-11/12  max-w-[280px] -translate-x-full flex-col border-none bg-dark-2 bg-clip-padding text-white shadow-sm outline-none transition duration-300 ease-in-out [&[data-te-offcanvas-show]]:transform-none"
                        tabIndex="-1"
                        id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel"
                        data-te-offcanvas-init>
                        <div className="flex items-center justify-end p-4">
                            <button type="button" className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-offcanvas-dismiss>
                            <span  className="w-7 focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>
                            </button>
                        </div>
                        <div className="flex-grow overflow-y-auto p-4">
                            <div>
                                <nav className="relative" >
                                    <ul className="list-style-none flex flex-col pl-0 *:pb-4"
                                        data-te-navbar-nav-ref>
                                        <li className="">
                                            <a className="text-font-16 lg:text-font-20 font-semibold text-primary transition duration-200 hover:text-primary hover:underline hover:ease-in-out focus:text-primary motion-reduce:transition-none lg:px-2 [&.active]:text-white"
                                            href="#" >Sign in</a>
                                        </li>
                                        <li className="">
                                            <a className="text-font-16 lg:text-font-20 font-semibold text-primary transition duration-200 hover:text-primary hover:underline hover:ease-in-out focus:text-primary motion-reduce:transition-none lg:px-2 [&.active]:text-white"
                                            href="#" >Sign up</a>
                                        </li>
                                        <li className="">
                                            <a className="text-font-16 lg:text-font-20 font-semibold text-primary transition duration-200 hover:text-primary hover:underline hover:ease-in-out focus:text-primary motion-reduce:transition-none lg:px-2 [&.active]:text-white"
                                            href="#" >Contact</a>
                                        </li>
                                        <li className="">
                                            <a className="text-font-16 lg:text-font-20 font-semibold text-primary transition duration-200 hover:text-primary hover:underline hover:ease-in-out focus:text-primary motion-reduce:transition-none lg:px-2 [&.active]:text-white"
                                            href="#" >FAQ</a>
                                        </li>
                                        <li className="">
                                            <a className="text-font-16 lg:text-font-20 font-semibold text-primary transition duration-200 hover:text-primary hover:underline hover:ease-in-out focus:text-primary motion-reduce:transition-none lg:px-2 [&.active]:text-white"
                                            href="#" >This Week&lsquo;s Menu</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </nav>
      </div>  
    </header>
    </>
  );
}

export default Header;




