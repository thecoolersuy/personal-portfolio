import React from 'react';
import linkedinSvg from '../assets/linkedin.svg';
import githubSvg from '../assets/github.svg';
import twitterSvg from '../assets/twitter.svg';
import mediumSvg from '../assets/medium.svg';
import instagramSvg from '../assets/instagram.svg';
import facebookSvg from '../assets/facebook.svg';
import mailSvg from '../assets/mail.svg';
import wave from '../assets/wave.png';
import picture from "../assets/hero.jpeg"

export default function Hero() {
  const socialLinks = [
    { icon: mailSvg, href: 'mailto:hello@example.com', label: 'Email' },
    { icon: linkedinSvg, href: '#', label: 'LinkedIn' },
    { icon: githubSvg, href: '#', label: 'GitHub' },
    { icon: twitterSvg, href: '#', label: 'Twitter' },
    { icon: instagramSvg, href: '#', label: 'Instagram' },
    { icon: mediumSvg, href: '#', label: 'Medium' },
    { icon: facebookSvg, href: '#', label: 'Facebook' }
  ];

  return (
    <section id="hero" className="w-full min-h-screen bg-surface flex items-center justify-center pt-[96px] pb-[174px] px-4">
      <div className="max-w-[968px] w-full grid grid-cols-[120px_auto_auto] gap-[8px] items-center">

        {/* Social Icons - Column 1 */}
        <div className="flex flex-col gap-[9.2px] items-end justify-center pr-[87px]">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="w-[24px] h-[32px] flex items-center justify-center hover:opacity-70 transition-opacity"
              title={social.label}
            >
              <img 
                src={social.icon} 
                alt={social.label}
                className="w-[24px] h-auto object-contain"
              />
            </a>
          ))}
        </div>

        {/* Text Content - Column 2 */}
        <div className="flex flex-col gap-[4px] items-start">
          {/* Heading */}
          <div className="h-[55px] w-full flex items-center gap-[10px]">
            <h1 className="font-heading font-bold text-[44.8px] text-[#333] leading-[55px] ">
              Hi, I'm
            </h1>
            <h1 className="font-heading font-bold text-[44.8px] text-[#333] leading-[55px] ">
              Suyal
            </h1>
            <img src={wave} alt="wave" className="w-[35px] h-[35px]" />
          </div>

          {/* Subtitle */}
          <div className="flex items-center w-full pb-[22px] relative">
            <div className="absolute left-0 top-[16px] w-[70px] h-px bg-[#595959]" />
            <p className="font-body font-medium text-[20px] text-[#595959] font-extralight pl-[80px]">
              frontend developer
            </p>
          </div>

          {/* CTA Button */}
          <button className="flex items-center gap-[8px] px-[11px] py-[11px] bg-white border border-[#595959] text-[#333] font-light text-[16px] font-['Nunito:ExtraLight',sans-serif] hover:bg-gray-50 transition-colors">
            <span>Say Hello!</span>
            <svg 
              className="w-[24px] h-[24px]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Profile Image - Column 3 */}
        <div className="flex items-center justify-center h-[206.858px] w-[203.43px]">
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

      </div>
    </section>
  );
}
