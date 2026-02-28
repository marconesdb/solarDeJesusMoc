
import { Helmet } from 'react-helmet-async';

// dentro do componente:
<Helmet>
  <title>Orações | Solar de Jesus</title>
  <meta name="description" content="Página dedicada a compartilhar orações." />
</Helmet>


import { useTranslation } from 'react-i18next';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

// --- IMPORTAÇÕES (Mantidas iguais ao original) ---

// Import Oração 1
import img1 from '../DoutrinaEspirita/img-oracoes/IMG-1.png';
import audioPortugues1 from './Audio-Orações/Oracao1.mp3';
import audioEnglish1 from './Audio-Orações/O God, our Father.mp3';
import audioEspanol1 from './Audio-Orações/Oh Dios, Padre nuestro.mp3';
import audioFrances1 from './Audio-Orações/Oracao_O Deus.mp3';

// Import Oração 2
import img2 from '../DoutrinaEspirita/img-oracoes/IMG-2.png'
import audioPortugues2 from './Audio-Orações/Ó Grande criador do Universo (2).mp3';
import audioEnglish2 from './Audio-Orações/O Great Creator of the Universe.mp3';
import audioEspanol2 from './Audio-Orações/Oh Gran Creador del Universo.mp3';
import audioFrances2 from './Audio-Orações/Ô Grand Créateur de lUnivers.mp3';

// Import Oração 3
import img3 from '../DoutrinaEspirita/img-oracoes/IMG-4.png'
import audioPortugues3 from './Audio-Orações/Oração da Esperança.mp3';
import audioEspanol3 from './Audio-Orações/OraciondeEsperanza.mp3';
import audioEnglish3 from './Audio-Orações/A Prayer of Hope.mp3';
import audioFrances3 from './Audio-Orações/Prièredesperance.mp3';

// Import Oração 4
import img4 from '../DoutrinaEspirita/img-oracoes/IMG-10.png'
import audioPortugues4 from './Audio-Orações/Perdão 2.mp3'
import audioEspanol4 from './Audio-Orações/Perdón.mp3';
import audioEnglish4 from './Audio-Orações/Forgiveness.mp3';
import audioFrances4 from './Audio-Orações/Pardon.mp3';

// Import Oração 5
import img5 from '../DoutrinaEspirita/img-oracoes/IMG-8.png'
import audioPortugues5 from './Audio-Orações/Oração para quem tem fome no Natal.mp3'
import audioEspanol5 from './Audio-Orações/Oración por los que tienen hambre en Navidad-Espanhol.mp3';
import audioEnglish5 from './Audio-Orações/Prayer for those who are hungry at Christmas-Inglês.mp3';
import audioFrances5 from './Audio-Orações/Noël.mp3';

// Import Oração 6
import img6 from '../DoutrinaEspirita/img-oracoes/IMG-12.png'
import audioPortugues6 from './Audio-Orações/Oração para os Criminosos.mp3'
import audioEspanol6 from './Audio-Orações/Oración por los criminales.mp3';
import audioEnglish6 from './Audio-Orações/Prayer for criminals.mp3';
import audioFrances6 from './Audio-Orações/criminels.mp3';

// Import Oração 7
import img7 from '../DoutrinaEspirita/img-oracoes/IMG-13.png'
import audioPortugues7 from './Audio-Orações/oração3.mp3'
import audioEspanol7 from './Audio-Orações/Oración.mp3';
import audioEnglish7 from './Audio-Orações/Prayer.mp3';
import audioFrances7 from './Audio-Orações/Prière.mp3';

// Import Oração 8
import img8 from '../DoutrinaEspirita/img-oracoes/IMG-14.png'
import audioEspanol8 from './Audio-Orações/Acto de fe.mp3';
import audioEnglish8 from './Audio-Orações/Act of faith.mp3';
import audioPortugues8 from './Audio-Orações/Oração4.mp3'
import audioFrances8 from './Audio-Orações/Acte.mp3';

// Import Oração 9
import img9 from '../DoutrinaEspirita/img-oracoes/IMG-15.png'
import audioPortugues9 from './Audio-Orações/Oração5.mp3'
import audioEspanol9 from './Audio-Orações/Oración para pedir perdón.mp3';
import audioEnglish9 from './Audio-Orações/Prayer to ask for forgiveness.mp3';
import audioFrances9 from './Audio-Orações/demander pardon.mp3';

// Import Oração 10
import img10 from '../DoutrinaEspirita/img-oracoes/IMG-16.png'
import audioPortugues10 from "./Audio-Orações/Oração6.mp3"
import audioEspanol10 from './Audio-Orações/Chico Xavier- Espanhol.mp3';
import audioEnglish10 from './Audio-Orações/Chico Xavier - Inglês.mp3';
import audioFrances10 from './Audio-Orações/Seigneur.mp3';

// Import Oração 11
import img11 from '../DoutrinaEspirita/img-oracoes/IMG-17.png'
import audioPortugues11 from "./Audio-Orações/Oração7.mp3"
import audioEspanol11 from './Audio-Orações/Oración por los Niños del Mundo-Espanhol.mp3';
import audioEnglish11 from './Audio-Orações/Prayer for the Children of the World - Inglês.mp3';
import audioFrances11 from './Audio-Orações/Prière pour les enfants du monde.mp3';

// Import Oração 12
import img12 from '../DoutrinaEspirita/img-oracoes/IMG-19.png'
import audioPortugues12 from './Audio-Orações/Oração para o cultivo do Amor.mp3'
import audioEspanol12 from './Audio-Orações/Oración por el cultivo del amor.mp3';
import audioEnglish12 from './Audio-Orações/Prayer for the Cultivation of Love.mp3';
import audioFrances12 from './Audio-Orações/Prière pour la culture de lAmour.mp3';

// Import Oração 13
import img13 from '../DoutrinaEspirita/img-oracoes/IMG-20.png'
import audioPortugues13 from './Audio-Orações/Oração para o homem orgulhoso superar seus preconceitos.mp3'
import audioEspanol13 from './Audio-Orações/Oración para que el hombre orgulloso supere sus prejuicios.mp3';
import audioEnglish13 from './Audio-Orações/Prayer for the proud man to overcome his prejudices.mp3';
import audioFrances13 from './Audio-Orações/surmonte ses préjugés.mp3';

// Import Oração 14 (Nota: Alguns arquivos são .mp4)
import img14 from '../DoutrinaEspirita/img-oracoes/IMG-21.png'
import audioPortugues14 from './Audio-Orações/Oração para uma réstia de luz no mundo.mp4';
import audioEspanol14 from './Audio-Orações/Oración por un rayo de luz en el mundo-Espanhol.mp3';
import audioEnglish14 from './Audio-Orações/Prayer for a ray of light in the world-Inglês.mp3';
import audioFrances14 from './Audio-Orações/dans le monde.mp3';

// Import Oração 15 (Nota: Alguns arquivos são .mp4)
import img15 from '../DoutrinaEspirita/img-oracoes/IMG-22.png'
import audioPortugues15 from './Audio-Orações/Mães em Desespero.mp4';
import audioEspanol15 from './Audio-Orações/Madres desesperadas.mp3';
import audioEnglish15 from './Audio-Orações/Mothers in Despair.mp3';
import audioFrances15 from './Audio-Orações/Mères désespérées.mp3';

// Import Oração 16 (Nota: Alguns arquivos são .mp4)
import img16 from '../DoutrinaEspirita/img-oracoes/IMG-23.png'
import audioPortugues16 from './Audio-Orações/Oração pela Ansiedade.mp4';
import audioEspanol16 from './Audio-Orações/Oración por lá ansiedad.mp3';
import audioEnglish16 from './Audio-Orações/Prayer for Anxiety.mp3';
import audioFrances16 from './Audio-Orações/lanxiété.mp3';

// Import Oração 17 (Nota: Alguns arquivos são .mp4)
import img17 from '../DoutrinaEspirita/img-oracoes/IMG-24.png'
import audioPortugues17 from './Audio-Orações/Oração da Unidade - Português.mp4';
import audioEspanol17 from './Audio-Orações/Oración de Unidad.mp3';
import audioEnglish17 from './Audio-Orações/Prayer of Unity.mp3';
import audioFrances17 from './Audio-Orações/Prière dunité.mp3';

// --- CONFIGURAÇÃO DOS DADOS ---

// Função auxiliar para determinar o tipo de áudio corretamente
const getMimeType = (url) => {
  if (!url) return 'audio/mpeg';
  if (url.endsWith('.mp4')) return 'audio/mp4'; // ou video/mp4 dependendo do conteúdo
  return 'audio/mpeg'; // padrão para mp3
};

// Array centralizado com os dados de todas as orações
const prayersData = [
  {
    id: 1,
    img: img1,
    titleKey: 'prayer1',
    subtitleKey: null,
    audio: { pt: audioPortugues1, en: audioEnglish1, es: audioEspanol1, fr: audioFrances1 }
  },
  {
    id: 2,
    img: img2,
    titleKey: 'prayer2',
    subtitleKey: null,
    audio: { pt: audioPortugues2, en: audioEnglish2, es: audioEspanol2, fr: audioFrances2 }
  },
  {
    id: 3,
    img: img3,
    titleKey: 'prayer3',
    subtitleKey: 'subtitlePrayer3',
    audio: { pt: audioPortugues3, en: audioEnglish3, es: audioEspanol3, fr: audioFrances3 }
  },
  {
    id: 4,
    img: img4,
    titleKey: 'prayer4',
    subtitleKey: 'subtitlePrayer4',
    audio: { pt: audioPortugues4, en: audioEnglish4, es: audioEspanol4, fr: audioFrances4 }
  },
  {
    id: 5,
    img: img5,
    titleKey: 'prayer5',
    subtitleKey: 'subtitlePrayer5',
    audio: { pt: audioPortugues5, en: audioEnglish5, es: audioEspanol5, fr: audioFrances5 }
  },
  {
    id: 6,
    img: img6,
    titleKey: 'prayer6',
    subtitleKey: 'subtitlePrayer6',
    audio: { pt: audioPortugues6, en: audioEnglish6, es: audioEspanol6, fr: audioFrances6 }
  },
  {
    id: 7,
    img: img7,
    titleKey: 'prayer7',
    subtitleKey: 'subtitlePrayer7',
    audio: { pt: audioPortugues7, en: audioEnglish7, es: audioEspanol7, fr: audioFrances7 }
  },
  {
    id: 8,
    img: img8,
    titleKey: 'prayer8',
    subtitleKey: 'subtitlePrayer8',
    audio: { pt: audioPortugues8, en: audioEnglish8, es: audioEspanol8, fr: audioFrances8 }
  },
  {
    id: 9,
    img: img9,
    titleKey: 'prayer9',
    subtitleKey: 'subtitlePrayer9',
    audio: { pt: audioPortugues9, en: audioEnglish9, es: audioEspanol9, fr: audioFrances9 }
  },
  {
    id: 10,
    img: img10,
    titleKey: 'prayer10',
    subtitleKey: 'subtitlePrayer10',
    audio: { pt: audioPortugues10, en: audioEnglish10, es: audioEspanol10, fr: audioFrances10 }
  },
  {
    id: 11,
    img: img11,
    titleKey: 'prayer11',
    subtitleKey: 'subtitlePrayer11',
    audio: { pt: audioPortugues11, en: audioEnglish11, es: audioEspanol11, fr: audioFrances11 }
  },
  {
    id: 12,
    img: img12,
    titleKey: 'prayer12',
    subtitleKey: 'subtitlePrayer12',
    audio: { pt: audioPortugues12, en: audioEnglish12, es: audioEspanol12, fr: audioFrances12 }
  },
  {
    id: 13,
    img: img13,
    titleKey: 'prayer13',
    subtitleKey: 'subtitlePrayer13',
    audio: { pt: audioPortugues13, en: audioEnglish13, es: audioEspanol13, fr: audioFrances13 }
  },
  {
    id: 14,
    img: img14,
    titleKey: 'prayer14',
    subtitleKey: 'subtitlePrayer14',
    audio: { pt: audioPortugues14, en: audioEnglish14, es: audioEspanol14, fr: audioFrances14 }
  },
  {
    id: 15,
    img: img15,
    titleKey: 'prayer15',
    subtitleKey: 'subtitlePrayer15',
    audio: { pt: audioPortugues15, en: audioEnglish15, es: audioEspanol15, fr: audioFrances15 }
  },
  {
    id: 16,
    img: img16,
    titleKey: 'prayer16',
    subtitleKey: 'subtitlePrayer16',
    audio: { pt: audioPortugues16, en: audioEnglish16, es: audioEspanol16, fr: audioFrances16 }
  },
  {
    id: 17,
    img: img17,
    titleKey: 'prayer17',
    subtitleKey: 'subtitlePrayer17',
    audio: { pt: audioPortugues17, en: audioEnglish17, es: audioEspanol17, fr: audioFrances17 }
  }
];

function Oracoes() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className='mt-20 md:mt-24 flex justify-center items-center text-xl md:text-3xl font-bold mb-8 text-gray-800'>
          {t('titleOracao')}
        </h1>

        <div className="space-y-8">
          {/* Mapeamento dinâmico das orações */}
          {prayersData.map((prayer) => (
            <div 
              key={prayer.id} 
              className="container mx-auto p-6 md:p-8 border border-orange-400 rounded-xl shadow-lg bg-white flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300"
            >
              {/* Imagem */}
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <img
                  src={prayer.img}
                  alt={`Oração ${prayer.id}`}
                  className="w-40 h-auto md:w-56 md:h-auto rounded-lg shadow-md object-cover"
                />
              </div>

              {/* Conteúdo */}
              <div className="flex-1 flex flex-col justify-center text-center md:text-left w-full">
                
                {/* Título e Subtítulo */}
                <div className="mb-6">
                  {prayer.subtitleKey && (
                    <h2 className="text-lg md:text-xl font-bold text-gray-700 mb-2">
                      {t(prayer.subtitleKey)}
                    </h2>
                  )}
                  <p className="text-gray-600 text-justify leading-relaxed text-sm md:text-base">
                    {t(prayer.titleKey)}
                  </p>
                </div>

                {/* Grid de Áudios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {/* Português */}
                  <div className="flex flex-col items-center sm:items-start">
                    <p className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">Português</p>
                    <audio controls className="w-full h-10">
                      <source src={prayer.audio.pt} type={getMimeType(prayer.audio.pt)} />
                      Seu navegador não suporta o elemento de áudio.
                    </audio>
                  </div>

                  {/* English */}
                  <div className="flex flex-col items-center sm:items-start">
                    <p className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">English</p>
                    <audio controls className="w-full h-10">
                      <source src={prayer.audio.en} type={getMimeType(prayer.audio.en)} />
                      Your browser does not support the audio element.
                    </audio>
                  </div>

                  {/* Español */}
                  <div className="flex flex-col items-center sm:items-start">
                    <p className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">Español</p>
                    <audio controls className="w-full h-10">
                      <source src={prayer.audio.es} type={getMimeType(prayer.audio.es)} />
                      Su navegador no soporta el elemento de audio.
                    </audio>
                  </div>

                  {/* Français */}
                  <div className="flex flex-col items-center sm:items-start">
                    <p className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">Français</p>
                    <audio controls className="w-full h-10">
                      <source src={prayer.audio.fr} type={getMimeType(prayer.audio.fr)} />
                      Votre navigateur ne supporte pas l'élément audio.
                    </audio>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Oracoes;
