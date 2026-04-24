import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import leftarrow from '../assets/othericons/left.png';
import rightarrow from '../assets/othericons/right.png';
import projectsRanjana from '../assets/ranjanalipiimages/projectsranjanalipi.png';
import send from "../assets/othericons/delivery.png"
import { projectsData } from '../data/projectsData';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const projects = projectsData;

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

                <div className='flex flex-col gap-3'>
                  <h3 className="font-body font-semibold text-[#333333] text-[24px] mb-[4px]">{project.name}</h3>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-[8px] mb-[12px]">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-[#f0e9e6] px-[6px] py-[5px] rounded-[2px] text-[14px] font-light text-[#1a1a1a] shadow-[1px_1px_1px_0px_#795547]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.description && (
                    <p className="font-light text-[#333333] text-[17.6px] leading-normal">
                      {project.description}
                    </p>
                  )}
                </div>
                {project.featured && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit border border-[#595959] bg-white  px-[11px] py-[11px] flex items-center gap-[8px] text-[#333] text-[16px] font-light hover:bg-[#f0e9e6] hover:border-[#795547] hover:shadow-[3px_3px_0px_0px_#795547] transition-all no-underline"
                  >
                    <span className='font-body font-semibold'>{project.button}</span>
                    <img src={send} alt='send' className="w-[24px] h-[24px]"  />
                  </a>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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