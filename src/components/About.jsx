import React from 'react';
import { Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="w-full bg-surface flex flex-col items-center py-20 lg:py-[128px] px-4 md:px-8">
      <div className="w-full max-w-[968px] flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-10 relative">
          <h2 className="font-heading font-bold text-[#444] text-4xl lg:text-[41.6px] leading-none z-10 text-center">
            about me
          </h2>
          <div className="mt-2 text-secondary opacity-50 select-none pointer-events-none w-[120px] h-[67.5px] flex items-center justify-center">
            <img 
              src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/quote.svg" 
              alt="decorative" 
              className="w-10 h-10 opacity-30" 
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-[24px] items-center lg:items-start text-center lg:text-left">
          
          {/* Left Column - Image Abstract */}
          <div className="flex justify-center items-start lg:pl-[63.19px] lg:pt-[47.19px]">
            <div className="bg-surface shadow-[0px_0px_20px_0px_#e5e5e5] w-[200px] h-[200px] rounded-[24px] flex items-center justify-center p-8">
              <img 
                src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/mountain-snow.svg" 
                alt="mountain climbing" 
                className="w-full h-full object-contain opacity-50" 
                style={{ filter: 'grayscale(100%)' }}
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col gap-6 font-body font-extralight text-[16px] text-secondary leading-relaxed bg-surface rounded-[30px] p-2 md:p-6 relative">
            <p className="m-0 text-left">
              I'm currently doing AI Safety research and building <a href="#" className="text-accent hover:underline transition-all">AI Safety Nepal</a> and legal research platform <a href="#" className="text-accent hover:underline transition-all">Edavor</a>. I graduated in Computer Engineering from Pulchowk Campus, Tribhuvan University. I enjoy building ML solutions and exploring the cool ideas behind them. I also love organizing and participating in community events.
            </p>

            <p className="m-0 text-left">
              When I'm not glued to a screen (rare, but it happens), you'll probably find me reading a book, painting something, or going on long walks.
            </p>

            <div className="flex items-center justify-start gap-2 mt-4 text-left">
              <Mail size={16} className="text-secondary" />
              <span className="italic"> yunika.bajracharya at gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
