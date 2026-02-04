import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Evangelho1 from '../DoutrinaEspirita/ObrasBasicas/O Evangelho Segundo o Espiritismo/O Evangelho Segundo o Espiritismo -Espanhol.png'
import Evangelho2 from '../DoutrinaEspirita/ObrasBasicas/O Evangelho Segundo o Espiritismo/O Evangelho Segundo o Espiritismo -Inglês.png'
import Evangelho3 from '../DoutrinaEspirita/ObrasBasicas/O Evangelho Segundo o Espiritismo/O Evangelho Segundo o Espiritismo -Português.png'
import Evangelho4 from '../DoutrinaEspirita/ObrasBasicas/O Evangelho Segundo o Espiritismo/O Evangelho Segundo o Espiritismo - Francês.png'
import img11 from '../DoutrinaEspirita/ObrasBasicas/O Livro do Médiuns/El Libro de los Médiums - Español.jpg'
import img22 from '../DoutrinaEspirita/ObrasBasicas/O Livro do Médiuns/The Book of Mediums - English.jpg'
import img33 from '../DoutrinaEspirita/ObrasBasicas/O Livro do Médiuns/O Livro dos Médiuns - Português.jpg'
import img34 from '../DoutrinaEspirita/ObrasBasicas/O Livro do Médiuns/Livros dos  Mediuns - Francês.png'
import ESEE from '../DoutrinaEspirita/ObrasBasicas/O Evangelho Segundo o Espiritismo/O Evangelho Segundo O Espiritismo - Espanhol.pdf'
import ESEI from '../DoutrinaEspirita/ObrasBasicas/O Evangelho Segundo o Espiritismo/O Evangelho Segundo O Espiritismo - Inglês.pdf'
import ESEP from '../DoutrinaEspirita/ObrasBasicas/O Evangelho Segundo o Espiritismo/O Evangelho Segundo O Espiritismo - Português.pdf'
import LivroMediun1 from '../DoutrinaEspirita/ObrasBasicas/O Livro do Médiuns/O Livro dos Médiuns - Português.pdf'
import LivroMediun2 from '../DoutrinaEspirita/ObrasBasicas/O Livro do Médiuns/The Book of Mediums - English.pdf'
import LivroMediun3 from '../DoutrinaEspirita/ObrasBasicas/O Livro do Médiuns/El Libro de los Médiums - Español.pdf'
import LivroMediun4 from '../DoutrinaEspirita/ObrasBasicas/O Livro do Médiuns/LE-LIVRE-DES-MÉDIUMS.pdf'
import img4 from '../DoutrinaEspirita/ObrasBasicas/O Livro dos Espíritos/O Livro dos Espiritos - Espanhol.png'
import img5 from '../DoutrinaEspirita/ObrasBasicas/O Livro dos Espíritos/O Livro dos Espiritos - Inglês.png'
import img6 from '../DoutrinaEspirita/ObrasBasicas/O Livro dos Espíritos/O Livro dos Espíritos - Português.png'
import img7 from '../DoutrinaEspirita/ObrasBasicas/O Livro dos Espíritos/Livro dos Espiritos - Francês.png'
import LivroEspiritos1 from '../DoutrinaEspirita/ObrasBasicas/O Livro dos Espíritos/O Livro dos Espíritos - Português.pdf'
import LivroEspiritos2 from '../DoutrinaEspirita/ObrasBasicas/O Livro dos Espíritos/The Spirits Book - English.pdf'
import LivroEspiritos3 from '../DoutrinaEspirita/ObrasBasicas/O Livro dos Espíritos/El Libro de los Espíritus - Español.pdf'
import LivroEspiritos4 from '../DoutrinaEspirita/ObrasBasicas/O Livro dos Espíritos/Le-Livre-des-Esprits.pdf'
import g1 from '../DoutrinaEspirita/ObrasBasicas/A Gênese/Génesis - Español.jpg'
import g2 from '../DoutrinaEspirita/ObrasBasicas/A Gênese/Genesis - English.png'
import g3 from '../DoutrinaEspirita/ObrasBasicas/A Gênese/A Gênese - Português.jpg'
import g4 from '../DoutrinaEspirita/ObrasBasicas/A Gênese/A Gênese - Francês.png'

import ag1 from '../DoutrinaEspirita/ObrasBasicas/A Gênese/Livro A Gêneses - Português.pdf'
import ag2 from '../DoutrinaEspirita/ObrasBasicas/A Gênese/Book Genesis - English.pdf'
import ag3 from '../DoutrinaEspirita/ObrasBasicas/A Gênese/Libro Génesis - Español.pdf'
import ag4 from '../DoutrinaEspirita/ObrasBasicas/A Gênese/LA-GENÈSE.pdf'
import ceu1 from '../DoutrinaEspirita/ObrasBasicas/O Céu e o Inferno/El cielo y el infierno - Español.jpeg'
import ceu2 from '../DoutrinaEspirita/ObrasBasicas/O Céu e o Inferno/Heaven and Hell - English.jpeg'
import ceu3 from '../DoutrinaEspirita/ObrasBasicas/O Céu e o Inferno/O Céu e o Inferno - Português.jpg'
import ceu4 from '../DoutrinaEspirita/ObrasBasicas/O Céu e o Inferno/O Céu e o Inferno - Francês.png'
import ceueinferno1 from '../DoutrinaEspirita/ObrasBasicas/O Céu e o Inferno/Livro O Céu e Inferno - Português.pdf'
import ceueinferno2 from '../DoutrinaEspirita/ObrasBasicas/O Céu e o Inferno/Heaven and Hell - English.pdf'
import ceueinferno3 from '../DoutrinaEspirita/ObrasBasicas/O Céu e o Inferno/Libro El Cielo y el Infierno - Español.pdf'
import ceueinferno4 from '../DoutrinaEspirita/ObrasBasicas/O Céu e o Inferno/LE-CIEL-ET-L’ENFER.pdf'
import { useTranslation } from 'react-i18next';

function BasicWorks() {
  const { t } = useTranslation();

// Lista dos livros para renderização dinâmica
const books = [
  { title: t('book1'), description: t('book1_description') },
  { title: t('book2'), description: t('book2_description') },
  { title: t('book3'), description: t('book3_description') },
  { title: t('book4'), description: t('book4_description') },
  { title: t('book5'), description: t('book5_description') },
];

  return (
    <div>
      {/* Descrição das Obras Básicas do Espiritismo */}
      <section className="bg-black100 container mx-auto mt-24 rounded-lg md:py-8 md:px-12 lg:px-24 xl:px-32">
        <div className="text-center">
          <h1 className="text-4xl text-white font-bold mx-4">{t('title')}</h1>
        </div>
        <div className="md:w-2/3 mx-auto text-white py-4">
          <p className="text-justify mx-4">{t('description')}</p>
          <div className="text-center py-4">
            {books.map((book, index) => (
              <div key={index} className="py-4">
                <p className="font-bold">{book.title}:</p>
                <p className="text-justify mx-4">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* O Evangelho Segundo o Espiritismo */}

     <h1 className='text-center mt-4 text-3xl'>O Evangelho Segundo o Espiritismo</h1>
{/* Container com imagens e texto */}
<div className="flex flex-col md:flex-row md:justify-between items-center py-8 container mx-auto border-orange300 border-2 mt-4">
  <div className="md:w-2/3 text-center md:text-left">
    <div className="flex flex-wrap justify-center md:justify-start">
      <img src={Evangelho1} alt="Imagem do El Evangelho Segúnd El Espiritismo" className="w-48 h-58   mx-2 mb-2" />
      <img src={Evangelho2} alt="Imagem do The Gospel According To Spiritism" className="w-48 h-58   mx-2 mb-2" />
      <img src={Evangelho3} alt="Imagem do Evangelho Segundo o Espiritismo" className="w-48 h-58   mx-2 mb-2" />
      <img src={Evangelho4} alt="Image de l'Évangile selon le Spiritisme" className="w-48 h-58   mx-2 mb-2" />
    </div>
  </div>
  <div className="md:w-1/2 text-black text-center md:text-left mt-4 md:mt-0">
    
  <div className="content">
      <div className="message-text">
        <p><b>O Evangelho Segundo O Espiritismo - Português</b></p>
        <p>Clique no link abaixo para baixar o arquivo:</p>
        <p><a href={ESEP} target="_blank" className="bg-blue-600 p-1 text-white rounded" download="O Evangelho Segundo o Espiritismo" ><button>Download do Arquivo</button></a></p>


        <p><b>The gospel According to spiritism - English</b></p>
        <p>Click on the link below to download the file:</p>
        <p><a href={ESEI} target="_blank" className="bg-blue-600 p-1 text-white rounded" download="The gospel According to spiritism - English.pdf"><button>File Download</button></a></p>
        
        



        <p><b> El evangelio según el espiritismo - Español</b></p>
        <p>Haga clic en el siguiente enlace para descargar el archivo:</p>
        <p><a href={ESEE} target="_blank" className="bg-blue-600 p-1 text-white rounded" download="El evangelio según el espiritismo - Español.pdf"><button>Descarga de archivos</button></a></p>

        <p><b> L'Évangile selon le Spiritisme - Français</b></p>
        <p>Cliquez sur le lien ci-dessous pour télécharger le fichier:</p>
        <p><a href={ESEE} target="_blank" className="bg-blue-600 p-1 text-white rounded" download="LEVANGILE-SELON-LE-SPIRITISME.pdf"><button>Téléchargement de fichier</button></a></p>
      </div>
    </div>





  </div>
</div>



{/* O Livro dos Médiuns */}


 <h1 className='text-center mt-4 text-3xl'>O Livro dos Médiuns</h1>
{/* Container com imagens e texto */}
<div className="flex flex-col md:flex-row md:justify-between items-center py-8 container mx-auto border-orange300 border-2 mt-4">
  <div className="md:w-2/3 text-center md:text-left">
    <div className="flex flex-wrap justify-center md:justify-start">
      <img src={img11} alt="Imagen del Libro de los Espíritus" className="w-48 h-58   mx-2 mb-2" />
      <img src={img22} alt="Image from the Book of Spirits" className="w-48 h-58   mx-2 mb-2" />
      <img src={img33} alt="Imagem do Livro dos Espíritos" className="w-48 h-58   mx-2 mb-2" />
      <img src={img34} alt="Image du Livre des Esprits" className="w-48 h-58   mx-2 mb-2" />
    </div>
  </div>
  <div className="md:w-1/2 text-black text-center md:text-left mt-4 md:mt-0">
    
  <div className="content">
      <div className="message-text">
        <p><b>O Livro dos Médiuns - Português</b></p>
        <p>Clique no link abaixo para baixar o arquivo:</p>
        <p><a href={LivroMediun1} target="_blank" className="bg-blue-600 p-1 text-white rounded" download="O Livro dos Médiuns - Português" ><button>Download do Arquivo</button></a></p>


        <p><b>The Book of Mediums - English</b></p>
        <p>Click on the link below to download the file:</p>
        <p><a href={LivroMediun2} target="_blank" className="bg-blue-600 p-1 text-white rounded" download="The Book of Mediums - English"><button>File Download</button></a></p>
        
        <p><b> El Libro de los Médiums - Español</b></p>
        <p>Haga clic en el siguiente enlace para descargar el archivo:</p>
        <p><a href={LivroMediun3} target="_blank" className="bg-blue-600 p-1 text-white rounded" download="El Libro de los Médiums - Español"><button>Descarga de archivos</button></a></p>


        <p><b>Le Livre des Médiums - Français</b></p>
        <p>Cliquez sur le lien ci-dessous pour télécharger le fichier:</p>
        <p><a href={LivroMediun4} target="_blank" className="bg-blue-600 p-1 text-white arrondi" download="Le Livre des Médiums - Français" ><button>Téléchargement du fichier</button ></a></p>
      </div>
    </div>





  </div>
</div>

{/* Fim - O Livro dos Médiuns*/}



{/* O Livro dos Espíritos */}



 <h1 className='text-center mt-4 text-3xl'>O Livro dos Espíritos</h1>
{/* Container com imagens e texto */}
<div className="flex flex-col md:flex-row md:justify-between items-center py-8 container mx-auto border-orange300 border-2 mt-4">
  <div className="md:w-2/3 text-center md:text-left">
    <div className="flex flex-wrap justify-center md:justify-start">
      <img src={img4} alt="Imagen del Libro de los Espíritus" className="w-48 h-58   mx-2 mb-2" />
      <img src={img5} alt="Image from the Book of Spirits" className="w-48 h-58   mx-2 mb-2" />
      <img src={img6} alt="Imagem do Livro dos Espíritos" className="w-48 h-58   mx-2 mb-2" />
      <img src={img7} alt="Image du Livre des Esprits" className="w-48 h-58   mx-2 mb-2" />
    </div>
  </div>
  <div className="md:w-1/2 text-black text-center md:text-left mt-4 md:mt-0">
    
  <div className="content">
      <div className="message-text">
        <p><b>O Livro dos Espíritos - Português</b></p>
        <p>Clique no link abaixo para baixar o arquivo:</p>
        <p><a href={LivroEspiritos1} target="_blank" className="bg-blue-600 p-1 text-white rounded" download="O Livro dos Espíritos - Português.pdf" ><button>Download do Arquivo</button></a></p>


        <p><b>The Spirits' Book - English</b></p>
        <p>Click on the link below to download the file:</p>
        <p><a href={LivroEspiritos2} target="_blank" className="bg-blue-600 p-1 text-white rounded" download="The Spirits Book - English.pdf"><button>File Download</button></a></p>
        
        



        <p><b> El libro de los espíritus - Español</b></p>
        <p>Haga clic en el siguiente enlace para descargar el archivo:</p>
        <p><a href={LivroEspiritos3} target="_blank" className="bg-blue-600 p-1 text-white rounded" download="El Libro de Los Espíritus - Español.pdf"><button>Descarga de archivos</button></a></p>



        <p><b>Le Livre des Esprits - Français</b></p>
        <p>Cliquez sur le lien ci-dessous pour télécharger le fichier:</p>
        <p><a href={LivroEspiritos4} target="_blank" className="bg-blue-600 p-1 text-white arrondi" download="Le Livre des Esprits.pdf" ><button>Téléchargement du fichier </button></a></p>
      </div>
    </div>





  </div>
</div>
{/* Fim- o Livro dos Espíritos */}

{/* A Gênese */}
 

 <h1 className='text-center mt-4 text-3xl'>A Gênese</h1>
{/* Container com imagens e texto */}
<div className="flex flex-col md:flex-row md:justify-between items-center py-8 container mx-auto border-orange300 border-2 mt-4">
  <div className="md:w-2/3 text-center md:text-left">
    <div className="flex flex-wrap justify-center md:justify-start">
      <img src={g1} alt="Imagen de Un Génesis" className="w-48 h-58   mx-2 mb-2" />
      <img src={g2} alt="Image of The Genesis" className="w-48 h-58   mx-2 mb-2" />
      <img src={g3} alt="Imagem da A Gênese" className="w-48 h-58   mx-2 mb-2" />
      <img src={g4} alt="Image de La Genèse" className="w-48 h-58   mx-2 mb-2" />
    </div>
  </div>
  <div className="md:w-1/2 text-black text-center md:text-left mt-4 md:mt-0">
    
  <div className="content">
      <div className="message-text">
        <p><b>A Gênese - Português</b></p>
        <p>Clique no link abaixo para baixar o arquivo:</p>
        <p><a href={ag1} target="_blank" className="bg-blue-600 p-1 text-white rounded" download="A Gênese - Português.pdf" ><button>Download do Arquivo</button></a></p>


        <p><b> Genesis - English</b></p>
        <p>Click on the link below to download the file:</p>
        <p><a href={ag2} target="_blank" className="bg-blue-600 p-1 text-white rounded" download="Genesis - English.pdf"><button>File Download</button></a></p>
        
        



        <p><b> La Génesis - Español</b></p>
        <p>Haga clic en el siguiente enlace para descargar el archivo:</p>
        <p><a href={ag3} target="_blank" className="bg-blue-600 p-1 text-white rounded" download="La Génesis"><button>Descarga de archivos</button></a></p>


        <p><b>La Genèse -Français</b></p>
        <p>Cliquez sur le lien ci-dessous pour télécharger le fichier:</p>
        <p><a href={ag4} target="_blank" className="bg-blue-600 p-1 text-white arrondi" download="La Genèse-Français.pdf" ><button>Téléchargement du fichier</ button ></a></p>
      </div>
    </div>





  </div>
</div>

{/* Fim - A  Gênese */}



{/* O Céu e o Inferno */}
 

 <h1 className='text-center mt-4 text-3xl'>O Céu e o Inferno</h1>
{/* Container com imagens e texto */}
<div className="flex flex-col md:flex-row md:justify-between items-center py-8 container mx-auto border-orange300 border-2 mt-4">
  <div className="md:w-2/3 text-center md:text-left">
    <div className="flex flex-wrap justify-center md:justify-start">
      <img src={ceu1} alt="Imagem do El Evangelho Segúnd El Espiritismo" className="w-48 h-58   mx-2 mb-2" />
      <img src={ceu2} alt="Imagem do The Gospel According To Spiritism" className="w-48 h-58   mx-2 mb-2" />
      <img src={ceu3} alt="Imagem do Evangelho Segundo o Espiritismo" className="w-48 h-58   mx-2 mb-2" />
      <img src={ceu4} alt="Imagem do Evangelho Segundo o Espiritismo" className="w-48 h-58   mx-2 mb-2" />
    </div>
  </div>
  <div className="md:w-1/2 text-black text-center md:text-left mt-4 md:mt-0">
    
  <div className="content">
      <div className="message-text">
        <p><b>O Céu e o Inferno - Português</b></p>
        <p>Clique no link abaixo para baixar o arquivo:</p>
        <p><a href={ceueinferno1} target="_blank" className="bg-blue-600 p-1 text-white rounded" download="O Céu e o Inferno - Português.pdf" ><button>Download do Arquivo</button></a></p>


        <p><b>Book - Heaven and Hell - English</b></p>
        <p>Click on the link below to download the file:</p>
        <p><a href={ceueinferno2} target="_blank" className="bg-blue-600 p-1 text-white rounded" download="Book - Heaven and Hell - English.pdf"><button>File Download</button></a></p>
        
        



        <p><b> Libro - El cielo y el infierno - Español</b></p>
        <p>Haga clic en el siguiente enlace para descargar el archivo:</p>
        <p><a href={ceueinferno3} target="_blank" className="bg-blue-600 p-1 text-white rounded" download="Libro - El cielo y el infierno - Español"><button>Descarga de archivos</button></a></p>



        <p><b>Ciel et enfer-français</b></p>
        <p>Cliquez sur le lien ci-dessous pour télécharger le fichier:</p>
        <p><a href={ceueinferno4} target="_blank" className="bg-blue-600 p-1 text-white arrondi" download="Ciel et Enfer - français.pdf" ><button>Télécharger le fichier</ button></a></p>
      </div>
    </div>





  </div>
</div>
{/* Fim - O Céu e o Inferno */}

{/* Download Palestras */}
{/* Fim - Download Palestras */}




    </div>
  );
}

export default function ObrasBasicas() {
  return (
    <div>
      <Navbar />
      <BasicWorks />
      <Footer />
    </div>
  );
}
