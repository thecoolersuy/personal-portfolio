import linkedinSvg from "../assets/socialmediaicons/linkedin.svg";
import githubSvg from "../assets/socialmediaicons/github.svg";
import twitterSvg from "../assets/socialmediaicons/twitter.svg";
import mailSvg from "../assets/socialmediaicons/mail.svg";
import instagramSvg from "../assets/socialmediaicons/instagram.svg";

export default function Footer() {
  const navigationLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' }
  ];

  const socialLinks = [
    { icon: linkedinSvg, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: githubSvg, label: 'GitHub', href: 'https://github.com' },
    { icon: twitterSvg, label: 'Twitter', href: 'https://twitter.com' },
    { icon: mailSvg, label: 'Email', href: 'mailto:hello@example.com' },
    { icon: instagramSvg, label: 'Instagram', href: 'https://instagram.com' }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#f7f7f7] to-[#b8b1ae] w-full pt-[150px] pb-[64px] px-4 sm:px-[441px]">
      <div className="max-w-[968px] w-full mx-auto flex flex-col gap-[32px]">
        {/* Navigation Links */}
        <nav className="flex gap-[24px] justify-center flex-wrap">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-light text-[#595959] text-[16px] hover:text-[#333] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-[9.6px] justify-center flex-wrap">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="border border-[#1a1a1a] rounded-[6px] w-[40px] h-[39px] flex items-center justify-center hover:bg-[#1a1a1a] transition-all group"
              title={social.label}
            >
              <img 
                src={social.icon} 
                alt={social.label}
                className="w-[20px] h-[20px] group-hover:invert transition-all"
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-light text-[#595959] text-[16px] flex gap-[10px] justify-center flex-wrap">
            <span>©2026</span>
            <span>सुयल</span>
            <span>साहुखल</span>
          </p>
        </div>
      </div>
    </footer>
  );
}