
import React from 'react';
import BlurText from './BlurText';

const TeamMember: React.FC<{
  name: string;
  role: string;
  description: string;
  linkedInUrl?: string;
}> = ({ name, role, description, linkedInUrl = "#" }) => (
  <article className="flex flex-col gap-4">
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 flex-shrink-0"></div>
        <div>
          <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight font-display">{name}</h3>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <a aria-label="LinkedIn Profile" className="flex-shrink-0" href={linkedInUrl}>
        <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center group hover:scale-110 transition-transform">
          <span className="text-primary font-bold text-sm pb-[2px]">in</span>
        </div>
      </a>
    </div>
    <hr className="border-t border-gray-400 dark:border-gray-600 w-full" />
    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-light">
      {description}
    </p>
  </article>
);

const AboutUs: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24" id="about-us">
      <header className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
        <div className="bg-primary text-black text-3xl md:text-4xl font-display font-bold px-4 py-1.5 rounded-xl whitespace-nowrap select-none">
          <BlurText text="About us" delay={100} />
        </div>
        <p className="text-base md:text-lg leading-relaxed max-w-3xl text-gray-800 dark:text-gray-300 font-medium">
          Built by engineers and product thinkers who specialize in AI, automation, and scalable customer support systems.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column: Video Placeholder */}
        <section className="w-full min-h-[500px] border-2 border-gray-900 dark:border-gray-200 rounded-[2.5rem] flex items-center justify-center bg-white dark:bg-card-dark relative overflow-hidden shadow-about dark:shadow-about-dark transition-all">
          <div className="flex items-center gap-1 scale-125 md:scale-150 select-none">
            <span className="font-logo font-medium text-4xl tracking-tighter text-gray-900 dark:text-white">You</span>
            <div className="bg-[#FF0000] text-white px-3 py-0 rounded-xl flex items-center justify-center">
              <span className="font-logo font-medium text-4xl tracking-tighter relative top-[1px]">Tube</span>
            </div>
          </div>
          {/* Overlay to hint at video coming soon */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/5 dark:bg-white/5 opacity-0 hover:opacity-100 transition-opacity">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Video Content Coming Soon</span>
          </div>
        </section>

        {/* Right Column: Team Members */}
        <section className="w-full border-2 border-gray-900 dark:border-gray-200 rounded-[2.5rem] bg-white dark:bg-card-dark p-6 sm:p-10 flex flex-col gap-10 shadow-about dark:shadow-about-dark">
          <TeamMember
            name="Subhan Acherjee"
            role="Founder & CEO"
            description="Builds and leads Eshura with a focus on product development and scalable software systems. Handles customer accounts and ensures ideas turn into reliable, real-world solutions."
          />
          <TeamMember
            name="Asutosh Sidhya"
            role="Co-Founder & Lead AI Engineer"
            description="Designs and builds AI agents and automation systems. Focused on creating practical, production-ready AI that solves real business problems."
          />
          <TeamMember
            name="Sayandip Bar"
            role="Co-Founder & Project Manager"
            description="Manages projects, timelines, and client communication. Also leads sales and social media to keep teams aligned with business goals."
          />
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
