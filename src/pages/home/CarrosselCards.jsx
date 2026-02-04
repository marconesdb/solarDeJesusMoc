import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import img0 from '../../public/Pergaminho.png';
import img1 from '../../public/Cartaz-09.png';
import img2 from '../../public/Cartaz - 1.png';
import img3 from '../../public/Cartaz-2.png';
import img4 from '../../public/Cartaz-3.png';
import img5 from '../../public/Evangelho.png';
import img6 from '../../public/Visita.png';
import img7 from '../../public/Evangelizacao.png';
import img8 from '../../public/localizacao.png';
import img9 from '../../public/Mensagem.png';
import img10 from '../../public/Cartaz-08.png';
import img11 from '../../public/Instagram.png';
import img12 from '../../public/Instituicao.png';
// import img13 from '../../public/Aniversário.png';
import img14 from '../../public/Natal2025.png';
//import img15 from '../../public/Pergaminho-02.png';


const ImageCarousel = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    { id: 0, imageUrl: img0},
    //{ id: 13, imageUrl: img13 },
    { id: 1, imageUrl: img1},
    { id: 2, imageUrl: img2},
    { id: 3, imageUrl: img3 },
    { id: 4, imageUrl: img4 },
    { id: 5, imageUrl: img5},
    { id: 6, imageUrl: img6 },
    { id: 7, imageUrl: img7},
    { id: 9, imageUrl: img9},
    { id: 10, imageUrl: img10},
    { id: 11, imageUrl: img11 },
    { id: 8, imageUrl: img8},
    { id: 12, imageUrl: img12 },
    { id: 14, imageUrl: img14 },
    //{ id: 15, imageUrl: img15 },
   
   
  ];

  const getCardsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 768) return 2; // Tablet pequeno
      if (window.innerWidth < 1024) return 3; // Tablet
      if (window.innerWidth < 1280) return 4; // Desktop pequeno
      return 5; // Desktop grande
    }
    return 5;
  };

  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());
  const totalSlides = Math.ceil(cards.length / cardsPerSlide);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
      setCurrentSlide(prev => Math.min(prev, Math.ceil(cards.length / getCardsPerSlide()) - 1));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cards.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  useEffect(() => {
    let intervalId;
    if (!isPaused && !modalOpen) {
      intervalId = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(intervalId);
  }, [isPaused, modalOpen, nextSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const getCardsForSlide = (slideIndex) => {
    const startIndex = slideIndex * cardsPerSlide;
    const slideCards = cards.slice(startIndex, startIndex + cardsPerSlide);
    
    // Preencher com cards vazios para manter o layout consistente
    const emptyCards = cardsPerSlide - slideCards.length;
    if (emptyCards > 0) {
      for (let i = 0; i < emptyCards; i++) {
        slideCards.push({ id: `empty-${i}`, imageUrl: null, isEmpty: true });
      }
    }
    
    return slideCards;
  };

  const openModal = (image) => {
    if (!image.isEmpty) {
      setSelectedImage(image);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="relative w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16">
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="min-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 px-1 sm:px-2">
              {getCardsForSlide(slideIndex).map((card) => (
                <div 
                  key={card.id}
                  className={`aspect-[3/4] ${card.isEmpty ? 'invisible' : ''}`}
                >
                  <div 
                    className="bg-white rounded-lg shadow-lg p-2 sm:p-4 h-full cursor-pointer transform transition-transform hover:scale-105"
                    onClick={() => openModal(card)}
                  >
                    {!card.isEmpty && (
                      <>
                        <img
                          src={card.imageUrl}
                          alt={card.title}
                          className="w-full h-[calc(100%-0.1rem)] object-contain rounded-md"
                        />
                        <h3 className="mt-2 text-center text-sm sm:text-lg font-semibold">{card.title}</h3>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 sm:p-2 rounded-full shadow-md z-10"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 sm:p-2 rounded-full shadow-md z-10"
          onClick={nextSlide}
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 rounded-lg w-full max-w-lg max-h-[90vh] overflow-auto relative">
            <button
              className="absolute right-2 top-2 sm:right-4 sm:top-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200"
              onClick={closeModal}
            >
              <X className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="max-w-full h-auto"
            />
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-center">
              {selectedImage.title}
            </h3>
          </div>
        </div>
      )}

      <div className="flex justify-center gap-1 sm:gap-2 mt-2 sm:mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;