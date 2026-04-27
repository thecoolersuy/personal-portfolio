import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import blogsRanjana from '../assets/ranjanalipiimages/blogsranjanalipi.png';
import leftarrow from '../assets/othericons/left.png';
import rightarrow from '../assets/othericons/right.png';
import { blogsData } from '../data/blogsData';

export default function Blog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const blogs = blogsData;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="blog" className="flex flex-col items-center pb-[32px] pt-[96px] w-full relative">
      <div className="flex flex-col items-center w-full gap-[10px]">
        <h2 className="font-heading font-bold text-[#444] text-[41.6px] text-center ">
          <span>my </span>
          <span>blogs</span>
        </h2>
        <div className="mt-2 flex items-center justify-center">
          <img 
            src={blogsRanjana} 
            alt="blogs in Ranjana Lipi" 
            className="h-[67.5px] w-[120px] object-contain opacity-50" 
          />
        </div>
      </div>

      <div className="relative w-full flex items-center justify-center pt-[20px] px-[41px]">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={32}
          slidesPerView={2}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="w-full max-w-[750px]"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 32,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            }
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id} className="flex justify-center">
              <div className="w-[351px] bg-white border border-[rgba(0,0,0,0.1)] rounded-[3px] shadow-[2px_3px_5px_0px_#f0e9e6] p-[32px] flex flex-col gap-[15px]">
                <div className="h-[190px] w-full bg-gray-100 rounded-[3px] overflow-hidden flex items-center justify-center shadow-[1px_1px_0px_0px_#808080]">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="pt-[24px]">
                  <h3 className="font-light text-[#333] text-[18.7px] mb-[16px]">{blog.title}</h3>
                  <p className="font-light text-[#595959] text-[16px] leading-normal line-clamp-4">
                    {blog.description}
                  </p>
                </div>

                <a 
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-semibold mt-[16px] border border-[#595959] bg-white  px-[10px] py-[11px] text-[#333] text-[16px] font-light hover:bg-[#f0e9e6] hover:border-[#795547] hover:shadow-[3px_3px_0px_0px_#795547] transition-all text-center w-[100px]"
                >
                  <span>Read Blog</span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          ref={prevRef}
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="absolute left-4 md:left-[320px] bg-[rgba(236,234,248,0.5)] hover:bg-[rgba(236,234,248,0.7)] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center text-[#795547] text-[22px] font-normal transition-colors top-1/2 -translate-y-1/2 z-10"
        >
          <img src={leftarrow} alt="previous" />
        </button>
        <button
          ref={nextRef}
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="absolute right-4 md:right-[330px] bg-[rgba(236,234,248,0.5)] hover:bg-[rgba(236,234,248,0.7)] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center text-[#795547] text-[22px] font-normal transition-colors top-1/2 -translate-y-1/2 z-10"
        >
          <img src={rightarrow} alt="next" />
        </button>
      </div>
      <div className="flex gap-[8px] justify-center mt-[20px] pt-[10px]">
        {Array.from({ length: isMobile ? blogs.length : Math.max(0, blogs.length - 1) }).map((_, index) => (
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