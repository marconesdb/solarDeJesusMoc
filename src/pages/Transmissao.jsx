import Navbar from '../Navbar';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';
export default function Transmissao() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <link rel="icon" href="/Favicons/favicon-16x16.png" />
      </Helmet>
      <Navbar />
      <div className="flex-grow bg-gray-100 flex justify-center items-center mt-24">
        <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Transmissão Online</h1>
          <div className="aspect-w-16 aspect-h-9 flex justify-center items-center mb-6">
            <iframe
              src="https://www.youtube.com/embed/C0XWI8se1bM?si=_DAWOHYt-YI-W1NJ"
              title="Embedded Video"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="text-center text-gray-700">Descrição do vídeo...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
