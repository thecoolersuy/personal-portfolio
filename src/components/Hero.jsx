import React, { useState } from 'react';
import linkedinDefaultSvg from '../assets/linkedin-default.svg';
import linkedinHoverSvg from '../assets/linkedin-hover.svg';
import githubDefaultSvg from '../assets/github-default.svg';
import githubHoverSvg from '../assets/github-hover.svg';
import twitterDefaultSvg from '../assets/twitter-default.svg';
import twitterHoverSvg from '../assets/twitter-hover.svg';
import mediumDefaultSvg from '../assets/medium-default.svg';
import mediumHoverSvg from '../assets/medium-hover.svg';
import instagramDefaultSvg from '../assets/instagram-default.svg';
import instagramHoverSvg from '../assets/instagram-hover.svg';
import facebookDefaultSvg from '../assets/facebook-default.svg';
import facebookHoverSvg from '../assets/facebook-hover.svg';
import mailDefaultSvg from '../assets/mail-default.svg';
import mailHoverSvg from '../assets/mail-hover.svg';
import wave from '../assets/wave.png';
import picture from "../assets/hero.jpeg"
import send from "../assets/delivery.png"

export default function Hero() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    { default: mailDefaultSvg, hover: mailHoverSvg, href: 'mailto:hello@example.com', label: 'Email', id: 'mail' },
    { default: linkedinDefaultSvg, hover: linkedinHoverSvg, href: '#', label: 'LinkedIn', id: 'linkedin' },
    { default: githubDefaultSvg, hover: githubHoverSvg, href: '#', label: 'GitHub', id: 'github' },
    { default: twitterDefaultSvg, hover: twitterHoverSvg, href: '#', label: 'Twitter', id: 'twitter' },
    { default: instagramDefaultSvg, hover: instagramHoverSvg, href: '#', label: 'Instagram', id: 'instagram' },
    { default: mediumDefaultSvg, hover: mediumHoverSvg, href: '#', label: 'Medium', id: 'medium' },
    { default: facebookDefaultSvg, hover: facebookHoverSvg, href: '#', label: 'Facebook', id: 'facebook' }
  ];

  return (
    <section id="hero" className="w-full min-h-screen bg-surface flex items-center justify-center pt-[96px] pb-[174px] px-4">
      <div className="max-w-[968px] w-full grid grid-cols-[120px_auto_auto] gap-[8px] items-center">

        {/* Social Icons - Column 1 */}
        <div className="flex flex-col gap-[15px] items-end justify-center pr-[87px]">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              aria-label={social.label}
              className="w-[24px] h-[32px] flex items-center justify-center transition-all"
              title={social.label}
              onMouseEnter={() => setHoveredIcon(social.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img 
                src={hoveredIcon === social.id ? social.hover : social.default}
                alt={social.label}
                className="w-[24px] h-auto object-contain transition-all"
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
            <img src={send} alt='send' className="w-[24px] h-[24px]" />
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
