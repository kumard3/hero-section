/* eslint-disable @next/next/link-passhref */
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen   text-center dark:bg-black dark:text-gray-200">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 -z-0 opacity-90">
          {" "}
          <Image src="/background.png" layout="fill" alt="Background"/>
        </div>

        <div className=" relative z-10 flex h-full w-full justify-between px-10  py-10 ">
          <section className="flex   flex-col items-center justify-center">
            <div className="relative w-full max-w-2xl">
              <h1 className="flex flex-col joyride text-left font-mono text-6xl font-bold">
                NFT that are Out of this{" "}
                <span className="flex items-center">
                  world
                  <div className="">
                    <Image src="/KEEPSMILING.png" width="60" height="60" alt="keep" />
                  </div>{" "}
                </span>{" "}
              </h1>
            </div>
            <div className="max-w-xl">
              <p className="py-12 text-left outerSans">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit nostrum, ab perspiciatis, illo laudantium libero
                quo praesentium eveniet quae saepe deserunt aliquid ducimus
                quibusdam. Veniam earum perspiciatis laudantium rem cupiditate.{" "}
              </p>
            </div>
            <div className="relative flex w-full justify-around outerSans">
              <button className="relative flex h-10 w-32 items-center justify-center ">
                <div className=" absolute  h-16 w-48 skew-x-[23deg] items-center justify-center  bg-gradient-to-r from-[#B1D26F]  to-[#60E7CE]	"></div>
                <h1 className="absolute z-10  text-2xl font-bold text-black ">
                  Explore
                </h1>
              </button>
              <button className=" text-2xl font-bold ">Learn more</button>
            </div>
          </section>
          <div className="hidden  md:block ">
            <Image src="/nft.png" width="600" height="600" />
          </div>
        </div>
      </div>
    </div>
  );
}
