
import React, { useState, useRef, useEffect } from 'react';
import BlurText from './BlurText';

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "CTO at TechFlow Inc.",
    text: "We have been working with Eshura for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business."
  },
  {
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
    text: "The AI agent integrated into our store has reduced our support workload by 60%. It's fast, accurate, and speaks exactly like our brand. We highly recommend Eshura to any company looking to grow their online presence and automate support."
  },
  {
    name: "Emily Chen",
    role: "VP of Operations at ScaleUp",
    text: "Our customer support efficiency doubled within two months of integrating the AI agents. The automated responses are incredibly natural, and our customers love the instant support. It's been a game-changer for our operational scalability."
  },
  {
    name: "Michael Ross",
    role: "Founder of Ross Analytics",
    text: "Training the AI on our custom documentation was seamless. It understands complex technical queries that even our human agents sometimes struggle with. A top-tier product from a top-tier team."
  },
  {
    name: "Jessica Wu",
    role: "Support Lead at CloudSphere",
    text: "Eshura transformed how we handle peak traffic. Instead of hiring more agents, we deployed a RAG system that handles 80% of common queries instantly. Our CSAT scores have never been higher."
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const itemWidth = scrollRef.current.offsetWidth / (window.innerWidth >= 768 ? 1.5 : 1);
    scrollRef.current.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  const next = () => {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    scrollTo(nextIndex);
  };

  const prev = () => {
    const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    scrollTo(prevIndex);
  };

  // Sync index on manual scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollPos = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.offsetWidth / (window.innerWidth >= 768 ? 1.5 : 1);
      const newIndex = Math.round(scrollPos / itemWidth);
      if (newIndex !== activeIndex && newIndex < testimonials.length) {
        setActiveIndex(newIndex);
      }
    };

    const container = scrollRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
      <header className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
        <div className="bg-primary text-black text-3xl md:text-4xl font-display font-bold px-4 py-1.5 rounded-xl select-none">
          <BlurText text="Testimonials" delay={100} />
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-md font-light">
          Real feedback from teams using our AI agents in production.
        </p>
      </header>

      <div className="relative bg-card-dark rounded-4xl p-8 md:p-16 lg:p-20 w-full overflow-hidden shadow-2xl">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4"
        >
          {testimonials.map((item, idx) => (
            <div key={idx} className="flex-none w-full md:w-[600px] snap-center">
              <div className="speech-bubble bg-transparent p-8 md:p-12 mb-12 min-h-[220px] flex items-center">
                <p className="text-white text-base md:text-xl leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>
              <div className="pl-12">
                <h4 className="text-primary font-bold text-xl font-display">{item.name}</h4>
                <p className="text-white font-light text-sm opacity-80">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="flex gap-6 items-center order-2 md:order-1">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="text-gray-400 hover:text-primary transition-colors focus:outline-none"
            >
              <span className="material-icons text-3xl">arrow_back</span>
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-primary' : 'bg-white opacity-30 hover:opacity-100'}`}
                ></button>
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="text-gray-400 hover:text-primary transition-colors focus:outline-none"
            >
              <span className="material-icons text-3xl">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Gradients to hide edge overflow softly */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-card-dark to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-card-dark to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Testimonials;
