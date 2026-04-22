import React from 'react';
import experienceRanjana from '../assets/ranjanalipiimages/experienceranjanalipi.png';
import educationIcon from '../assets/othericons/education.png';
import experienceIcon from '../assets/othericons/rocket.png';
import volunteeringIcon from '../assets/othericons/volunteering.png';
import awardIcon from '../assets/othericons/award.png';

export default function Experience() {
  const experiences = [
    {
      role: "Founder, Executive Lead",
      company: "AI Safety Nepal",
      date: "Mar 2026 - Present",
      logo: "https://via.placeholder.com/35",
      type: "Experience"
    },
    {
      role: "Research Fellow",
      company: "AI Safety Saarland - Interdisciplinary Research Incubator",
      date: "Nov 2025 - Present",
      logo: "https://via.placeholder.com/35",
      type: "Experience"
    },
    {
      role: "Machine Learning Engineer",
      company: "REG-1",
      date: "Jun 2024 - Sep 2025",
      logo: "https://via.placeholder.com/35",
      type: "Experience"
    },
    {
      role: "Nabil School of Social Entrepreneurship Fellow",
      company: "Nabil Bank, TU School of Management",
      date: "2023 - 2024",
      logo: "https://via.placeholder.com/35",
      type: "Award"
    }
  ];

  return (
    <section id="experience" className="flex flex-col items-center pb-[32px] pt-[96px] w-full relative">
      <div className="flex flex-col items-center w-full">
        <h2 className="font-heading font-bold text-[#444] text-[41.6px] text-center ">
          experience
        </h2>
        <div className="mt-2 flex items-center justify-center">
          <img 
            src={experienceRanjana} 
            alt="experience in Ranjana Lipi" 
            className="h-[67.5px] w-[120px] object-contain opacity-50" 
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 items-start max-w-[600px] pt-10 w-full px-4">
        {/* Tabs */}
        <div className="flex w-full justify-between sm:justify-center sm:gap-4 border-b border-gray-200 pb-4">
          <div className="flex flex-col items-center text-gray-500 cursor-pointer">
            <img src={educationIcon} alt="Education" className="h-[21px] w-[20px] mb-2 object-contain" />
            <span className=" ont-body font-semibold text-[#1f1f1f] text-[16px] px-2 py-1">Education</span>
          </div>
          <div className=" ont-body font-semibold text-[#1f1f1f] flex flex-col items-center text-[#795547] border-b-2 border-[#795547] cursor-pointer">
            <img src={experienceIcon} alt="Experience" className="h-[21px] w-[20px] mb-2 object-contain" />
            <span className="text-[16px] px-2 py-1 text-[#795547]">Experience</span>
          </div>
          <div className=" font-body font-semibold text-[#1f1f1f] flex flex-col items-center text-gray-500 cursor-pointer">
            <img src={volunteeringIcon} alt="Volunteering" className="h-[21px] w-[20px] mb-2 object-contain" />
            <span className="text-[16px] px-2 py-1 text-[#1f1f1f]">Volunteering</span>
          </div>
          <div className="flex flex-col items-center text-[#1f1f1f] cursor-pointer">
            <img src={awardIcon} alt="Award" className="h-[21px] w-[20px] mb-2 object-contain" />
            <div className="flex flex-row items-center">
              <span className="font-body font-semibold text-[16px]">Award</span>
              <span className="text-[10px] mx-1">⬥</span>
              <span className="text-[16px] font-body font-semibold">Scholarship</span>
            </div>
          </div>
        </div>

        {/* Experience List */}
        <div className="flex flex-col gap-4 w-full">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white flex items-center p-[18px] rounded-[5px] shadow-[0px_2px_12px_0px_rgba(60,60,90,0.08),0px_1px_2px_0px_rgba(60,60,90,0.04)] w-full">
              <img src={exp.logo} alt={exp.company} className="size-[35px] rounded-[5px] object-cover" />
              <div className="flex flex-col items-start pl-[25px] pr-[15px] flex-grow">
                <h3 className="font-body font-semibold text-[#333333] text-[18.7px] leading-tight mb-1">{exp.role}</h3>
                <p className="font-body font-light text-[#595959] text-[16px] leading-tight mb-1">{exp.company}</p>
                <span className="font-light text-[#595959] text-[13px]">{exp.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}