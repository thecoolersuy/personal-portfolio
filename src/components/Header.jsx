import { useState } from "react";
import mailIcon from "../assets/socialmediaicons/mail-default.svg";
import mailHoverIcon from "../assets/othericons/email-bright.svg";
import githubIcon from "../assets/socialmediaicons/github-default.svg";
import githubHoverIcon from "../assets/socialmediaicons/github-hover.svg";
import linkedinIcon from "../assets/socialmediaicons/linkedin-default.svg";
import linkedinHoverIcon from "../assets/socialmediaicons/linkedin-hover.svg";
import mediumIcon from "../assets/socialmediaicons/medium-default.svg";
import mediumHoverIcon from "../assets/socialmediaicons/medium-hover.svg";

export default function Header() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    {
      label: "Email",
      href: "/#about",
      icon: mailIcon,
      hoverIcon: mailHoverIcon,
    },
    {
      label: "GitHub",
      href: "https://github.com/thecoolersuy",
      icon: githubIcon,
      hoverIcon: githubHoverIcon,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/suyal-sahukhal-259a1b333/",
      icon: linkedinIcon,
      hoverIcon: linkedinHoverIcon,
    },
    {
      label: "Medium",
      href: "https://medium.com/@suyalsahukhala787",
      icon: mediumIcon,
      hoverIcon: mediumHoverIcon,
    },
  ];

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 2.5px;
          border-radius: 1.25px;
          background-color: #1f6feb;
          transform: translateX(-50%);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
      <header className="w-full fixed top-0 left-0 right-0 z-50 border-b border-[#3d444d] bg-[#0d1117] backdrop-blur-sm">
        <div className="w-full max-w-[1200px] mx-auto min-h-[70px] md:h-[68px] flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8 py-3 md:py-0 gap-4 md:gap-0 ">
          <nav className="flex pt-3 md:pt-0 gap-[20px] md:gap-[20px] items-center text-left">
            <a
              href="#"
              className="nav-link font-body font-semibold text-[#f0f6fc] text-[16px] leading-normal hover:text-[#1f6feb]"
            >
              Home
            </a>
            <a
              href="#about"
              className="nav-link font-body font-semibold text-[#f0f6fc] text-[16px] leading-normal hover:text-[#1f6feb]"
            >
              About
            </a>
            <a
              href="#experience"
              className="nav-link font-body font-semibold text-[#f0f6fc] text-[16px] leading-normal hover:text-[#1f6feb]"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="nav-link font-body font-semibold text-[#f0f6fc] text-[16px] leading-normal hover:text-[#1f6feb]"
            >
              Projects
            </a>
            <a
              href="#blog"
              className="nav-link font-body font-semibold text-[#f0f6fc] text-[16px] leading-normal hover:text-[#1f6feb]"
            >
              Blog
            </a>
          </nav>
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                title={social.label}
                className="w-[28px] h-[28px] flex items-center justify-center transition-opacity hover:opacity-70"
                onMouseEnter={() => setHoveredIcon(social.label)}
                onMouseLeave={() => setHoveredIcon(null)}
                {...(social.label !== "Email" && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <img
                  src={
                    hoveredIcon === social.label
                      ? social.hoverIcon
                      : social.icon
                  }
                  alt=""
                  className="w-[21px] h-[21px] md:w-[23px] md:h-[23px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
