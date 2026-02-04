import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link, useLocation } from 'react-router-dom';
import { livros1 } from '../pages/livros1';
import { livros2 } from '../pages/livros2'; 
import { livros3 } from '../pages/livros3'; 
import { livros4 } from '../pages/livros4'; 
 

const Pagina2 = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const location = useLocation();

    // Função para filtrar os livros com base no termo de pesquisa
    const filterBooks = (term) => {
        const allBooks = [...livros2]; // Inicialmente apenas livros da Pagina1.jsx
        // Se searchTerm não estiver vazio, adicione livros da Pagina2.jsx à lista de todos os livros
        if (term.trim() !== '') {
            allBooks.push(...livros1);
            allBooks.push(...livros3);
            allBooks.push(...livros4);
            allBooks.push(...livros5);
        }
        return allBooks.filter(book =>
            book.title.toLowerCase().includes(term.toLowerCase())
        );
    };

    useEffect(() => {
        setFilteredBooks(filterBooks(searchTerm));
    }, [searchTerm]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <Navbar />
            <main className="container mx-auto py-8 mt-24 sm:px-4">
                {/* Banner */}
                <div className="text-center mb-8 bg-amber-300">
                    <h1 className="text-3xl font-bold">Vendas e Entregas somente para a cidade de Montes Claros-MG</h1>
                    <p className="text-gray-700">Não perca nossas promoções exclusivas!</p>
                </div>
                {/* Campo de pesquisa */}
                <div className="flex justify-end mt-4">
                    <p className='px-4 py-2 mb-4 font-bold'>Pesquisar :</p>
                    <input
                        type="text"
                        placeholder="Digite o nome do Livro"
                        className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 mb-4 mr-4"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>

                {/* Section 1 */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Renderiza os livros de livros2.jsx */}
                    {filteredBooks.map((book, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                            <img src={book.image} alt={book.title} className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2" style={{ height: '50px' }}>{book.title}</h2>
                                <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>{book.description}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="font-bold text-xl">R${book.price}</span>
                                    <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                                </div>
                            </div>
                        </div>
                    ))}
            </section>






                   {/* Botão de Páginas*/}
                <div className="text-center mt-8">
                <div className="flex flex-wrap justify-center">
                        <Link to="/venda" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 hover:bg-amber-500`}>Anterior</Link>
                        <Link to="/venda" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 ${location.pathname === '/venda' ? 'bg-amber-500 text-white' : 'hover:bg-amber-500'}`}>1</Link>
                        <Link to="/Pagina2" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 ${location.pathname === '/Pagina2' ? 'bg-amber-500 text-white' : 'hover:bg-amber-500'}`}>2</Link>
                        <Link to="/Pagina3" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 ${location.pathname === '/Pagina3' ? 'bg-amber-500 text-white' : 'hover:bg-amber-500'}`}>3</Link>
                        <Link to="/Pagina4" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 ${location.pathname === '/Pagina4' ? 'bg-amber-500 text-white' : 'hover:bg-amber-500'}`}>4</Link>
                        {/* <Link to="/Pagina5" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 ${location.pathname === '/Pagina5' ? 'bg-amber-500 text-white' : 'hover:bg-amber-500'}`}>5</Link> */}
                        <Link to="/Pagina3" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 hover:bg-amber-500`}>Próximos</Link>
                    </div>
                </div>


            </main>


            <Footer />
        </div>
    )
}

export default Pagina2;
