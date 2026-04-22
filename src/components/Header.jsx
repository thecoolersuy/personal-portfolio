export default function Header() {
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
          background-color: #795547;
          transform: translateX(-50%);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
      <header className="w-full fixed top-0 left-0 right-0 z-50 bg-surface backdrop-blur-sm">
        <div className="w-full max-w-[1200px] mx-auto h-[72px] flex items-center justify-center px-4 md:px-8">
          <nav className="flex gap-[16px] md:gap-[32px] items-center text-center">
            <a href="#" className="nav-link font-body font-semibold text-[#1a1a1a] text-[16px] leading-normal hover:text-black">
              home
            </a>
            <a href="#about" className="nav-link font-body font-semibold text-secondary text-[16px] leading-normal hover:text-[#1a1a1a]">
              about
            </a>
            <a href="#experience" className="nav-link font-body font-semibold text-secondary text-[16px] leading-normal hover:text-[#1a1a1a]">
              experience
            </a>
            <a href="#projects" className="nav-link font-body font-semibold text-secondary text-[16px] leading-normal hover:text-[#1a1a1a]">
              projects
            </a>
            <a href="#blog" className="nav-link font-body font-semibold text-secondary text-[16px] leading-normal hover:text-[#1a1a1a]">
              blog
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
