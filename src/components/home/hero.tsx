import React from 'react';
import { Link } from 'gatsby';

import { HomeButton } from '../../types/data';

interface HeroProps {
  title: string;
  subtitle: string;
  cta: HomeButton;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, cta }) => {
  return (
    <section className="relative flex items-center justify-center min-h-screen w-full px-4 py-24 overflow-hidden text-white bg-gradient-to-b from-primary-dark/95 to-primary/85">
      <div className="relative z-20 max-w-4xl w-full mx-auto px-4 text-center text-white">
        <h1 className="text-[2.5rem] leading-[1.5] font-bold mb-8 text-white drop-shadow-xl tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          {cta ? (
            cta.isExternal ? (
              <a
                href={cta.link}
                className={`inline-block text-lg font-semibold px-8 py-3 ${cta.type === 'primary' ? 'bg-primary text-white border-2 border-white' : 'bg-white text-primary border-2 border-primary'} rounded transition-all duration-300 hover:bg-white hover:text-primary hover:border-primary shadow-lg dark:bg-white dark:text-primary dark:border-primary dark:hover:bg-primary dark:hover:text-white`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta.text}
              </a>
            ) : (
              <Link
                to={cta.link}
                className={`inline-block text-lg font-semibold px-8 py-3 min-w-[48px] min-h-[48px] ${cta.type === 'primary' ? 'bg-primary text-white border-2 border-white rounded transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary shadow-lg dark:bg-primary dark:text-white dark:border-primary dark:hover:bg-white dark:hover:text-primary' : 'bg-white text-primary border-2 border-primary rounded transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary shadow-lg dark:bg-primary dark:text-white dark:border-primary dark:hover:bg-white dark:hover:text-primary'}`}
              >
                {cta.text}
              </Link>
            )
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
