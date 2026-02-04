import { useState } from 'react';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import ReactPlayer from 'react-player';
import { X } from 'lucide-react';

export default function NossosMomentos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      url: 'https://youtube.com/shorts/NTFlcvPjEJM',
      title: 'Aniversário ENREJE 2024',
      type: 'short'
    },
    {
      id: 2,
      url: 'https://youtube.com/shorts/EIt8_l29nDg',
      title: 'Jantar ENREJE 2024',
      type: 'short'
    },
    {
      id: 3,
      url: 'https://www.youtube.com/shorts/wqPV-OorCD8',
      title: 'Jantar ENREJE 2024',
      type: 'short'
    },
    {
      id: 4,
      url: 'https://www.youtube.com/shorts/Kq1ypvViKzs',
      title: 'Abertura do ENREJE 2024',
      type: 'short'
    },
    {
      id: 5,
      url: 'https://www.youtube.com/watch?v=HqZnp9CCtUs&t=181s',
      title: 'Palestra especial no 42° aniversário do Solar de Jesus. Tema: Trabalho, Solidariedade e Tolerância',
      type: 'video'
    },
    {
      id: 6,
      url: 'https://www.youtube.com/watch?v=SjssZaOa-1Y',
      title: 'Palestra especial no 42° aniversário do Solar de Jesus. Tema: Evangelho e Vida',
      type: 'video'
    },
    {
      id: 7,
      url: 'https://www.youtube.com/embed/sbuK_D_P6IQ?si=ljyKKATQOsKnW8wP',
      title: 'Comemorações do Natal 2024 Solar de Jesus',
      type: 'video'
    },


    {
      id: 8,
      url: 'https://www.youtube.com/embed/bC_pSlu011o?si=wE1fn4W4rFmkm-fB',
      title: 'Distribuição de Cestas Natalinas 2024 Solar de Jesus',
      type: 'video'
    }
  ];

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalOpen(false);
  };

  const getYouTubeThumbnail = (url) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/shorts\/))([^&\s]+)/)?.[1];
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold text-center mb-8 mt-28">Nossos Momentos - Galeria de Vídeos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              onClick={() => openModal(video)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openModal(video)}
            >
              <div className="relative aspect-video cursor-pointer group">
                <img
                  src={getYouTubeThumbnail(video.url)}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-600 border-b-8 border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold line-clamp-2">{video.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {video.type === 'short' ? 'Short' : 'Vídeo'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {modalOpen && selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          role="presentation"
        >
          <div 
            className="relative w-full  max-w-6xl max-h-[70vh]  h-[50vh] sm:h-[70vh] bg-white rounded-lg shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none"
              aria-label="Fechar vídeo"
            >
              <X size={24} />
            </button>
            <div className="flex-1 min-h-0">
              <div className="w-full h-full">
                <ReactPlayer
                  url={selectedVideo.url}
                  width="100%"
                  height="100%"
                  controls
                  playing
                  config={{
                    youtube: {
                      playerVars: {
                        modestbranding: 1,
                        rel: 0
                      }
                    }
                  }}
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>
            </div>
            <div className="p-4 border-t mt-auto">
              <h2 className="text-xl font-semibold">{selectedVideo.title}</h2>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}