import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import img1 from '../DoutrinaEspirita/img-artigosespiritas/IMG-01.png';
import img2 from '../DoutrinaEspirita/img-artigosespiritas/IMG-02.png';
import { useTranslation } from 'react-i18next';

export default function ArtigosEspiritas() {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <div>
        <h1 className='text-center mt-28 font-bold'>{t('article_title_1')}</h1>
        <div className="mx-4 md:mx-auto flex flex-col md:flex-row md:justify-between items-center py-8 container mx-auto border-orange300 border-2 mt-4">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start ml-4">
              <img src={img1} alt={t('article_title_1')} className="w-48 h-48 mx-2 mb-2" />
            </div>
          </div>
          <div className="md:w-1/2 text-black text-justify md:text-left mt-4 md:mt-0">
            <div className="content text-justify">
              <div className="message-text ml-4 mr-4">
                <p>
                  {t('article_text_1')}
                  <Link to='/caridade' className='text-orange400 font-bold'>{t('read_more')}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artigo - 2 */}
      <div>
        <h1 className='text-center mt-16 font-bold'>{t('article_title_2')}</h1>
        <div className="flex flex-col md:flex-row md:justify-between items-center py-8 container mx-auto border-orange300 border-2 mt-4">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start ml-4">
              <img src={img2} alt={t('article_title_2')} className="w-48 h-48 mx-2 mb-2" />
            </div>
          </div>
          <div className="md:w-1/2 text-black text-justify md:text-left mt-4 md:mt-0">
            <div className="content">
              <div className="message-text text-justify ml-4 mr-4">
                <p>
                  {t('article_text_2')}
                  <Link to='/coragem' className='text-orange400 font-bold'>{t('read_more')}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
