import linkedinSvg from "../assets/socialmediaicons/linkedin.svg";
import githubSvg from "../assets/socialmediaicons/github.svg";
import twitterSvg from "../assets/socialmediaicons/twitter.svg";
import mailSvg from "../assets/socialmediaicons/mail.svg";
import instagramSvg from "../assets/socialmediaicons/instagram.svg";
import mailIcon from "../assets/socialmediaicons/mail-default.svg";
import mailHoverIcon from "../assets/socialmediaicons/mail-hover.svg";
import githubIcon from "../assets/socialmediaicons/github-default.svg";
import githubHoverIcon from "../assets/socialmediaicons/github-hover.svg";
import linkedinIcon from "../assets/socialmediaicons/linkedin-default.svg";
import linkedinHoverIcon from "../assets/socialmediaicons/linkedin-hover.svg";
import mediumIcon from "../assets/socialmediaicons/medium-default.svg";
import mediumHoverIcon from "../assets/socialmediaicons/medium-hover.svg";

export default function Footer() {
  const navigationLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ];

  const socialLinks = [
    {
      icon: mailIcon,
      hoverIcon: mailHoverIcon,
      label: "Email",
      href: "mailto:suyal.sahukhal@gmail.com",
    },
    {
      icon: linkedinIcon,
      hoverIcon: linkedinHoverIcon,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/suyal-sahukhal-259a1b333/",
    },
    {
      icon: githubIcon,
      hoverIcon: githubHoverIcon,
      label: "GitHub",
      href: "https://github.com/thecoolersuy",
    },
    {
      icon: mediumIcon,
      hoverIcon: mediumHoverIcon,
      label: "Medium",
      href: "https://medium.com/@suyalsahukhala787",
    },
  ];

  return (
    <footer className="bg-[#0a192f]  w-full pt-[150px] pb-[64px] px-4 sm:px-[441px]">
      <div className="max-w-[968px] w-full mx-auto flex flex-col gap-[32px]">
        <nav className="flex gap-[24px] justify-center flex-wrap">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-light text-[#7b85a2] text-[16px] hover:text-[#333] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-[9.6px] justify-center flex-wrap">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              {...(social.label !== "Email" && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              aria-label={social.label}
              className=" rounded-[6px] w-[40px] h-[39px] flex items-center justify-center transition-all group"
              title={social.label}
            >
              <img
                src={social.icon}
                alt={social.label}
                className="w-[20px] h-[20px]  transition-all"
              />
            </a>
          ))}
        </div>
        <div className="text-center">
          <p className="font-light text-[#7b85a2] text-[16px] flex gap-[10px] justify-center flex-wrap">
            <span>©2025</span>
            <span>सुयल</span>
            <span>साहुखल</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
