import React, { useState } from 'react';
import experienceRanjana from '../assets/ranjanalipiimages/experienceranjanalipi.png';
import educationIcon from '../assets/othericons/education.png';
import experienceIcon from '../assets/othericons/rocket.png';
import volunteeringIcon from '../assets/othericons/volunteering.png';
import awardIcon from '../assets/othericons/award.png';
import dropdownIcon from '../assets/othericons/dropdown.png';
import { experiencesData } from '../data/experiencesData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState("Experience");
  const [expandedCard, setExpandedCard] = useState(null);
  const experiences = experiencesData;
  const filteredExperiences = experiences.filter(exp => exp.type === activeTab);

  return (
    <>
      <style>{`
        .tab-link {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
        }
        .tab-link::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          width: 0;
          height: 2.5px;
          border-radius: 1.25px;
          background-color: #795547;
          transform: translateX(-50%);
          transition: width 0.3s ease;
        }
        .tab-link:hover::after {
          width: 100%;
        }
      `}</style>
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
        <div className="flex w-full justify-between sm:justify-center sm:gap-4 border-b border-gray-200 pb-4">
          <button
            onClick={() => setActiveTab("Education")}
            className={`tab-link cursor-pointer transition-colors ${
              activeTab === "Education" ? "active text-[#795547]" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <img src={educationIcon} alt="Education" className="h-[21px] w-[20px] mb-2 object-contain" />
            <span className="font-body font-semibold text-[16px] px-2 py-1">Education</span>
          </button>
          <button
            onClick={() => setActiveTab("Experience")}
            className={`tab-link cursor-pointer transition-colors ${
              activeTab === "Experience" ? "active text-[#795547]" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <img src={experienceIcon} alt="Experience" className="h-[21px] w-[20px] mb-2 object-contain" />
            <span className="font-body font-semibold text-[16px] px-2 py-1">Experience</span>
          </button>
          <button
            onClick={() => setActiveTab("Volunteering")}
            className={`tab-link cursor-pointer transition-colors ${
              activeTab === "Volunteering" ? "active text-[#795547]" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <img src={volunteeringIcon} alt="Volunteering" className="h-[21px] w-[20px] mb-2 object-contain" />
            <span className="font-body font-semibold text-[16px] px-2 py-1">Volunteering</span>
          </button>
          <button
            onClick={() => setActiveTab("Award")}
            className={`tab-link cursor-pointer transition-colors ${
              activeTab === "Award" ? "active text-[#795547]" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <img src={awardIcon} alt="Award" className="h-[21px] w-[20px] mb-2 object-contain" />
            <div className="flex flex-row items-center">
              <span className="font-body font-semibold text-[16px]">Award</span>
              <span className="text-[10px] mx-1">⬥</span>
              <span className="text-[16px] font-body font-semibold">Scholarship</span>
            </div>
          </button>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {filteredExperiences.map((exp, index) => (
            <div key={index}>
              <button
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                className="bg-white flex items-center p-[18px] rounded-t-[5px] shadow-[0px_4px_12px_0px_rgba(60,60,90,0.12)] w-full hover:shadow-[0px_6px_16px_0px_rgba(60,60,90,0.15)] transition-shadow relative z-10"
              >
                <div className="size-[35px] shadow-[0px_2px_12px_0px_rgba(60,60,90,0.08),0px_1px_2px_0px_rgba(60,60,90,0.04)] rounded-[2px] overflow-hidden">
                  <img src={exp.logo} alt={exp.company} className="size-[35px] rounded-[5px] object-cover" />
                </div>
                <div className="flex flex-col items-start pl-[25px] pr-[15px] flex-grow">
                  <h3 className="font-body font-semibold text-[#333333] text-[18.7px] leading-tight mb-1">{exp.role}</h3>
                  <p className="font-body font-light text-[#595959] text-[16px] leading-tight mb-1">{exp.company}</p>
                  <span className="font-light text-[#595959] text-[13px]">{exp.date}</span>
                </div>
                {exp.description && (
                  <div className={`flex items-center justify-center w-[30px] h-[30px]  ${expandedCard === index ? 'rotate-180' : ''}`}>
                    <img src={dropdownIcon} alt="Toggle details" className="w-[15px] h-[15px] object-contain" />
                  </div>
                )}
              </button>
              {exp.description && expandedCard === index && (
                <div className="bg-white flex flex-col items-start pb-[15px] pl-[40px] pr-[25px] pt-[25px] rounded-bl-[5px] rounded-br-[5px] shadow-[0px_2px_12px_0px_rgba(60,60,90,0.08),0px_1px_2px_0px_rgba(60,60,90,0.04)] w-full animate-in fade-in duration-300 relative -mt-[1px]">
                  <ul className="space-y-[10px] w-full">
                    {exp.description.map((point, idx) => (
                      <li key={idx} className="font-body font-light text-[#595959] text-[16px] leading-relaxed flex gap-[10px]">
                        <span className="text-[#795547] font-bold mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}