import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear(); // Obtém o ano atual

  return (
    <footer className="bg-white text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Texto de direitos reservados */}
          <p
            className="text-center md:text-left md:ml-4 mb-4 md:mb-0"
            dangerouslySetInnerHTML={{
              __html: t('footer.rightsReserved', { year: currentYear }),
            }}
          ></p>

          {/* Informações de contato */}
          <div className="text-center md:text-left">
            <p className="mb-2">{t('footer.address')}</p>
            <p>{t('footer.postalCode')}</p>
            <p>{t('footer.cnpj')}</p>
            <p>{t('footer.phone')}</p>
            <p>{t('footer.alfredoContact')}</p>
            <p>{t('footer.claudioContact')}</p>
            <p className="break-words">
              <a href={`mailto:${t('footer.email')}`}>{t('footer.email')}</a>
            </p>

            {/* Ícones de redes sociais */}
            <div className="flex justify-center md:justify-start mt-4">
              <a
                href={t('footer.socialMedia.facebook')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 mr-4"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href={t('footer.socialMedia.instagram')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 mr-4"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href={t('footer.socialMedia.whatsapp')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
