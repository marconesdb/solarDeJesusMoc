import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import cartazSemanaEspirita from './semanaEspirita.png';

// ── Vídeos em /public/videos/ — não precisam de import ───────────────────────
const videoByLang = {
  pt: '/videos/painosso_pt.mp4',
  en: '/videos/painosso_en.mp4',
  es: '/videos/painosso_es.mp4',
  fr: '/videos/painosso_fr.mp4',
  it: '/videos/painosso_it.mp4',
};

const SemanaEspirita = () => {
  const { t, i18n } = useTranslation();

  // Normaliza pt-BR → pt, en-US → en, etc.
  const lang = i18n.language?.split('-')[0] ?? 'pt';
  const currentVideo = videoByLang[lang] ?? videoByLang['pt'];

  return (
    <>
      <Helmet>
        <title>Semana Espírita | Solar de Jesus</title>
        <meta name="description" content="Página dedicada a mostrar a Semana Espírita." />
      </Helmet>

      <div className="flex flex-col mt-8 md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 px-4">
        {/* ── Imagem com overlay de texto ──────────────────────────────────── */}
        <div className="w-full max-w-[calc(100%+10px)] sm:max-w-sm md:max-w-md lg:max-w-lg relative">
          <div
            className="relative w-full h-full rounded-lg shadow-md overflow-hidden"
            style={{ minHeight: '450px' }}
          >
            <img
              src={cartazSemanaEspirita}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover p-2"
            />
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

        {/* ── Vídeo local ──────────────────────────────────────────────────── */}
        <div className="w-full max-w-[calc(100%+10px)] sm:max-w-sm md:max-w-md lg:max-w-lg p-4">
          <div className="aspect-w-16 aspect-h-9 w-full rounded-lg shadow-md overflow-hidden">
            {/*
              key={currentVideo} força remontagem quando o idioma muda,
              garantindo que o navegador carregue o novo arquivo do início.
            */}
            <video
              key={currentVideo}
              controls
              className="w-full h-full rounded-lg object-cover"
            >
              <source src={currentVideo} type="video/mp4" />
              {t('semanaEspirita.videoNotSupported')}
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default SemanaEspirita;