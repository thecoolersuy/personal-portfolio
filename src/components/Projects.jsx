import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import leftarrow from '../assets/left.png';
import rightarrow from '../assets/right.png';
import projectsRanjana from '../assets/projectsranjanalipi.png';
import send from "../assets/delivery.png"

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const projects = [
    {
      id: 1,
      name: "Edavor",
      description: "An AI-based legal tech platform that helps individuals understand their rights through simple, accessible legal information in their own language. It also supports legal teams with faster and smarter research tools and real-time legal updates.",
      image: "https://via.placeholder.com/391x257",
      link: "#",
      featured: true
    },
    {
      id: 2,
      name: "Major Project",
      image: "https://via.placeholder.com/391x257",
      link: "#"
    },
    {
      id: 3,
      name: "Niti",
      image: "https://via.placeholder.com/391x257",
      link: "#"
    },
    {
      id: 4,
      name: "Fall Detection",
      image: "https://via.placeholder.com/391x257",
      link: "#"
    },
    {
      id: 5,
      name: "Newsly",
      image: "https://via.placeholder.com/391x257",
      link: "#"
    },
    {
      id: 6,
      name: "Sahayatri",
      image: "https://via.placeholder.com/391x257",
      link: "#"
    },
    {
      id: 7,
      name: "Maitrika",
      image: "https://via.placeholder.com/391x257",
      link: "#"
    },
    {
      id: 8,
      name: "Project 1",
      image: "https://via.placeholder.com/391x257",
      link: "#"
    },
    {
      id: 9,
      name: "Project 2",
      image: "https://via.placeholder.com/391x257",
      link: "#"
    },
    {
      id: 10,
      name: "Project 3",
      image: "https://via.placeholder.com/391x257",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="flex flex-col items-center pb-[32px] pt-[96px] w-full relative">
      <div className="flex flex-col items-center w-full">
        <h2 className="font-heading font-bold text-[#444] text-[41.6px] text-center ">
          projects
        </h2>
        <div className="mt-2 flex items-center justify-center">
          <img 
            src={projectsRanjana} 
            alt="projects in Ranjana Lipi" 
            className="h-[67.5px] w-[120px] object-contain opacity-50" 
          />
        </div>
      </div>

      <div className="relative w-full flex items-center justify-center pt-[15px] px-4">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="w-full max-w-[668px]"
          centeredSlides={true}
          centeredSlidesBounds={true}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="flex justify-center">
              <div className="w-full bg-white rounded-[3px] p-[25px] flex flex-col gap-[15px]">
                <div className="h-[257px] w-full bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-light text-[#333] text-[24px] mb-[4px]">{project.name}</h3>
                  {project.description && (
                    <p className="font-light text-[#333] text-[17.6px] leading-normal">
                      {project.description}
                    </p>
                  )}
                </div>
                {project.featured && (
                  <button className="w-fit border border-[#595959] bg-white rounded px-[11px] py-[11px] flex items-center gap-[8px] text-[#333] text-[16px] font-light hover:bg-gray-50 transition-colors">
                    <span>Try app</span>
                    <img src={send} alt='send' className="w-[24px] h-[24px]"  />
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="absolute left-[362px] bg-[rgba(236,234,248,0.5)] hover:bg-[rgba(236,234,248,0.7)] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center text-[#795547] text-[22px] font-normal transition-colors top-1/2 -translate-y-1/2 z-10"
        >
          <img src={leftarrow} alt="Previous" />
        </button>
        <button
          ref={nextRef}
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="absolute right-[362px] bg-[rgba(236,234,248,0.5)] hover:bg-[rgba(236,234,248,0.7)] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center text-[#795547] text-[22px] font-normal transition-colors top-1/2 -translate-y-1/2 z-10"
        >
          <img src={rightarrow} alt="Next" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-[8px] justify-center mt-[20px] pt-[10px]">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              swiperRef.current?.swiper.slideTo(index);
              setActiveIndex(index);
            }}
            className={`rounded-full w-[25px] h-[25px] transition-all ${
              index === activeIndex
                ? 'bg-[#b8b1ae]'
                : 'bg-[#b8b1ae] opacity-20 hover:opacity-40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}