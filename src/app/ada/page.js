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
          <h1 className="text-font-28 lg:text-font-38 xl:text-font-48 text-black leading-normal">ADA Accessibility</h1>
        </div> 
      </div>
      {/* Inner Page Header End */}
      <div className="py-7 lg:py-12 xl:py-20">
        <div className="container mx-auto">
            <div className="default-content">
              <h2>Compliance Status</h2> 
              <p>We firmly believe that the internet should be available and accessible to anyone, and are committed to providing a website that is accessible to the widest possible audience, regardless of circumstance and ability.</p>

              <p>To fulfill this, we aim to adhere as strictly as possible to the World Wide Web Consortium’s (W3C) Web Content Accessibility Guidelines 2.1 (WCAG 2.1) at the AA level. These guidelines explain how to make web content accessible to people with a wide array of disabilities. Complying with those guidelines helps us ensure that the website is accessible to all people: blind people, people with motor impairments, visual impairment, cognitive disabilities, and more.</p>

              <p>This website utilizes various technologies that are meant to make it as accessible as possible at all times. We utilize an accessibility interface that allows persons with specific disabilities to adjust the website’s UI (user interface) and design it to their personal needs.</p>

              <p>Additionally, the website utilizes an AI-based application that runs in the background and optimizes its accessibility level constantly. This application remediates the website’s HTML, adapts its functionality and behavior for screen-readers used by blind users, and for keyboard functions used by individuals with motor impairments.</p>

              <p>Fedup Kitchen is committed to making our website and all of its products and features accessible to everyone in accordance with Section 504 of the Rehabilitation Act of 1973 and Section 508 of the Rehabilitation Act (29 U.S.C. 794d). We have compiled the following resources to ensure our website is accessible to everyone:</p>

              <p>For more information about the specific requirements outlined Section 504 and 508, <Link href="https://www.section508.gov/manage/laws-and-policies/" target="_blank">click here.</Link></p>

              <hr class="my-7 h-0.5 border-t-0 bg-gray-1 " />

              <h2>Resources</h2>
              <h5>BrowseAloud</h5>
              <p>BrowseAloud is a browser plug-in for people who struggle to read online. The plug-on reads text aloud and highlights the words as they are spoken with a variety of different voices. BrowseAloud can help people with learning disabilities, English as a second language, and mild visual impairments.</p>

              <p>This software has two options: a continuous option, which allows the entire web page to be read without using the mouse or an option to select individual words or sentences on a page to be read aloud.</p>

              <p><Link href="https://www.texthelp.com/products/reachdeck/browsealoud-is-now-the-reachdeck-toolbar/" target="_blank">Download Browse Aloud</Link></p>

              <h5>Text 2 Speech Converter</h5>
              <p>Text 2 Speech Converter is a free online service that can be accessed at any time for people who find it difficult to read online. Simply enter your text, select a voice and download, and listen to the mp3 file. Text 2 Speech Converter can help people with learning disabilities, English as a second language and mild visual impairments.</p>

              <p><Link href="https://www.text2speech.org/" target="_blank">Use Text 2 Speech Converter</Link></p>
              <hr class="my-7 h-0.5 border-t-0 bg-gray-1 " />
              <h2>Learn More</h2>
              <h5>I can&apos;t see very well</h5>
              <p>Tips:</p>
              <ol>
                <li><strong>Increase text size</strong> <br />To increase the size of the text on your computer, hold down the ‘Ctrl’ or ‘Command’ key and press ‘+’ key to increase the text size.</li>

                <li><strong>Change background and text color</strong> <br />Change the background of your computer by opening the ‘Tools’ menu or pushing ‘Alt’ + ‘T’. Select “Internet Options’ by pressing ‘O’ and select ‘Accessibility’ by pressing ‘Alt’ + ‘E.” Check the “Ignore colors specified on the web page’ box by pressing ‘Alt’ + ‘C’. Confirm your selection by pressing ‘enter’.</li>
              </ol>

              <h5>I am blind</h5>
              <p>Tips:</p>
              <ol>
                <li><strong>Use the keyboard to navigate the screen</strong> <br />If you are unable to use a mouse to navigate a computer, use common keyboard commands to help navigate web pages. <Link href="https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec" target="_blank">Click here</Link> for a full guide of keyboard navigation shortcuts for Microsoft.</li>

                <li><strong>Save and print forms and confirmation numbers</strong> <br />If you order an item through our website, be sure to print the pages you may need to reference later. To print the page, push CTRL + P and to save, push CTRL + S.</li>
              </ol>

              <h5>I cannot use a keyboard or a mouse</h5>
              <p>Tips:</p>
              <ol>
                <li><strong>Use speech recognition software</strong> <br />Installing a speech recognition software allows the user to focus on an aspect of our website by using verbal commands. The objects that can be focused on include a text box, list box, link, screen, image, and file.</li>

              </ol>

              <h5>I am deaf or hard of hearing</h5>
              <p>Tips:</p>
              <ol>
                <li><strong>Utilize volume control</strong> <br />Adjust the volume of your computer by clicking the “Control,” “Hardware and Sound,” and “Adjust System Volume” to either increase or decrease sound to the right level.</li>

                <li><strong>Enable text transcripts</strong> <br />Enabling a text transcript on your device is useful because it’s the equivalent of audio information that includes spoken words and sound effects.</li>
              </ol>

              <hr class="my-7 h-0.5 border-t-0 bg-gray-1 " />

              <h3>Questions?</h3>
              <p>If you have further questions or would like to voice a complaint, call us at 801-513-0619. Please include the website address or URL and the specific problem you experienced while trying to navigate our website.</p>
            </div>
        </div>
      </div>
      
    </main>
    <Footer />
    </>
  );
}
