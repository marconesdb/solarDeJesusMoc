import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // 👈 para rotas internas
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import poster1 from '../doacoes/img-doacoes/Doação de roupa.svg';
import poster2 from '../doacoes/img-doacoes/Pix-1.svg';
import poster3 from '../doacoes/img-doacoes/Instagram Story Dia do trabalhador.png';
import poster4 from '../doacoes/img-doacoes/2.svg';
import poster5 from '../doacoes/img-doacoes/Pix-2.svg';
import poster6 from '../doacoes/img-doacoes/Enxoval bebê.svg';

const posters = [
  { src: poster1, alt: 'Poster 1', key: 'poster1' },
  { src: poster2, alt: 'Poster 2', key: 'poster2' },
  { src: poster3, alt: 'Poster 3', key: 'poster3' },
  { src: poster4, alt: 'Poster 4', key: 'poster4' },
  { src: poster5, alt: 'Poster 5', key: 'poster5', link: '/voluntariasDaAlegria' }, // 👈 exemplo com link
  { src: poster6, alt: 'Poster 6', key: 'poster6' },
];

export default function Doacoes() {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">{t('posters.title')}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {posters.map((poster, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* imagem */}
              <img src={poster.src} alt={poster.alt} className="w-full mb-2" />

              {/* texto traduzido */}
              <p className="text-justify">{t(`posters.${poster.key}`)}</p>

              {/* link visível se existir */}
              {poster.link && (
                <Link to={poster.link} className="text-blue-600 underline mt-2">
                 Saiba mais em...
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
