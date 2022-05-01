/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function HeroSection7() {
  return (
    <div className="relative w-full   overflow-hidden h-screen bg-white">
      <>
        {/* <div className="absolute -left-[500px] -bottom-[1000px]">
          <img src="mask.svg" alt="relative" />
        </div> */}
        <div className="absolute inset-0 object-contain  ">
          <div className="absolute top-[100px] -left-[500px] ">
            <img
              src="mask.svg"
              className="relative object-fill  "
            />
          </div>
        </div>
      </>
      <div className="flex relative flex-wrap justify-between items-center">
        <div className="">
          <div>
            <img src="3D.png" width="700" height="700" alt="" />
          </div>
        </div>

        <div className="relative text-black max-w-2xl text-left">
          <h1 className="font-bold text-7xl max-w-xl ">
            Create ,Manage & Boost Your Business
          </h1>
          <p>
            Pharetra blandit augue volutpat libero augue semper. Non diam neque
            praesent sem senectus mauris lectus a urna. Tortor pellentesque
            ipsum tincidunt enim.
          </p>
        </div>
      </div>
    </div>
  )
}
