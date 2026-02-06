import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
//import Pix from '../public/Pix.png';
import { FaWhatsapp } from 'react-icons/fa';

const Form_Vendas = () => {

    return (
        <div>
            <Navbar />
            <main className="container mx-auto py-8 mt-24 sm:px-4">
                {/* Banner */}
                <div className="text-center mb-8 bg-amber-300">
                    <h1 className="text-2xl font-bold">Vendas e Entregas somente para a Cidade de Montes Claros-MG</h1>
                    <p className="text-gray-700 font-bold">Entregamos em até dois dias úteis seu pedido.</p>
                </div>
                {/* Adicionar uma Imagem com QRcode Pix Solar de Jesus */}
                <img src={Pix} alt="QR Code Pix" className="mx-auto mb-8" style={{ width: '450px', height: '800px' }} />
                <div className="max-w-md mx-auto mt-8">
                    <h2 className="text-2xl font-bold mb-4  text-center ">Envie seu Comprovante PIX</h2>
                    <h2 className="text-2xl font-bold mb-4  text-center "><em>Clique no botão abaixo e informe sobre seu pedido.</em></h2>
                    <div className='flex justify-center'>
                        <a href="https://wa.me/5538992182727" target='_blank' className="text-gray-400 hover:text-green-500">
                        <FaWhatsapp  className='' size={64} />
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Form_Vendas;
