import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import Logomarca from '../src/public/Logo.png';
import { FaGlobe } from 'react-icons/fa'; // Ícone de globo
import { useTranslation } from 'react-i18next';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Hook para traduções
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={Logomarca} alt="Logo" className="h-20 rounded" />
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="block h-6 w-6"
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

          {/* Desktop Menu Items */}
          <div className="hidden md:flex md:items-center">
            <Link
              to="/"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300"
            >
           {t('navbar.home')}
            </Link>

            {/* Dropdown "Quem Somos" */}
            <Menu as="div" className="relative">
              <Menu.Button className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300">
              {t('navbar.whoWeAre')}
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/nossahistoria"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                      {t('navbar.ourHistory')}
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/galeria"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        {t('navbar.gallery')}
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/nossosmomentos"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        {t('navbar.ourMoments')}
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/nossostrabalhos"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        {t('navbar.ourWorks')} 
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/homenageados"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                            {t('navbar.honorees')}   
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>

            {/* Dropdown "Doutrina Espírita" */}
            <Menu as="div" className="relative">
              <Menu.Button className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300">
              {t("navbar.spiritDoctrine")} 
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/obrasbasicas"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                      {t('navbar.basicWorks')}  
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/artigosespiritas"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                             {t('navbar.spiritArticles')} 
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/oracoes"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                         {t("navbar.prayers")}  
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/downloadpalestras"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                           {t("navbar.downloads")}   
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>

            {/* <Link
              to="/venda"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300"
            >
                 {t("navbar.bookSale")}   
            </Link> */}
            <Link
              to="/doacoes"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300"
            >
               {t("navbar.donations")}  
            </Link>
            <Link
              to="/contato"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300"
            >
               {t("navbar.contact")}   
            </Link>

            {/* Language Dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="text-gray-800 flex items-center px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300">
                <FaGlobe className="mr-1" /> {t('navbar.language')}
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                     <button
                     onClick={() => changeLanguage('en')}
                     className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm`}
                   >
                     {t('navbar.english')}
                   </button>
                   
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                      onClick={() => changeLanguage('fr')}
                      className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm`}
                    >
                      {t('navbar.french')}
                    </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                    <button
                    onClick={() => changeLanguage('es')}
                    className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm`}
                  >
                    {t('navbar.spanish')}
                  </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                      onClick={() => changeLanguage('pt')}
                      className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm`}
                    >
                      {t('navbar.portuguese')}
                    </button> 
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-24 left-0 w-full bg-white z-20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="text-gray-800 block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
              >
                  {t('navbar.home')}
              </Link>

              {/* Mobile Dropdown "Quem Somos" */}
              <Menu as="div" className="relative">
                <Menu.Button className="text-gray-800 flex items-center px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300 w-full">
                {t('navbar.whoWeAre')}
                </Menu.Button>
                <Menu.Items className="mt-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-full">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/nossahistoria"
                          className={`${
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          {t('navbar.ourHistory')} 
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/galeria"
                          className={`${
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                           {t('navbar.gallery')}   
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/nossosmomentos"
                          className={`${
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                             {t('navbar.ourMoments')}   
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/nossostrabalhos"
                          className={`${
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          {t('navbar.ourWorks')} 
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/homenageados"
                          className={`${
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                         {t('navbar.honorees')}  
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>

              {/* Mobile Dropdown "Doutrina Espírita" */}
              <Menu as="div" className="relative">
                <Menu.Button className="text-gray-800 flex items-center px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300 w-full">
                {t('navbar.spiritDoctrine')}
                </Menu.Button>
                <Menu.Items className="mt-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-full">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/obrasbasicas"
                          className={`${
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                         {t('navbar.basicWorks')}
                         
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/artigosespiritas"
                          className={`${
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                        {t('navbar.spiritArticles')} 
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/oracoes"
                          className={`${
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                           {t('navbar.prayers')} 
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/downloadpalestras"
                          className={`${
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                             {t('navbar.downloads')}  
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>

              <Link
                to="/venda"
                className="text-gray-800 block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
              >
                 {t('navbar.bookSale')}   
              </Link>
              <Link
                to="/doacoes"
                className="text-gray-800 block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
              >
                  {t('navbar.donations')}  
              </Link>
              <Link
                to="/contato"
                className="text-gray-800 block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
              >
                {t('navbar.contact')}  
              </Link>

              {/* Mobile Language Dropdown */}
              <Menu as="div" className="relative z-20">
                <Menu.Button className="text-gray-800 flex items-center px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange-400 hover:text-gray-500 transition duration-300 w-full">
                  <FaGlobe className="mr-1" />    {t('navbar.language')} 
                </Menu.Button>
                <Menu.Items className="mt-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-full">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                       <button
                       onClick={() => changeLanguage('en')}
                       className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm`}
                     >
                       {t('navbar.english')}
                     </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                        onClick={() => changeLanguage('fr')}
                        className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm`}
                      >
                        {t('navbar.french')}
                      </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                        onClick={() => changeLanguage('es')}
                        className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm`}
                      >
                        {t('navbar.spanish')}
                      </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                        onClick={() => changeLanguage('pt')}
                        className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm`}
                      >
                        {t('navbar.portuguese')}
                      </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
