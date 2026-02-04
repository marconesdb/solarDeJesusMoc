import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { useTranslation } from 'react-i18next';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import imagem1 from '../quemsomos/img-galeria/Biblioteca/img-1.jpeg';
import imagem2 from '../quemsomos/img-galeria/Biblioteca/img-2.jpeg';
import imagem3 from '../quemsomos/img-galeria/Biblioteca/img-3.jpeg';
import imagem4 from '../quemsomos/img-galeria/Biblioteca/img-4.jpeg';

// Costura
import imagem5 from '../quemsomos/img-galeria/Costura/img-5.jpg';
import imagem6 from '../quemsomos/img-galeria/Costura/img-6.jpg';
import imagem7 from '../quemsomos/img-galeria/Costura/img-7.jpg';
import imagem8 from '../quemsomos/img-galeria/Costura/img-8.jpg';
import imagem9 from '../quemsomos/img-galeria/Costura/img-9.jpg';
import imagem10 from '../quemsomos/img-galeria/Costura/img-10.jpg';
import imagem11 from '../quemsomos/img-galeria/Costura/img-11.jpg';
import imagem12 from '../quemsomos/img-galeria/Costura/img-12.jpg';
import imagem13 from '../quemsomos/img-galeria/Costura/img-13.jpg';
import imagem14 from '../quemsomos/img-galeria/Costura/img-14.jpeg';
import imagem15 from '../quemsomos/img-galeria/Costura/img-15.jpeg';

// Evangelização

import imagem16 from '../quemsomos/img-galeria/Evangelizacao/img-16.jpg';
import imagem17 from '../quemsomos/img-galeria/Evangelizacao/img-17.jpg';
import imagem18 from '../quemsomos/img-galeria/Evangelizacao/img-18.jpg';
import imagem19 from '../quemsomos/img-galeria/Evangelizacao/img-19.jpg';
import imagem20 from '../quemsomos/img-galeria/Evangelizacao/img-20.jpg';
import imagem21 from '../quemsomos/img-galeria/Evangelizacao/img-21.jpg';
import imagem22 from '../quemsomos/img-galeria/Evangelizacao/img-22.jpg';
import imagem23 from '../quemsomos/img-galeria/Evangelizacao/img-23.jpg';
import imagem24 from '../quemsomos/img-galeria/Evangelizacao/img-24.jpg';
import imagem25 from '../quemsomos/img-galeria/Evangelizacao/img-25.jpg';
import imagem26 from '../quemsomos/img-galeria/Evangelizacao/img-26.jpg';
import imagem27 from '../quemsomos/img-galeria/Evangelizacao/img-27.jpg';
import imagem28 from '../quemsomos/img-galeria/Evangelizacao/img-28.jpg';
import imagem29 from '../quemsomos/img-galeria/Evangelizacao/img-29.jpg';
import imagem30 from '../quemsomos/img-galeria/Evangelizacao/img-30.jpeg';
import imagem31 from '../quemsomos/img-galeria/Evangelizacao/img-31.jpeg';
import imagem32 from '../quemsomos/img-galeria/Evangelizacao/img-32.jpeg';
import imagem33 from '../quemsomos/img-galeria/Evangelizacao/img-33.jpeg';
import imagem34 from '../quemsomos/img-galeria/Evangelizacao/img-34.jpeg';
import imagem35 from '../quemsomos/img-galeria/Evangelizacao/img-35.jpeg';
import imagem36 from '../quemsomos/img-galeria/Evangelizacao/img-36.jpeg';
import imagem37 from '../quemsomos/img-galeria/Evangelizacao/img-37.jpeg';
import imagem38 from '../quemsomos/img-galeria/Evangelizacao/img-38.jpeg';
import imagem39 from '../quemsomos/img-galeria/Evangelizacao/img-39.jpeg';
import imagem40 from '../quemsomos/img-galeria/Evangelizacao/img-40.jpeg';
import imagem41 from '../quemsomos/img-galeria/Evangelizacao/img-41.jpeg';
import imagem42 from '../quemsomos/img-galeria/Evangelizacao/img-42.jpeg';
import imagem43 from '../quemsomos/img-galeria/Evangelizacao/img-43.jpeg';
import imagem44 from '../quemsomos/img-galeria/Evangelizacao/img-44.jpeg';
import imagem45 from '../quemsomos/img-galeria/Evangelizacao/img-45.jpeg';
import imagem46 from '../quemsomos/img-galeria/Evangelizacao/img-46.jpeg';
import imagem47 from '../quemsomos/img-galeria/Evangelizacao/img-47.jpeg';
import imagem48 from '../quemsomos/img-galeria/Evangelizacao/img-48.jpeg';
import encontro1 from '../quemsomos/img-galeria/Encontros/encontro1.jpeg'
import encontro2 from '../quemsomos/img-galeria/Encontros/encontro2.jpeg'

const images1 = [

// Biblioteca

    {
        original: imagem1,
        thumbnail: imagem1,
        description: 'Biblioteca'
    },
    {
        original: imagem2,
        thumbnail: imagem2,
        description: 'Biblioteca'
    },

    {
        original: imagem3,
        thumbnail: imagem3,
        description: 'Biblioteca'
    },
    {
        original: imagem4,
        thumbnail: imagem4,
        description: 'Biblioteca'
    },

// Costura

{
    original: imagem5,
    thumbnail: imagem5,
    description: 'Costura'
},
{
    original: imagem6,
    thumbnail: imagem6,
    description: 'Costura'
},

{
    original: imagem7,
    thumbnail: imagem7,
    description: 'Costura'
},
{
    original: imagem8,
    thumbnail: imagem8,
    description: 'Costura'
},

{
    original: imagem9,
    thumbnail: imagem9,
    description: 'Costura'
},
{
    original: imagem10,
    thumbnail: imagem10,
    description: 'Costura'
},


{
original: imagem11,
thumbnail: imagem11,
description: 'Costura'
},
{
original: imagem12,
thumbnail: imagem12,
description: 'Costura'
},

{
    original: imagem13,
    thumbnail: imagem13,
    description: 'Costura'
},


    {
    original: imagem14,
    thumbnail: imagem14,
    description: 'Costura'
    },
    {
    original: imagem15,
    thumbnail: imagem15,
    description: 'Costura'
    },

// Evangelização


{
    original: imagem16,
    thumbnail: imagem16,
    description: 'Evangelização'
},

{
    original: imagem17,
    thumbnail: imagem17,
    description: 'Evangelização'
},
{
    original: imagem18,
    thumbnail: imagem18,
    description: 'Evangelização'
},
{
    original: imagem19,
    thumbnail: "imagem19",
    description:'Evangelização'
},
{
    original: imagem20,
    thumbnail: imagem20,
    description: 'Evangelização'
},
{
    original: imagem21,
    thumbnail: imagem21,
    description: 'Evangelização'
},
{
    original: imagem22,
    thumbnail: imagem22,
    description: 'Evangelização'
},
{
    original: imagem23,
    thumbnail: imagem23,
    description: 'Evangelização'
},
{
    original: imagem24,
    thumbnail: imagem24,
    description: 'Evangelização'
},
{
    original: imagem25,
    thumbnail: imagem25,
    description: 'Evangelização'
},
{
    original: imagem26,
    thumbnail: imagem26,
    description: 'Evangelização'
},
{
    original: imagem27,
    thumbnail: imagem27,
    description: 'Evangelização'
},
{
    original: imagem28,
    thumbnail: imagem28,
    description: 'Evangelização'
},
{
    original: imagem29,
    thumbnail: imagem29,
    description: 'Evangelização'
},
{
    original: imagem30,
    thumbnail: imagem30,
    description: 'Evangelização'
},
{
    original: imagem31,
    thumbnail: imagem31,
    description: 'Evangelização'
},
{
    original: imagem32,
    thumbnail: imagem32,
    description: 'Evangelização'
},
{
    original: imagem33,
    thumbnail: imagem33,
    description: 'Evangelização'
},
{
    original: imagem34,
    thumbnail: imagem34,
    description: 'Evangelização'
},
{
    original: imagem35,
    thumbnail: imagem35,
    description: 'Evangelização'
},
{
   original: imagem36,
   thumbnail: imagem36,
    description: 'Evangelização'
},
{
    original: imagem37,
    thumbnail: imagem37,
    description: 'Evangelização'
},
{
    original: imagem38,
    thumbnail: imagem38,
    description: 'Evangelização'
},
{
    original: imagem39,
    thumbnail: imagem39,
    description: 'Evangelização'
},
{
    original: imagem40,
    thumbnail: imagem40,
    description: 'Evangelização'
},
{
    original: imagem41,
    thumbnail: imagem41,
    description: 'Evangelização'
},
{
    original: imagem42,
    thumbnail: imagem42,
    description: 'Evangelização'
},
{
    original: imagem43,
    thumbnail: imagem43,
    description: 'Evangelização'
},
{
    original: imagem44,
    thumbnail: imagem44,
    description: 'Evangelização'
},
{
    original: imagem45,
    thumbnail: imagem45,
    description: 'Evangelização'
},
{
    original: imagem46,
    thumbnail: imagem46,
    description: 'Evangelização'
},
{
    original: imagem47,
    thumbnail: imagem47,
    description: 'Evangelização'
},
{
    original: imagem48,
    thumbnail: imagem48,
    description: 'Evangelização'
},


// Encontros


{
    original: encontro1,
    thumbnail: encontro1,
    description: 'Encontros'
},



{
    original: encontro2,
    thumbnail: encontro2,
    description: 'Encontros'
}





];

const Galeria = () => {
    const { t } = useTranslation();
  
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main>
          <div className="container mx-auto px-4 py-8 flex-grow">
            <h1 className="text-xl font-bold mt-20 mb-4 text-center">
              {t('gallery_title')}
            </h1>
            <div className="sm:hidden"> {/* Visível apenas em dispositivos móveis */}
              <ImageGallery items={images1} showThumbnails={false} />
            </div>
            <div className="hidden sm:block"> {/* Visível apenas em dispositivos desktop */}
              <ImageGallery items={images1} />
            </div>
            {/* Adicione aqui a segunda galeria de fotos, se necessário */}
          </div>
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Galeria;