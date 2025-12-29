
import React from 'react';
import BlurText from './BlurText';

const UseCaseItem: React.FC<{ text: string; borderRight?: boolean }> = ({ text, borderRight }) => (
  <article className={`flex flex-col justify-between group relative py-6 md:py-0 ${borderRight ? 'md:pr-12 md:border-r border-gray-700' : 'md:px-12 md:border-r border-gray-700 last:border-0 last:pr-0'}`}>
    <p className="text-gray-200 text-lg leading-relaxed mb-10">
      {text}
    </p>
    <a className="inline-flex items-center text-primary hover:text-white transition-colors text-lg font-medium group-hover:underline decoration-primary underline-offset-8" href="#">
      Learn more
      <span className="material-icons ml-2 transform rotate-[-45deg] text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">arrow_forward</span>
    </a>
  </article>
);

const UseCases: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24" id="use-cases">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mb-16">
        <div className="bg-primary text-black text-3xl md:text-4xl font-display font-bold px-4 py-1.5 rounded-xl select-none">
          <BlurText text="Use Cases" delay={100} />
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-xl leading-relaxed font-light">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      <div className="bg-card-dark rounded-4xl p-8 md:p-12 lg:p-16 text-white shadow-2xl dark:shadow-none dark:border dark:border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <UseCaseItem
            borderRight
            text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
          />
          <UseCaseItem
            text="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
          />
          <UseCaseItem
            text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
          />
        </div>
      </div>
    </section>
  );
};

export default UseCases;
