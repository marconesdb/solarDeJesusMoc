import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import homenageado1 from '../quemsomos/img-homenageados/Cunha.jpg';
import homenageado2 from '../quemsomos/img-homenageados/Sr-Joaquin.jpeg';
import homenageado3 from '../quemsomos/img-homenageados/Mariza.jpeg';
import homenageado4 from '../quemsomos/img-homenageados/Deuslira.jpeg';
import homenageado5 from '../quemsomos/img-homenageados/Orion.jpeg';
import homenageado6 from '../quemsomos/img-homenageados/Neuza.jpeg';
import homenageado7 from '../quemsomos/img-homenageados/Marta.jpeg';
import homenageado8 from '../quemsomos/img-homenageados/Zeze.jpeg';

const homenageados = [
  { 
    nome: 'Alder Cunha', 
    descricao: "Falecido Trabalhador do Centro Espírita Solar de Jesus",
    imagem: homenageado1
  },
  { 
    nome: 'Joaquim Araujo', 
    descricao: "Falecido Trabalhador do Centro Espírita Solar de Jesus",
    imagem: homenageado2
  },
  { 
    nome: 'Marisa Santos Bonfim', 
    descricao: "Falecida Trabalhadora do Centro Espírita Solar de Jesus",
    imagem: homenageado3
  },
  { 
    nome: 'Deuslira Rameta Gonçalves Barbosa', 
    descricao: "Falecida Trabalhadora do Centro Espírita Solar de Jesus",
    imagem: homenageado4
  },
  { 
    nome: 'Orion Barbosa', 
    descricao: "Falecido Trabalhador do Centro Espírita Solar de Jesus",
    imagem: homenageado5
  },
  { 
    nome: 'Maria Neuza Rameta Gonçalves', 
    descricao: "Falecida Trabalhadora do Centro Espírita Solar de Jesus",
    imagem: homenageado6
  },
  { 
    nome: 'Marta Spyer Rabelo', 
    descricao: "Falecida Trabalhadora do Centro Espírita Solar de Jesus",
    imagem: homenageado7
  },
  { 
    nome: 'Maria José dos Santos Nunes (ZEZÉ)', 
    descricao: "Falecida Trabalhadora do Centro Espírita Solar de Jesus",
    imagem: homenageado8
  }
];

export default function Homenageados() {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mt-24 text-center mb-4">{t('homenageados.title')}</h1>
        <p className="text-justify"><i>{t('homenageados.description')}</i></p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {homenageados.map((homenageado, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <img src={homenageado.imagem} alt={homenageado.nome} className="w-full mb-4 rounded-lg" />
              <h2 className="text-xl font-bold mb-2">{homenageado.nome}</h2>
              <p>{homenageado.descricao}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
