import  { useState } from 'react';
import PropTypes from 'prop-types';
import img1 from '../img-cartaz-palestras/1.png';
import img2 from '../img-cartaz-palestras/2.png';
import img3 from '../img-cartaz-palestras/3.png';
import img4 from '../img-cartaz-palestras/Cartaz-1.png';
import img5 from '../img-cartaz-palestras/Cartaz-2.png';
import img6 from '../img-cartaz-palestras/Cartaz-3.png';
import img7 from '../img-cartaz-palestras/Cartaz-04.png';
import img8 from '../img-cartaz-palestras/Cartaz-05.png';
import img9 from '../img-cartaz-palestras/Cartaz-06.png';

const Modal = ({ isOpen, onClose, imgSrc, imgAlt }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white max-w-full md:max-w-4xl p-4 rounded-lg shadow-lg relative">
        <div className='top-[-8] pb-8'>
          <button className="absolute  right-4 z-50 text-gray-600 hover:text-gray-900" onClick={onClose}>
           Fechar
          </button>
        </div>
        <div className="relative">
          <img src={imgSrc} alt={imgAlt} className="w-full h-auto max-h-full md:max-h-screen" style={{ maxHeight: 'calc(100vh - 100px)' }} />
        </div>
      </div>
    </div>
  );
};




Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

const ImageContainer = ({ src, alt }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={`w-full md:w-64 h-90 flex items-center justify-center border border-gray-300 rounded-lg overflow-hidden mx-auto cursor-pointer transition duration-300 transform hover:scale-105`} onClick={() => setModalOpen(true)}>
        <img
          className="object-cover object-center w-full h-full"
          src={src}
          alt={alt}
        />
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} imgSrc={src} imgAlt={alt} />
    </>
  );
};

const Container = () => {
  const images = [
    { src: img1, alt: "Imagem 1" },
    { src: img2, alt: "Imagem 2" },
    { src: img3, alt: "Imagem 3" },
    { src: img4, alt: "Imagem 4" },
    { src: img5, alt: "Imagem 5" },
    { src: img6, alt: "Imagem 6" },
    { src: img7, alt: "Imagem 7" },
    { src: img8, alt: "Imagem 8" },
    { src: img9, alt: "Imagem 9" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <ImageContainer key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default Container;
