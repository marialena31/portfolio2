import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { HomeButton } from '../../types/data';

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen w-full px-4 py-24 overflow-hidden text-white bg-gradient-to-b from-primary-dark/95 to-primary/85">
      <div className="absolute inset-0 w-full h-full z-0">
        <StaticImage
          src="../../images/banner.png"
          alt="Background banner"
          placeholder="blurred"
          layout="fullWidth"
          className="w-full h-full object-cover object-center opacity-60 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 to-primary/80 dark:from-gray-900 dark:to-gray-800 opacity-95 z-10" />
      </div>
      <div className="relative z-20 max-w-4xl w-full mx-auto px-4 text-center text-white">
        <h1 className="text-[2.5rem] leading-[1.5] font-bold mb-8 text-white drop-shadow-xl tracking-tight">
          Reprendre le contrôle de votre projet e-commerce.
        </h1>
        <p className="text-lg md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
          Sans renoncer à la souplesse. Ni à la lucidité.
        </p>
        <p className="text-base md:text-xl mb-12 text-white/80 max-w-3xl mx-auto drop-shadow-sm leading-relaxed"></p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <Link
            to="/pourquoi-choisir/"
            className="inline-block text-lg font-semibold px-8 py-3 bg-white text-primary border-2 border-white rounded transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary shadow-lg dark:bg-primary dark:text-white dark:border-primary dark:hover:bg-white dark:hover:text-primary"
          >
            Découvrir mon approche
          </Link>
          <a
            href="https://calendly.com/pietri-marialena/contact-30"
            className="inline-block text-lg font-semibold px-8 py-3 bg-primary text-white border-2 border-white rounded transition-all duration-300 hover:bg-white hover:text-primary hover:border-primary shadow-lg dark:bg-white dark:text-primary dark:border-primary dark:hover:bg-primary dark:hover:text-white"
          >
            Réserver un échange de 45mn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
