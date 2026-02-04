import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../../Navbar';
import Footer from '../../../Footer';
import img1 from '../img-artigosespiritas/IMG-01.png';

function Caridade() {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 mt-20">{t('titleCaridade')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-last">
            <img src={img1} alt="Imagem do Artigo" className="w-full rounded-lg" />
          </div>

          <div className="bg-black100 text-white rounded-lg">
            <p className="text-lg mb-4 text-justify font-bold ml-4 mr-4 mt-4">{t('titleCaridade')}</p>
            <p className="text-lg mb-4 text-justify ml-4 mr-4">{t('content.paragraph1')}</p>
            <p className="text-lg mb-4 text-justify ml-4 mr-4">{t('content.paragraph2')}</p>
            <p className="text-lg mb-4 text-justify ml-4 mr-4">{t('content.paragraph3')}</p>
            <p className="text-sm text-right mt-4 ml-4 mr-4 mb-4">
              {t('content.publishDate')}<br />
              {t('content.author')}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{t('references.title')}</h2>
          <div className="bg-black100 p-4 rounded-lg text-white text-justify">
            <p>{t('references.ref1')}</p>
            <p>{t('references.ref2')}</p>
            <p>{t('references.ref3')}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Caridade;
