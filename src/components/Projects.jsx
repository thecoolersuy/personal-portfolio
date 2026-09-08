import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import leftarrow from "../assets/othericons/left.png";
import rightarrow from "../assets/othericons/right.png";
import projectsRanjana from "../assets/ranjanalipiimages/projectsranjanalipi.png";
import send from "../assets/othericons/linkopen.svg";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const projects = projectsData;

  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return (
        <ul className="list-disc pl-5 font-light text-[#7b85a2] text-[17.6px] leading-normal space-y-1">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }

    if (typeof description === "string") {
      const bulletItems = description
        .split(/\n/)
        .map((line) => line.trim())
        .filter((line) => line.startsWith("•") || line.startsWith("-"))
        .map((line) => line.replace(/^[-•]\s*/, "").trim())
        .filter(Boolean);

      if (bulletItems.length > 0) {
        return (
          <ul className="list-disc pl-5 font-light text-[#7b85a2] text-[17.6px] leading-normal space-y-1">
            {bulletItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      }

      return (
        <p className="font-light text-[#333333] text-[17.6px] leading-normal">
          {description}
        </p>
      );
    }

    return null;
  };
  const renderButtons = (button, link) => {
    if (Array.isArray(button) && Array.isArray(link)) {
      return (
        <ul className="flex gap-3 flex-wrap">
          {button.map((button, index) => (
            <li key={index} className="mt-[12px]">
              <a
                href={link[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit border-2 border-[#010409] bg-[#ccd6f6]  px-[11px] py-[11px] flex items-center gap-[8px] text-[#0a192f] text-[16px] font-light  hover:border-[#010409] hover:shadow-[5px_5px_0px_0px_#010409] transition-all no-underline"
              >
                <span className="font-body font-semibold">{button}</span>
                <img src={send} alt="send" className="w-[24px] h-[24px]" />
              </a>
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center pb-[32px] pt-[96px] w-full relative scroll-mt-[50px] md:scroll-mt-[0px]"
    >
      <div className="flex flex-col items-center w-full mb-8 md:mb-8">
        <h2 className="font-heading font-bold text-[#f0f6fc] text-[41.6px] text-center ">
          projects
        </h2>
        <h2 className="ranjana font-bold text-[#f0f6fc] text-[32px] text-center ">
          योजना
        </h2>
      </div>

      <div className="relative w-full flex items-center justify-center pt-[15px] px-4">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={24}
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
              <div className="w-full bg-[#151b23] rounded-[3px] p-[25px] flex flex-col gap-[15px] ">
                <div className="h-[360px] w-full  rounded overflow-hidden flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-body font-semibold text-[#f0f6fc] text-[24px] mb-[4px]">
                    {project.name}
                  </h3>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-[8px] mb-[12px]">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="font-body font-semibold bg-[#ccd6f6] px-[6px] py-[5px] rounded-[2px] text-[14px]  text-[#010409] "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.description &&
                    renderDescription(project.description)}
                </div>
                {project.featured &&
                  renderButtons(project.button, project.link)}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          ref={prevRef}
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="absolute left-4 md:left-[362px] bg-[#484848] hover:bg-[#ffffff] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center text-[#795547] text-[22px] font-normal transition-colors top-1/2 -translate-y-1/2 z-10"
        >
          <img src={leftarrow} alt="Previous" />
        </button>
        <button
          ref={nextRef}
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="absolute right-4 md:right-[362px] bg-[#484848] hover:bg-[#ffffff] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center text-[#795547] text-[22px] font-normal transition-colors top-1/2 -translate-y-1/2 z-10"
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
                ? "bg-[#f0f6fc]"
                : "bg-[#f0f6fc] opacity-20 hover:opacity-40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
