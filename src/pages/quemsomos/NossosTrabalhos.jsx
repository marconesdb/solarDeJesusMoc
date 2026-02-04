import Footer from '../../Footer';
import Navbar from '../../Navbar';
import VoluntariosDaAlegria from '../quemsomos/img-nossostrabalhos/Voluntários da Alegria.png';
import TrabalhadorDaUltimaHora from '../quemsomos/img-nossostrabalhos/2 (1).png'
import SolarDeJesus from'../quemsomos/img-nossostrabalhos/Logomarca Redonda - SolarDeJesus.png'
import evangelizacaoInfantil from "../quemsomos/img-nossostrabalhos/Turma - Evangelização Infantil.jpg"
import evangelizacao from "../quemsomos/img-nossostrabalhos/Logomarca - Evangelização Infantil.png"
import assistenciasocial from "../quemsomos/img-nossostrabalhos/1 (1).png"
import PasseEspirita from "../quemsomos/img-nossostrabalhos/Passe Espírita.jpg"
import { useTranslation } from 'react-i18next';

export default function NossosTrabalhos() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      {/* Voluntários da Alegria */}
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 md:p-8 mt-24">
        <div className="w-full md:w-1/2 md:pr-4 flex justify-center items-center mb-8">
          <img
            src={VoluntariosDaAlegria}
            alt={t('voluntariosDaAlegria.imageAlt')}
            className="w-96 "
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <div className="text-justify">
            <h1 className="text-xl md:text-2xl font-bold mb-4  flex justify-center items-center"> {t('voluntariosDaAlegria.title')}</h1>
            <h2 className="text-xl md:text-2xl mb-4">{t('voluntariosDaAlegria.subtitle')}</h2>
            <p className="text-sm md:text-base">
            {t('voluntariosDaAlegria.description')}
            </p>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/S_R6P_oWQJk?si=0MGFNJZtetsqkbpL"
              title={t('voluntariosDaAlegria.videoTitle')}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p>
            {t('voluntariosDaAlegria.videoDescription')}
            </p>
          </div>
        </div>
      </section>
      {/* Fim - Voluntários da Alegria */}

      {/* ====== */}



      {/* Trabalhadores da Última Hora */}
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 md:p-8 mt-24">
        <div className="w-full md:w-1/2 md:pr-4 flex justify-center items-center -mb-24 -mt-32">
          <img
            src={TrabalhadorDaUltimaHora}
            alt={t('trabalhadoresUltimaHora.imageAlt')}
            className="w-96 "
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <div className="text-justify">
            <h1 className="text-xl md:text-2xl font-bold mb-4 flex justify-center items-center">{t('trabalhadoresUltimaHora.title')}</h1>
            <h2 className="text-xl md:text-2xl mb-4">{t('trabalhadoresUltimaHora.subtitle')}</h2>
            <p className="text-sm md:text-base">
            {t('trabalhadoresUltimaHora.description')}
            </p>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/rSwDNNeB9CQ?si=DE3P-TlEpX9cWzoN"
              title={t('trabalhadoresUltimaHora.videoTitle')}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p>
            {t('trabalhadoresUltimaHora.videoDescription')}
            </p>
          </div>
        </div>
      </section>
      {/* Fim - Trabalhadores da Última Hora */}

      {/* =========== */}
      {/* Bazar Centro Espírita Solar de Jesus */}
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 md:p-8 mt-24">
        <div className="w-full md:w-1/2 md:pr-4 flex justify-center items-center mb-8 -mt-28">
          <img
            src={SolarDeJesus}
            alt={t('bazarSolarDeJesus.imageAlt')}
            className="w-36 "
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <div className="text-justify">
            <h1 className="text-xl md:text-2xl font-bold mb-4 flex justify-center items-center">{t('bazarSolarDeJesus.title')}</h1>
            <h2 className="text-xl md:text-2xl mb-4">{t('bazarSolarDeJesus.subtitle')}</h2>
            <p className="text-sm md:text-base">
            {t('bazarSolarDeJesus.description')}
            </p>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/SN3Do9I_zRw?si=ZlHe5BcMGnfpbg-7"
              title={t('bazarSolarDeJesus.videoTitle')}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p>
            {t('bazarSolarDeJesus.videoDescription')}
            </p>
          </div>
        </div>
      </section>
      {/* Fim - Bazar Centro Espírita Solar de Jesus */}

      {/* Evangelização Infantil */}

      <section className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 md:p-8 mt-24">
        <div className="w-full md:w-1/2 md:pr-4 flex justify-center items-center mb-8 -mt-16">
          <img
            src={evangelizacao}
            alt={t('evangelizacaoInfantil.imageAlt')}
            className="w-36 "
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <div className="text-justify">
            <h1 className="text-xl md:text-2xl font-bold mb-4 flex justify-center items-center">{t('evangelizacaoInfantil.title')}</h1>
            <h2 className="text-xl md:text-2xl mb-4"> {t('evangelizacaoInfantil.subtitle')}</h2>
            <p className="text-sm md:text-base">
            {t('evangelizacaoInfantil.description')}
            </p>
            <img src={evangelizacaoInfantil} alt="{t('evangelizacaoInfantil.groupImageAlt')}" />
            <p>
            {t('evangelizacaoInfantil.groupImageDescription')}
            </p>
          </div>
        </div>
      </section>
       {/* Fim - Evangelização Infantil */}

       {/* ============= */}

         

      {/* Assistência Social */}

      
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 md:p-8 mt-24">
        <div className="w-full md:w-1/2 md:pr-4 flex justify-center items-center -mb-32 -mt-32">
          <img
            src={assistenciasocial}
            alt={t('assistenciaSocial.imageAlt')}
            className="w-96 "
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <div className="text-justify">
            <h1 className="text-xl md:text-2xl font-bold mb-4 flex justify-center items-center">{t('assistenciaSocial.title')}</h1>
            <h2 className="text-xl md:text-2xl mb-4"> {t('assistenciaSocial.subtitle')}</h2>
            <p className="text-sm md:text-base">
            {t('assistenciaSocial.prayer')}
            </p>
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/M5mRcV2fT_8" 
              title={t('assistenciaSocial.videoTitle')}  
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            ></iframe>
            <p>
            {t('assistenciaSocial.videoDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Fim - Assistência Social */}


        {/* ======= */}


     {/* O passe Espírita */}
      
     <section className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 md:p-8 mt-24">
        <div className="w-full md:w-1/2 md:pr-4 flex justify-center items-center">
          {/* <img
            src={assistenciasocial}
            alt="Imagem"
            className="w-96 "
          /> */}
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <div className="text-justify">
            <h1 className="text-xl md:text-2xl font-bold mb-4 flex justify-center items-center">{t('passeEspirita.title')}</h1>
            <h2 className="text-xl md:text-2xl mb-4"> {t('passeEspirita.subtitle')}</h2>
            <p className="text-sm md:text-base">
            {t('passeEspirita.description')}

              <strong>{t('passeEspirita.prayerTitle')}</strong>
              {t('passeEspirita.prayer')}
            </p>
            <img src={PasseEspirita} alt={t('passeEspirita.imageAlt')} />
            <p>
            {t('passeEspirita.imageDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Fim - Passe Espírita */}

      <Footer />
    </div>
  );
}
