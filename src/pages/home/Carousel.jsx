import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from '../home/img-carousel/Captura de Tela (4035).png';
import slide2 from '../home/img-carousel/Captura de Tela (4036).png';
import slide3 from '../home/img-carousel/Captura de Tela (4035).png';
import slide4 from '../home/img-carousel/Captura de Tela (4036).png';

export default function Carousel() {
  const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,  // Certifique-se de que as setas estão habilitadas
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,  // Habilite as setas para esta quebra de ponto
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,  // Desabilite as setas para dispositivos móveis, se necessário
        },
      },
    ],
  };

  const mobileImageStyle = {
    height: window.innerWidth >= 768 ? '' : '300px', // Defina a altura para dispositivos móveis
    objectFit: 'cover', // Garante que a imagem cubra o espaço disponível
    width: '100%', // Garante que a imagem ocupe toda a largura disponível
  };

  return (
    <div className="carousel-container  md:mx-8">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img
              src={slide}
              alt={`Slide ${index}`}
              style={mobileImageStyle}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
