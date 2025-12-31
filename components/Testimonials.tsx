
import React, { useState, useRef, useEffect, useCallback } from 'react';
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

  const getItemWidth = useCallback(() => {
    if (!scrollRef.current) return 0;
    // On mobile, full width. On desktop, 600px cards
    return window.innerWidth >= 768 ? 600 + 32 : scrollRef.current.offsetWidth; // 600px + 32px gap
  }, []);

  const scrollTo = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const itemWidth = getItemWidth();
    scrollRef.current.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  }, [getItemWidth]);

  const next = useCallback(() => {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    scrollTo(nextIndex);
  }, [activeIndex, scrollTo]);

  const prev = useCallback(() => {
    const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    scrollTo(prevIndex);
  }, [activeIndex, scrollTo]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prev();
    } else if (e.key === 'ArrowRight') {
      next();
    }
  }, [prev, next]);

  // Sync index on manual scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollPos = scrollRef.current.scrollLeft;
      const itemWidth = getItemWidth();
      if (itemWidth === 0) return;
      const newIndex = Math.round(scrollPos / itemWidth);
      if (newIndex !== activeIndex && newIndex < testimonials.length && newIndex >= 0) {
        setActiveIndex(newIndex);
      }
    };

    const container = scrollRef.current;
    container?.addEventListener('scroll', handleScroll, { passive: true });
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [activeIndex, getItemWidth]);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24" aria-labelledby="testimonials-heading">
      <header className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
        <h2 id="testimonials-heading" className="bg-primary text-black text-3xl md:text-4xl font-display font-bold px-4 py-1.5 rounded-xl select-none">
          <BlurText text="Testimonials" delay={100} />
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-md font-light">
          Real feedback from teams using our AI agents in production.
        </p>
      </header>

      <div
        className="relative bg-card-dark rounded-4xl p-8 md:p-16 lg:p-20 w-full overflow-hidden shadow-2xl"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Customer testimonials"
      >
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-proximity py-4"
          role="list"
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex-none w-full md:w-[600px] snap-center"
              role="listitem"
              aria-label={`Testimonial ${idx + 1} of ${testimonials.length}`}
            >
              <div className="speech-bubble bg-transparent p-8 md:p-12 mb-12 min-h-[220px] flex items-center">
                <blockquote className="text-white text-base md:text-xl leading-relaxed italic">
                  "{item.text}"
                </blockquote>
              </div>
              <div className="pl-12">
                <cite className="not-italic">
                  <span className="text-primary font-bold text-xl font-display block">{item.name}</span>
                  <span className="text-white font-light text-sm opacity-80">{item.role}</span>
                </cite>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="flex gap-6 items-center order-2 md:order-1" role="group" aria-label="Testimonial navigation">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="text-gray-400 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full p-1"
            >
              <span className="material-icons text-3xl" aria-hidden="true">arrow_back</span>
            </button>

            <div className="flex gap-3" role="tablist" aria-label="Select testimonial">
              {testimonials.map((_, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  role="tab"
                  aria-selected={activeIndex === idx}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${activeIndex === idx ? 'bg-primary' : 'bg-white opacity-30 hover:opacity-100'}`}
                ></button>
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="text-gray-400 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full p-1"
            >
              <span className="material-icons text-3xl" aria-hidden="true">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Gradients to hide edge overflow softly */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-card-dark to-transparent pointer-events-none" aria-hidden="true"></div>
        <div className="absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-card-dark to-transparent pointer-events-none" aria-hidden="true"></div>
      </div>
    </section>
  );
};

export default Testimonials;
