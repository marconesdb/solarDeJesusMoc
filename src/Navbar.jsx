import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import Logomarca from '../src/public/Logo.png';
import { FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);         // ← novo helper

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <Helmet>
        <title>Menu de Navegação | Solar de Jesus</title>
        <meta name="description" content="Menu de navegação do site" />
      </Helmet>

      <nav className="bg-white fixed top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex justify-between items-center h-24">

            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" onClick={closeMenu}>
                <img src={Logomarca} alt="Logo" className="h-20 rounded" />
              </Link>
            </div>

            {/* Botão hamburguer — z-30 garante que fique ACIMA do menu aberto */}
            <div className="md:hidden z-30">
              <button
                onClick={toggleMenu}
                type="button"
                aria-label="Abrir/fechar menu"
                className="text-gray-600 hover:text-gray-900 focus:outline-none p-1"
              >
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      d="M6 18L18 6M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : (
                    <path
                      d="M4 6H20M4 12H20M4 18H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center">
              <Link to="/" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300">
                {t('navbar.home')}
              </Link>

              {/* Dropdown Quem Somos */}
              <Menu as="div" className="relative">
                <Menu.Button className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300">
                  {t('navbar.whoWeAre')}
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    {[
                      { to: '/nossahistoria', label: t('navbar.ourHistory') },
                      { to: '/galeria', label: t('navbar.gallery') },
                      { to: '/nossosmomentos', label: t('navbar.ourMoments') },
                      { to: '/nossostrabalhos', label: t('navbar.ourWorks') },
                      { to: '/homenageados', label: t('navbar.honorees') },
                    ].map(({ to, label }) => (
                      <Menu.Item key={to}>
                        {({ active }) => (
                          <Link to={to} className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                            {label}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Menu>

              {/* Dropdown Doutrina Espírita */}
              <Menu as="div" className="relative">
                <Menu.Button className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300">
                  {t('navbar.spiritDoctrine')}
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    {[
                      { to: '/obrasbasicas', label: t('navbar.basicWorks') },
                      { to: '/artigosespiritas', label: t('navbar.spiritArticles') },
                      { to: '/oracoes', label: t('navbar.prayers') },
                      { to: '/downloadpalestras', label: t('navbar.downloads') },
                    ].map(({ to, label }) => (
                      <Menu.Item key={to}>
                        {({ active }) => (
                          <Link to={to} className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                            {label}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Menu>

              <Link to="/doacoes" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300">
                {t('navbar.donations')}
              </Link>
              <Link to="/contato" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300">
                {t('navbar.contact')}
              </Link>

              {/* Language Dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="text-gray-800 flex items-center px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300">
                  <FaGlobe className="mr-1" /> {t('navbar.language')}
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    {[
                      { lang: 'en', label: t('navbar.english') },
                      { lang: 'fr', label: t('navbar.french') },
                      { lang: 'es', label: t('navbar.spanish') },
                      { lang: 'pt', label: t('navbar.portuguese') },
                      { lang: 'it', label: t('navbar.italian') },
                    ].map(({ lang, label }) => (
                      <Menu.Item key={lang}>
                        {({ active }) => (
                          <button onClick={() => changeLanguage(lang)} className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm`}>
                            {label}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </div>

          {/* ── Mobile Menu ─────────────────────────────────────────────────────
              Mudanças-chave:
              1. Removido `absolute` → agora o menu empurra o conteúdo para baixo
                 dentro do próprio <nav>, então o botão não fica por baixo dele.
              2. `closeMenu` adicionado em todos os <Link> do mobile para fechar
                 o menu ao navegar.
          ──────────────────────────────────────────────────────────────────── */}
          {isOpen && (
            <div className="md:hidden bg-white w-full border-t border-gray-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" onClick={closeMenu} className="text-gray-800 block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
                  {t('navbar.home')}
                </Link>

                {/* Mobile Dropdown Quem Somos */}
                <Menu as="div" className="relative">
                  <Menu.Button className="text-gray-800 flex items-center px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300 w-full">
                    {t('navbar.whoWeAre')}
                  </Menu.Button>
                  <Menu.Items className="mt-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-full">
                    <div className="px-1 py-1">
                      {[
                        { to: '/nossahistoria', label: t('navbar.ourHistory') },
                        { to: '/galeria', label: t('navbar.gallery') },
                        { to: '/nossosmomentos', label: t('navbar.ourMoments') },
                        { to: '/nossostrabalhos', label: t('navbar.ourWorks') },
                        { to: '/homenageados', label: t('navbar.honorees') },
                      ].map(({ to, label }) => (
                        <Menu.Item key={to}>
                          {({ active }) => (
                            <Link to={to} onClick={closeMenu} className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                              {label}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Menu>

                {/* Mobile Dropdown Doutrina Espírita */}
                <Menu as="div" className="relative">
                  <Menu.Button className="text-gray-800 flex items-center px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300 w-full">
                    {t('navbar.spiritDoctrine')}
                  </Menu.Button>
                  <Menu.Items className="mt-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-full">
                    <div className="px-1 py-1">
                      {[
                        { to: '/obrasbasicas', label: t('navbar.basicWorks') },
                        { to: '/artigosespiritas', label: t('navbar.spiritArticles') },
                        { to: '/oracoes', label: t('navbar.prayers') },
                        { to: '/downloadpalestras', label: t('navbar.downloads') },
                      ].map(({ to, label }) => (
                        <Menu.Item key={to}>
                          {({ active }) => (
                            <Link to={to} onClick={closeMenu} className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                              {label}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Menu>

                {/* <Link to="/venda" onClick={closeMenu} className="text-gray-800 block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
                  {t('navbar.bookSale')}
                </Link>*/}

     
                <Link to="/doacoes" onClick={closeMenu} className="text-gray-800 block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
                  {t('navbar.donations')}
                </Link>
                <Link to="/contato" onClick={closeMenu} className="text-gray-800 block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
                  {t('navbar.contact')}
                </Link>

                {/* Mobile Language Dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="text-gray-800 flex items-center px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300 w-full">
                    <FaGlobe className="mr-1" /> {t('navbar.language')}
                  </Menu.Button>
                  <Menu.Items className="mt-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-full">
                    <div className="px-1 py-1">
                      {[
                        { lang: 'en', label: t('navbar.english') },
                        { lang: 'fr', label: t('navbar.french') },
                        { lang: 'es', label: t('navbar.spanish') },
                        { lang: 'pt', label: t('navbar.portuguese') },
                        { lang: 'it', label: t('navbar.italian') },
                      ].map(({ lang, label }) => (
                        <Menu.Item key={lang}>
                          {({ active }) => (
                            <button onClick={() => changeLanguage(lang)} className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm`}>
                              {label}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;