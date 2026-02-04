import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../../Navbar';
import Footer from '../../../Footer';
import img2 from '../img-artigosespiritas/IMG-02.png';

function Coragem() {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 mt-20">{t('titleCoragem')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-last">
            <img src={img2} alt="Imagem do Artigo" className="w-full rounded-lg" />
          </div>
          <div className="bg-black100 text-white rounded-lg">
            {/* Artigo traduzido */}
            <p className="text-lg mb-4 text-justify font-bold ml-4 mr-4 mt-4"></p>
            <p className="text-lg mb-4 text-justify ml-4 mr-4">{t('paragraph1')}</p>
            <p className="text-lg mb-4 text-justify ml-4 mr-4">{t('paragraph2')}</p>
            <p className="text-lg mb-4 text-justify ml-4 mr-4">{t('paragraph3')}</p>
            <p className="text-lg mb-4 text-justify ml-4 mr-4">{t('paragraph4')}</p>
            <p className="text-lg mb-4 text-justify ml-4 mr-4">{t('paragraph5')}</p>
            <p className="text-lg mb-4 text-justify ml-4 mr-4">{t('paragraph6')}</p>
            
            {/* Adicione outros parágrafos traduzidos */}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{t('referenceSection')}</h2>
          <div className="bg-black100 p-4 rounded-lg text-white text-justify">
            <p>{t('reference')}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Coragem;
