
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import palestra1 from '../DoutrinaEspirita/Download de Palestras/A Consciência da Gratidão.png'
import palestra2 from '../DoutrinaEspirita/Download de Palestras/Melhor Sofrer no Bem.png'
import palestra3 from '../DoutrinaEspirita/Download de Palestras/Deixai vir a mim as Criancinhas.png'
import palestra4 from '../DoutrinaEspirita/Download de Palestras/A Outra Face.png'
import palestra5 from '../DoutrinaEspirita/Download de Palestras/Causas Atuais das Aflições.png'
import palestra6 from '../DoutrinaEspirita/Download de Palestras/Aceita a Vida.png'
const DownloadPalestras = () => {
  // Links diretos para os arquivos PPTX hospedados no Google Drive
  const palestra1DownloadLink = 'https://drive.google.com/uc?id=1I4Ty3aFBRQPygm_S33Q1DSfIyLVEmQlm&export=download';
  const palestra2DownloadLink = 'https://drive.google.com/uc?id=1XzdMUFoFC1Kyw2y5AhWnuRjwjPXZr9F7&export=download';
  const palestra3DownloadLink = 'https://drive.google.com/uc?id=1_xCytloQYejW4y7uH6EwwWL3WcV0TRwe&export=download';


  const palestra4DownloadLink = 'https://drive.google.com/uc?id=11vUxDm7Z5j58EADeKfaWQCBilbkIk-Ht&export=download';
  const palestra5DownloadLink = 'https://drive.google.com/uc?id=1Z0PvX5o8uFa9c1QUu598V4kwACNJSAo6&export=download';
  const palestra6DownloadLink = 'https://drive.google.com/uc?id=1qCGKhI19QkY5t0iyYdwgKfXZ7KUKQuGI&export=download';

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-semibold text-center mb-8 mt-28">Download de Palestras</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={palestra1} alt="Palestra 1" className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Palestra</h2>
                <p className="text-gray-600">Como adquirir a consciência de gratidão e cultiva-la no dia a dia.</p>
                <div className="mt-4">
                  <a href={palestra1DownloadLink} download className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Baixar</a>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={palestra2} alt="Palestra 2" className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Palestra</h2>
                <p className="text-gray-600">Sofrer no mal, é preferível eleger o bem e nele sofrendo nas lutas regeneradoras.</p>
                <div className="mt-4">
                  <a href={palestra2DownloadLink} download className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Baixar</a>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={palestra3} alt="Palestra 3" className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Palestra </h2>
                <p className="text-gray-600">Outra visão sobre a passagem de Jesus, Deixai  vir a mim as criancinhas</p>
                <div className="mt-4">
                  <a href={palestra3DownloadLink} download className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Baixar</a>
                </div>
              </div>
            </div>
            {/* Adicione mais itens de palestra conforme necessário */}
            {/* Item 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={palestra4} alt="Palestra 1" className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Palestra</h2>
                <p className="text-gray-600">A outra face segundo explicações lógicas do pensamento de Jesus </p>
                <div className="mt-4">
                  <a href={palestra4DownloadLink} download className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Baixar</a>
                </div>
              </div>
            </div>

            {/* Item 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={palestra5} alt="Palestra 2" className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Palestra</h2>
                <p className="text-gray-600">As causas atuais das aflições segundo a Doutrina Espírita a luz da fé racional</p>
                <div className="mt-4">
                  <a href={palestra5DownloadLink} download className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Baixar</a>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={palestra6} alt="Palestra 3" className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Palestra </h2>
                <p className="text-gray-600">Aceita resignado os impositivos da Vida, entretanto lute, esforce para melhorar a situação em que se encontra.</p>
                <div className="mt-4">
                  <a href={palestra6DownloadLink} download className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Baixar</a>
                </div>
              </div>
            </div>
          {/* Adicione mais itens de palestra conforme necessário */}

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DownloadPalestras;
