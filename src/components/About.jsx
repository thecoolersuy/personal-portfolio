import React from "react";
import aboutRanjana from "../assets/ranjanalipiimages/aboutranjanalipi.png";
import picture from "../assets/othericons/hero.jpeg";
import mailIcon from "../assets/socialmediaicons/mail-default.svg";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#010409] flex flex-col items-center mt-[2px] md:mt-[210px] py-20  px-4 md:px-8 scroll-mt-[70px] md:scroll-mt-[70px]"
    >
      <div className="w-full max-w-[968px] flex flex-col items-center">
        <div className="flex flex-col items-center mb-10 relative gap-5">
          <h2 className="font-heading font-bold text-[#f0f6fc] text-4xl lg:text-[41.6px] leading-none z-10 text-center">
            about me
          </h2>
          <h2 className="ranjana font-bold text-[#f0f6fc] text-[32px] lg:text-[32px] leading-none z-10 text-center mb-6 ">
            नमस्ते
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-[10px] items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center justify-center h-[206.858px] w-[203.43px] col-span-2 md:col-span-1 mx-auto md:mx-50">
            <div className="w-[206.858px] h-[206.858px] flex items-center justify-center -rotate-2">
              <div className="w-[200px] h-[200px] rounded-[8px] shadow-[1px_1px_3px_0px_rgba(0,0,0,0.3)] overflow-hidden">
                <img
                  src={picture}
                  alt="Suyal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 font-body font-medium text-[16px] text-[#7b85a2] leading-relaxed rounded-[30px] p-2 md:p-6 relative">
            <p className="m-0 text-center md:text-left lg:text-justify">
              I’m a .NET and React Developer passionate about building reliable
              backend systems with clean, secure, and high-performance web
              applications. Previously, I was working as a software engineer
              intern at{" "}
              <strong className="font-bold text-[#4390ff]">Webbing Plex</strong>
            </p>

            <p className="m-0 text-center md:text-left lg:text-justify">
              Here are some technologies I have been working with:
            </p>

            <ul className="m-0 grid list-none grid-cols-1 gap-y-1 p-0 text-left md:grid-cols-2 md:gap-x-10">
              {[".NET", "Typescript", "React.js", "C#", "Javascript ES6+"].map(
                (technology) => (
                  <li key={technology} className="relative pl-4">
                    <span className="absolute left-0 text-[14px] text-[#4390ff]">
                      ▹
                    </span>
                    {technology}
                  </li>
                ),
              )}
            </ul>

            <p className="m-0 text-center md:text-left lg:text-justify">
              When I’m not glued to a screen (rare, but it happens), I’m
              probably hiking, exploring system design concepts, or out on a
              long walk.
            </p>

            <div className="flex place-items-center justify-center gap-2 mt-4">
              <img src={mailIcon} alt="Email" className="w-4 h-4" />
              <span className="italic"> suyalsahukhala787@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
