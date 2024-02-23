import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <main className="bg-gray-3 py-7">
      <div className="container container-xl mx-auto">
        <div className="flex">
            <div className="left-content flex-1 lg:pr-[30px] xl:pr-[45px]">
              {/* Store location and detail start */}
              <div className="bg-white p-5 rounded-md shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-[15px]">
                  <div className="flex">
                      <span className="w-10 h-10 mr-3 mt-1.5 block">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M431.3 206.8C426.5 203.3 422.2 199.4 418.3 195C414.4 199.3 410.1 203.2 405.4 206.7C390.9 217.5 372.8 224 353.1 224C333.5 224 315.6 217.6 301.1 206.1C296.3 203.4 291.9 199.4 287.9 195C283.9 199.4 279.5 203.4 274.7 206.1C260.2 217.6 242.3 224 222.7 224C203.2 224 185.2 217.6 170.7 206.1C165.9 203.4 161.5 199.4 157.6 195C153.6 199.4 149.1 203.4 144.3 206.1C129.9 217.6 111.1 224 92.36 224C88.3 224 84.21 223.7 80.24 223.2C24.92 215.8-1.255 150.6 28.33 103.8L85.66 13.13C90.76 4.979 99.87 0 109.6 0H466.4C476.1 0 485.2 4.978 490.3 13.13L547.6 103.8C577.3 150.7 551 215.8 495.5 223.2C491.6 223.7 487.6 224 483.4 224C463.8 224 445.8 217.5 431.3 206.8H431.3zM464.4 32H111.6L55.38 120.9C36.71 150.5 55.1 187.5 84.44 191.5C87.11 191.8 89.8 192 92.36 192C108.1 192 123.6 184.8 133.8 173.6C139.9 166.9 148.5 163 157.6 163C166.6 163 175.2 166.9 181.3 173.6C191.5 184.8 206.2 192 222.7 192C239.3 192 253.1 184.8 264.2 173.6C270.2 166.9 278.9 163 287.9 163C296.1 163 305.6 166.9 311.6 173.6C321.8 184.8 336.5 191.1 353.1 191.1C369.7 191.1 384.3 184.8 394.5 173.6C400.6 166.9 409.2 163 418.2 163C427.2 163 435.9 166.8 441.9 173.5C452.2 184.8 466.1 191.1 483.4 191.1C486.1 191.1 488.7 191.8 491.4 191.5C520.9 187.5 539.3 150.5 520.6 120.9L464.4 32zM96 272V352H480V272C480 263.2 487.2 256 496 256C504.8 256 512 263.2 512 272V448C512 483.3 483.3 512 448 512H128C92.65 512 64 483.3 64 448V272C64 263.2 71.16 256 80 256C88.84 256 96 263.2 96 272zM96 448C96 465.7 110.3 480 128 480H448C465.7 480 480 465.7 480 448V384H96V448z"/></svg>
                      </span>
                      <div>
                        <h1 className="text-font-18 lg:text-font-20">SLC - Sugarhouse</h1>
                        <p>2120 S 1300 E Suite 300 Salt Lake City Utah 84106</p>
                      </div>
                  </div>
                  <div className="flex">
                      <span className="w-10 h-10 mr-3 mt-1.5 block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 min-w-10 h-10 fill-[#000000]" viewBox="0 0 512 512">
                        <path d="M240 112C240 103.2 247.2 96 256 96C264.8 96 272 103.2 272 112V247.4L360.9 306.7C368.2 311.6 370.2 321.5 365.3 328.9C360.4 336.2 350.5 338.2 343.1 333.3L247.1 269.3C242.7 266.3 239.1 261.3 239.1 256L240 112zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256z"/></svg>
                      </span>
                      <span>Pick up your food twice a week. You can choose Monday & Thursday OR Tuesday & Friday as your pickup days</span>
                  </div>
              </div>
              {/* Store location and detail start */}

              <div className="bg-white p-5 rounded-md shadow-sm mt-5">
                  {/* Start work here */}
              </div>
            </div>
            <div className="right-sidebar flex w-[365px]">

            </div>
          </div>
      </div>
    </main>
    </>
  );
}
