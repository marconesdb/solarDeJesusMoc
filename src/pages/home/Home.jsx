import Navbar from '../../Navbar';
import Footer from '../../Footer';
import SemanaEspirita from '../home/semanaEspirita';
import myImage from '../home/img-home/DSCN9271.jpg';
import Banner from '../home/Banner';
import Carousel from './Carousel';
import CarrosselCards from './CarrosselCards';
import DailyQuote from './DailyQuote';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <Carousel />
      <DailyQuote />
      <SemanaEspirita />
      <CarrosselCards />
      <Banner />
      {/* IMG - Oração */}
      <section>
        <h1 className="flex justify-center items-center font-bold text-3xl">
          {t('home.prayerMoment')}
        </h1>
        <p className="flex justify-center items-center text-2xl">
          {t('home.prayerPlace')}
        </p>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center">
            <img src={myImage} alt={t('home.banner.altText')} className="max-w-full h-auto" />
          </div>
        </div>
      </section>
      {/* Fim - IMG Oração */}
      <Footer />
    </div>
  );
}
