import React from 'react';
import { Mail } from 'lucide-react';
import aboutRanjana from '../assets/ranjanalipiimages/aboutranjanalipi.png';
import birdGif from '../assets/othericons/bird.gif';

export default function About() {
  return (
    <section id="about" className="w-full bg-surface flex flex-col items-center py-20 lg:py-[128px] px-4 md:px-8">
      <div className="w-full max-w-[968px] flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-10 relative">
          <h2 className="font-heading font-bold text-[#444] text-4xl lg:text-[41.6px] leading-none z-10 text-center">
            about me
          </h2>
          <div className="mt-2 flex items-center justify-center">
            <img 
              src={aboutRanjana} 
              alt="about in Ranjana Lipi" 
              className="h-[67.5px] w-[120px] object-contain opacity-50" 
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-[24px] items-center lg:items-start text-center lg:text-left">
          
          {/* Left Column - Image Abstract */}
          <div className="flex justify-center items-start lg:pl-[63.19px] lg:pt-[47.19px]">
            <img 
              src={birdGif} 
              alt="bird animation" 
              className="w-[240px] h-[240px] object-contain" 
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col gap-6 font-body font-medium text-[16px] text-secondary leading-relaxed bg-surface rounded-[30px] p-2 md:p-6 relative">
            <p className="m-0 text-left">
              I’m a Frontend Developer passionate about crafting clean, interactive, and user-centered web experiences. I'm currently building a dev blog application <a href="#" className="text-accent hover:underline transition-all">Writr</a>. I am pursuing my BSc(Hons) in Computing from Softwarica College of IT and e-Commerce, Coventry University. I enjoy building frontend solutions, exploring modern frontend concepts, and experimenting with ideas around UI, performance, and developer experience.
            </p>

            <p className="m-0 text-left">
             When I’m not glued to a screen (rare, but it happens), I’m probably hiking, exploring design ideas, or out on a long walk.

            </p>

            <div className="flex items-center justify-start gap-2 mt-4 text-left">
              <Mail size={16} className="text-secondary" />
              <span className="italic"> suyalsahukhala787@gmail.com at gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
