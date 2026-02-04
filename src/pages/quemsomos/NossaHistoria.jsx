import { useTranslation } from 'react-i18next';
import Footer from '../../Footer'; 
import Navbar from '../../Navbar';
import Imagem from '../quemsomos/img-nossahistoria/Francisco Soares da Silva.png';
import { Helmet } from 'react-helmet';

const NossaHistoria = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <link rel="icon" href={t('ourHistory.helmet.favicon')} />
      </Helmet>
      <Navbar />
      <main>
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mt-12">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                {/* Coluna da imagem */}
                <div className="text-justify mt-4 lg:mt-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('ourHistory.main.founderTitle')}</h2>
                    <img
                      className="w-full rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 lg:w-auto lg:h-auto mt-4 mb-4"
                      src={Imagem}
                      alt={t('ourHistory.main.imageAlt')}
                    />
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('ourHistory.main.founderName')}</h2>
                  </div>
                </div>

                {/* Coluna de texto */}
                <div className="text-justify">
                  <h1 className="text-2xl font-semibold text-gray-900 mb-2">{t('ourHistory.main.title')}</h1>
                  <p className="mt-3 text-lg text-gray-500">
                    {t('ourHistory.main.history.paragraphs.0')}
                    <br />
                    <br />
                    {t('ourHistory.main.history.paragraphs.1')}
                    <br />
                    <br />
                    {t('ourHistory.main.history.paragraphs.2')}
                    <br />
                    <br />
                    {t('ourHistory.main.history.paragraphs.3')}
                    <br />
                    <br />
                    {t('ourHistory.main.history.paragraphs.4')}
                    <br />
                    <br />
                    {t('ourHistory.main.history.paragraphs.5')}
                    <br />
                    <br />
                    {t('ourHistory.main.history.paragraphs.6')}
                    <br />
                    <br />
                    <strong>{t('ourHistory.main.history.author')}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NossaHistoria;
