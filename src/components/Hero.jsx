import React, { useState } from "react";
import linkedinDefaultSvg from "../assets/socialmediaicons/linkedin-default.svg";
import linkedinHoverSvg from "../assets/socialmediaicons/linkedin-hover.svg";
import githubDefaultSvg from "../assets/socialmediaicons/github-default.svg";
import githubHoverSvg from "../assets/socialmediaicons/github-hover.svg";
import twitterDefaultSvg from "../assets/socialmediaicons/twitter-default.svg";
import twitterHoverSvg from "../assets/socialmediaicons/twitter-hover.svg";
import mediumDefaultSvg from "../assets/socialmediaicons/medium-default.svg";
import mediumHoverSvg from "../assets/socialmediaicons/medium-hover.svg";
import instagramDefaultSvg from "../assets/socialmediaicons/instagram-default.svg";
import instagramHoverSvg from "../assets/socialmediaicons/instagram-hover.svg";
import facebookDefaultSvg from "../assets/socialmediaicons/facebook-default.svg";
import facebookHoverSvg from "../assets/socialmediaicons/facebook-hover.svg";
import mailDefaultSvg from "../assets/socialmediaicons/mail-default.svg";
import mailHoverSvg from "../assets/socialmediaicons/mail-hover.svg";
import picture from "../assets/othericons/hero.jpeg";
import send from "../assets/othericons/delivery.png";

export default function Hero() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    {
      default: mailDefaultSvg,
      hover: mailHoverSvg,
      href: "/#about",
      label: "Email",
      id: "mail",
    },
    {
      default: linkedinDefaultSvg,
      hover: linkedinHoverSvg,
      href: "https://www.linkedin.com/in/suyal-sahukhal-259a1b333/",
      label: "LinkedIn",
      id: "linkedin",
      target: "_blank",
    },
    {
      default: githubDefaultSvg,
      hover: githubHoverSvg,
      href: "https://github.com/thecoolersuy",
      label: "GitHub",
      id: "github",
      target: "_blank",
    },
    {
      default: twitterDefaultSvg,
      hover: twitterHoverSvg,
      href: "https://x.com/suyal_sahukhal",
      label: "Twitter",
      id: "twitter",
      target: "_blank",
    },
    {
      default: instagramDefaultSvg,
      hover: instagramHoverSvg,
      href: "https://www.instagram.com/suyal_sahukhal/",
      label: "Instagram",
      id: "instagram",
      target: "_blank",
    },
    {
      default: mediumDefaultSvg,
      hover: mediumHoverSvg,
      href: "https://medium.com/@suyalsahukhala787",
      label: "Medium",
      id: "medium",
      target: "_blank",
    },
    {
      default: facebookDefaultSvg,
      hover: facebookHoverSvg,
      href: "https://www.facebook.com",
      label: "Facebook",
      id: "facebook",
      target: "_blank",
    },
  ];

  return (
    <section
      id="hero"
      className="w-full min-h-screen bg-surface flex items-center justify-center pt-[32px] md:pt-[96px] pb-[48px] md:pb-[174px] px-4"
    >
      <div className="max-w-[968px] w-full grid grid-cols-[50px_minmax(0,1fr)] md:grid-cols-[120px_auto_auto] gap-[30px] md:gap-[8px] items-start md:items-center">
        {/* Social Links - Vertical on both mobile and desktop */}
        <div className="flex flex-col gap-[18px] md:gap-[15px] items-end md:items-end justify-start md:justify-center pr-[17px] md:pr-[87px]">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target={social.target}
              rel="noopener noreferrer"
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

        {/* Main Content */}
        <div className="flex flex-col gap-[4px] items-start col-span-1 md:col-span-">
          <div className="relative w-full pb-[22px] group">
            <img
              src="/id-removebg-preview.png"
              alt="ID"
              className="w-[220px] md:w-[320px] h-auto -rotate-6 origin-left"
            />
            <div className="absolute left-[180px] md:left-[250px] top-1/2 -translate-y-1/2 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none">
              <div className="relative bg-[#4d5057] text-white text-[12px] md:text-[14px] leading-snug px-4 py-3 rounded-[12px] max-w-[220px] md:max-w-[300px] shadow-lg">
                hobby: surprising my repo with a 2a.m project
                <span className="absolute -left-[6px] top-1/2 -translate-y-1/2 w-[12px] h-[12px] bg-[#4d5057] rotate-45" />
              </div>
            </div>
          </div>
          <button className="flex items-center gap-[8px] px-[11px] py-[11px] bg-white border border-[#595959] text-[#333] font-light text-[16px] font-['Nunito:ExtraLight',sans-serif] hover:bg-[#f0e9e6] hover:border-[#795547] hover:shadow-[3px_3px_0px_0px_#795547] transition-all">
            <a
              href="https://www.linkedin.com/in/suyal-sahukhal-259a1b333/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-semibold"
            >
              Say Hello!
            </a>
            <img src={send} alt="send" className="w-[25px] h-[25px]" />
          </button>
        </div>

        {/* Profile Picture - Spans both columns */}
        <div className="flex items-center justify-center h-[206.858px] w-[203.43px] col-span-2 md:col-span-1 mx-auto md:mx-0">
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
