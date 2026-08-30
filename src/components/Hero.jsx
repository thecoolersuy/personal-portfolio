import React from "react";
import mailIcon from "../assets/othericons/email-bright.svg";
import mailIconwhite from "../assets/othericons/email-white.svg";
import birdGif from "../assets/othericons/bird.gif";
import AsciiHands from "../components/AsciiHands";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full  bg-[#010409] flex flex-col  items-center justify-center pt-[1px] md:pt-[115px] pb-[20px] md:pb-[2px] px-2"
    >
      <div className="relative z-10 max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-[520px_minmax(0,580px)] gap-[1px] md:gap-[8px] items-center -mt-[105px] md:-translate-x-[80px]">
        <div className="flex flex-col justify-center items-center gap-[5px] md:translate-x-[100px]">
          <img
            src={birdGif}
            alt="bird animation"
            className="w-[550px] h-[550px] object-contain"
          />
        </div>

        <div className="flex flex-col items-center gap-[40px] text-center md:pl-[100px] md:items-start ">
          <h1 className="font-body font-light text-[#f0f6fc] text-[58px] md:text-[67px] leading-none whitespace-nowrap">
            hi,{" "}
            <span className="font-body font-bold text-[62px] md:text-[67px] text-[#1f6feb]">
              suyal
            </span>{" "}
            here.
          </h1>
          <p className="w-full md:min-w-[620px] md:max-w-[800px] font-body font-medium text-[#7b85a2] text-center md:text-left text-[18px] md:text-[17px] leading-[1.9rem]">
            Software engineer (.NET / React) and casual outdoor wanderer in
            Nepal. I architect reliable .NET backends and React apps.
            Occasionally, I trade my keyboard for a hiking trail to test out new
            design ideas into the wild.
          </p>
          <a
            href="https://www.linkedin.com/in/suyal-sahukhal-259a1b333/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-[8px] px-[18px] py-[14px] border border-[#1f6feb] rounded-[5px] text-[#1f6feb] hover:text-[#ffffff] font-body font-semibold text-[16px] hover:bg-[#151b23] hover:-translate-y-[3px] transition-all"
          >
            <img
              src={mailIcon}
              alt=""
              className="w-[25px] h-[25px] group-hover:hidden"
            />
            <img
              src={mailIconwhite}
              alt=""
              className="hidden w-[25px] h-[25px] group-hover:block"
            />
            Say hi!
          </a>
        </div>
      </div>
      <div className="relative z-0 md:-top-[320px] -top-[30px] md:-mb-[310px] mb-[50px]">
      </div>
    </section>
  );
}
