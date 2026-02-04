import { useTranslation } from 'react-i18next'; 
import cartazSemanaEspirita from './semana-espirita/semanaEspirita.png';

const SemanaEspirita = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col mt-8 md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 px-4">
      {/* Background Image Section */}
      <div className="w-full max-w-[calc(100%+10px)] sm:max-w-sm md:max-w-md lg:max-w-lg relative">
        <div 
          className="relative w-full h-full rounded-lg shadow-md overflow-hidden"
          style={{ minHeight: '450px' }}
        >
          {/* Background Image */}
          <img
            src={cartazSemanaEspirita}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover p-2"
          />
          
          {/* Text Overlay */}
          <div className="absolute inset-0 bg-opacity-40 p-4 sm:p-6 flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black font-podkova">
              {t('semanaEspirita.title')} 
            </h1>
            <div className="mt-4 space-y-2 px-2">
              <p className="text-black text-sm sm:text-base md:text-lg font-montserrat">
                {t('semanaEspirita.quote')}
              </p>
              <p className="text-black text-xs sm:text-sm md:text-base font-montserrat">
                {t('semanaEspirita.reference')} <br />
                {t('semanaEspirita.author')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="w-full max-w-[calc(100%+10px)] sm:max-w-sm md:max-w-md lg:max-w-lg p-4">
        <div className="aspect-w-16 aspect-h-9 w-full rounded-lg shadow-md">
          <iframe
            src="https://www.youtube.com/embed/tLxtodVjA2s?si=HzZ-f7RnwTLksAWi"
            title="Semana Espírita de Montes Claros - 2024"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SemanaEspirita;
