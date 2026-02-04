import  { useState } from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import img1 from '../contato/img-contato/Contato.svg';
import emailsjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export default function Contato() {
  const { t } = useTranslation(); // Hook para usar as traduções
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert(t("fill_all_fields")); // Mensagem traduzida
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      phone: phone,
    };
    emailsjs.send("service_533rczb", "template_6pzcvo5", templateParams, "oQWiNeyUFxhBYorRd")
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
        setPhone('');
      }, (err) => {
        console.log("ERRO: ", err);
      });
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 mt-28">
          {t("contact_us")}
        </h1>

        {/* Formulário de Contato */}
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <form className="form" onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">{t("namelabel")}:</label>
              <input
                id="name"
                className="input mt-1 w-full border-gray-300 rounded-md"
                type="text"
                placeholder={t("name")}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">{t("emaillabel")}:</label>
              <input
                id="email"
                className="input mt-1 w-full border-gray-300 rounded-md"
                type="text"
                placeholder={t("email")}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">{t("phonelabel")}:</label>
              <input
                id="phone"
                className="input mt-1 w-full border-gray-300 rounded-md"
                type="text"
                placeholder={t("phone")}
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">{t("messagelabel")}:</label>
              <textarea
                id="message"
                className="textarea mt-1 w-full border-gray-300 rounded-md"
                placeholder={t("message")}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>

            <button
              className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              type="submit"
            >
              {t("send")}
            </button>
          </form>
        </div>

        {/* Imagem */}
        <section className="mt-8 flex justify-center items-center">
          <img src={img1} alt="Imagem" className="w-96 h-96 rounded-lg" />
        </section>

        {/* Mapa incorporado */}
        <h1 className="text-3xl font-bold text-center mb-8 mt-28">
          {t("location")}
        </h1>
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30567.241047454525!2d-43.86806810711937!3d-16.731584744450497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab5499cbd6ed4b%3A0x252e94449b8c3ad0!2sInstitui%C3%A7%C3%A3o%20Esp%C3%ADrita%20De%20Caridade%20Solar%20De%20Jesus!5e0!3m2!1spt-BR!2sbr!4v1708212316098!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}
