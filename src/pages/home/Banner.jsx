import bannerVoluntariosDaAlegria from '../quemsomos/img-nossostrabalhos/Voluntários da Alegria.png';
import { useTranslation } from 'react-i18next'; // Importar o hook de tradução

export default function Banner() {
  const { t } = useTranslation(); // Usar o hook de tradução

  return (
    <div className="relative z-10 mt-28 mx-4 md:mx-auto md:max-w-4xl">
      {/* Container para o banner e o carrossel */}
      <div className="relative">
        {/* Banner Voluntários da Alegria */}
        <div className="-mt-24 md:-mt-16 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-8 md:px-0 -z-10">
          <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0 overflow-hidden">
            <img
              className="w-76 h-auto md:w-full md:h-auto "
              src={bannerVoluntariosDaAlegria}
              alt={t('banner.altText')} // Tradução do atributo "alt"
            />
          </div>
          <div className="md:w-1/2 md:pl-4 bg-orange-500 text-white rounded-bl-3xl rounded-tr-3xl bg-orange400 p-4">
            <h2 className="text-2xl font-bold mb-4">{t('banner.title')}</h2> {/* Tradução do título */}
            <p className="text-lg ml-4 text-white mr-2">
              {t('banner.description')} {/* Tradução da descrição */}
            </p>
          </div>
        </div>
        {/* Fim do Banner Voluntários da Alegria */}
      </div>
    </div>
  );
}
