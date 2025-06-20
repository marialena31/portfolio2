import * as React from 'react';
import Layout from '../components/layout';

const JeuxRGPDInsidePage: React.FC = () => {
  return (
    <Layout className="bg-blue-50">
      <section className="min-h-screen w-full bg-gradient-to-b from-primary-dark/95 to-primary/85 flex items-center justify-center py-8 md:py-16">
        <div className="w-full max-w-[64rem] mx-auto bg-white rounded-xl shadow-xl p-8 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center">
            Jeux RGPD Inside
          </h1>
          <p className="mb-6 text-gray-700 text-center text-lg">
            Découvrez le jeu interactif RGPD Inside directement intégré sur cette page.
            <br />
            <span className="text-sm text-gray-500">
              (Ce jeu s&apos;ouvre en toute sécurité dans une iframe)
            </span>
          </p>
          <div className="w-full border rounded-lg overflow-hidden shadow-lg bg-black">
            <iframe
              src="https://rgpd-inside-game.netlify.app/"
              title="Jeu RGPD Inside"
              className="w-full h-[60vh] min-h-[400px] border-0"
              allowFullScreen
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JeuxRGPDInsidePage;
