export default function Header() {
  return (
    <header className="w-full bg-surface flex justify-center sticky top-0 z-50">
      <div className="w-full max-w-[968px] h-[72px] flex items-center justify-center px-4 md:px-8">
        <nav className="flex gap-[16px] md:gap-[32px] items-center text-center">
          <a href="#" className="font-body font-bold text-[#1a1a1a] text-[16px] leading-normal transition-colors hover:text-black">
            home
          </a>
          <a href="#about" className="font-body font-bold text-secondary text-[16px] leading-normal transition-colors hover:text-[#1a1a1a]">
            about
          </a>
          <a href="#experience" className="font-body font-bold text-secondary text-[16px] leading-normal transition-colors hover:text-[#1a1a1a]">
            experience
          </a>
          <a href="#projects" className="font-body font-bold text-secondary text-[16px] leading-normal transition-colors hover:text-[#1a1a1a]">
            projects
          </a>
          <a href="#blog" className="font-body font-bold text-secondary text-[16px] leading-normal transition-colors hover:text-[#1a1a1a]">
            blog
          </a>
        </nav>
      </div>
    </header>
  );
}
