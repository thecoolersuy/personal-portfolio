import React from 'react';
import { Mail, Send } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="w-full min-h-[calc(100vh-72px)] bg-surface flex items-center justify-center py-[64px] lg:py-[174.63px] px-4 md:px-8">
      <div className="max-w-[968px] w-full grid grid-cols-1 lg:grid-cols-[120px_minmax(0,1fr)_203.43px] gap-10 lg:gap-[32px] items-center">

        {/* Social Icons - Column 1 */}
        <nav className="flex flex-row lg:flex-col gap-[16px] lg:gap-[9.2px] justify-center lg:justify-start lg:pr-[87px] order-3 lg:order-1 items-center lg:items-end">
          <a href="#" aria-label="Email" className="text-secondary hover:text-primary transition-colors flex items-center justify-center w-[24px] h-[32px]">
            <Mail size={24} />
          </a>
          <a href="#" aria-label="LinkedIn" className="opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center w-[23px] h-[33.98px]">
            <img src="https://cdn.simpleicons.org/linkedin/333333" alt="LinkedIn" className="w-[20px] h-[20px] object-contain" />
          </a>
          <a href="#" aria-label="Github" className="opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center w-[28px] h-[49.99px]">
            <img src="https://cdn.simpleicons.org/github/333333" alt="Github" className="w-[24px] h-[24px] object-contain" />
          </a>
          <a href="#" aria-label="Medium" className="opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center w-[24px] h-[33.99px]">
            <img src="https://cdn.simpleicons.org/medium/333333" alt="Medium" className="w-[20px] h-[20px] object-contain" />
          </a>
          <a href="#" aria-label="Instagram" className="opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center w-[43px] h-[44.99px]">
            <img src="https://cdn.simpleicons.org/instagram/333333" alt="Instagram" className="w-[28px] h-[28px] object-contain" />
          </a>
          <a href="#" aria-label="Facebook" className="opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center w-[24px] h-[32px]">
            <img src="https://cdn.simpleicons.org/facebook/333333" alt="Facebook" className="w-[20px] h-[20px] object-contain" />
          </a>
          <a href="#" aria-label="Twitter" className="opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center w-[25px] h-[34.99px]">
            <img src="https://cdn.simpleicons.org/x/333333" alt="Twitter/X" className="w-[20px] h-[20px] object-contain" />
          </a>
        </nav>

        {/* Text Content - Column 2 */}
        <div className="flex flex-col gap-[8px] items-center lg:items-start order-1 lg:order-2 text-center lg:text-left">
          <h1 className="flex items-center gap-[10px] text-4xl lg:text-[44.8px] font-heading font-bold text-primary leading-[55px]">
            Hi, I'm Suyal
            <span role="img" aria-label="waving hand" className="text-3xl lg:text-[35px] mt-1">👋</span>
          </h1>

          <div className="flex flex-col items-center lg:items-start w-full relative lg:pl-[80px] lg:pb-[22px]">
            <div className="hidden lg:block absolute left-0 top-[16px] w-[70px] h-[1px] bg-secondary" />
            <p className="text-xl lg:text-[20px] font-body font-extralight text-secondary">
              frontend developer
            </p>
          </div>

          <div className="mt-4 lg:mt-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-[8px] p-[11px] border border-secondary text-primary font-body font-extralight text-[16px] bg-white hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Say Hello!
              <Send size={24} className="text-primary" />
            </a>
          </div>
        </div>

        {/* Image Content - Column 3 */}
        <div className="flex justify-center order-2 lg:order-3">
          <div className="w-[203.43px] h-[206.86px] flex items-center justify-center relative">
            <div className="w-[200px] h-[200px] -rotate-2">
              <div className="w-full h-full rounded-[8px] shadow-[1px_1px_3px_0px_rgba(0,0,0,0.3)] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Yunika"
                  className="w-[150%] h-full max-w-none object-cover -ml-[25%]"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
