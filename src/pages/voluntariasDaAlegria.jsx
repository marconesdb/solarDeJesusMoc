import React, { useState, useEffect } from 'react';
import { 
  Heart, Users, Sun, Calendar, DollarSign, Menu, X, 
 MapPin, Mail, Phone, CheckCircle, ArrowRight,
  Instagram, Facebook, ExternalLink, Copy
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend 
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

      
     



// --- TIPO & DADOS ---

// Cores da marca
const COLORS = {
  primary: '#f59e0b', // Amber 500
  secondary: '#0284c7', // Sky 600
  accent: '#10b981', // Emerald 500
  text: '#1e293b',
  background: '#f8fafc'
};

// Dados de Transparência (Requisito 2.4)
const FINANCIAL_DATA = [
  { name: 'Compra de Material', value: 35, color: '#0ea5e9' },
  { name: 'Oficina de Costura', value: 25, color: '#f59e0b' },
  { name: 'Manutenção das Máquinas de Costura', value: 20, color: '#64748b' },
  { name: 'Enxoval de Bebê', value: 15, color: '#8b5cf6' },
  { name: 'Campanhas Bazar', value: 5, color: '#ec4899' },
];

// Dados de Projetos (Requisito 2.3)
const PROJECTS = [
  {
    id: 1,
    title: "Confecção de Enxovais",
    desc: "Produzimos enxovais completos para gestantes em situação de vulnerabilidade, levando conforto e dignidade.",
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    stat: "150+ Enxovais este ano"
  },
  {
    id: 2,
    title: "Bazar Solidário",
    desc: "Roupas e utensílios a preços simbólicos. Toda a renda é revertida para a manutenção das obras assistenciais.",
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    stat: "Próximo: 00/00"
  },
  {
    id: 3,
    title: "Oficina de Costura",
    desc: "Capacitação profissional e terapia ocupacional através da arte da costura.",
    icon: <Sun className="w-6 h-6 text-amber-500" />,
    stat: "20 Alunas ativas"
  },
  {
    id: 4,
    title: "Assistência Social",
    desc: "Acolhimento fraterno e distribuição de cestas básicas para famílias cadastradas.",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    stat: "80 Famílias/mês"
  }
];

// --- COMPONENTES ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Transparência', href: '#transparencia' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo  /* <Sun className="h-6 w-6 text-white" /> */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className=" p-2 rounded-full">
                   <img 
                   src="src/assets/Voluntários da Alegria.png" 
                   alt="Voluntários trabalhando" 
                   className="w-full h-full object-cover"
                   />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight ${scrolled ? 'text-gray-800' : 'text-white drop-shadow-md'}`}>
                Voluntários da Alegria
              </span>
              <span className={`text-xs ${scrolled ? 'text-gray-500' : 'text-gray-100 drop-shadow-md'}`}>
                Solar de Jesus
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium hover:text-amber-500 transition-colors ${scrolled ? 'text-gray-700' : 'text-white drop-shadow-sm'}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#doar" className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Quero Ajudar
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-gray-800' : 'text-white'}`}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-500 hover:bg-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <a href="#doar" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 bg-amber-500 text-white px-3 py-3 rounded-md font-bold">
                Quero Ajudar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-[90vh] flex items-center pt-20 justify-center overflow-hidden">
    {/* Background Image Overlay */}
    <div className="absolute inset-0 bg-[rgb(38,38,38)] z-10"></div>
    <div className="absolute inset-0 z-0">
      <img 
        // src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
        
        // src="/public/Logo_Voluntários da Alegria.png" 
        // alt="Voluntários trabalhando" 
        // className="w-full h-full object-cover"
      />
    </div>

    <div className="relative  z-20 text center px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-amber-500/20 border border-amber-500 text-amber-400 text-sm font-semibold mb-6 backdrop-blur-sm">
  <img 
    src="src/assets/Logo - Solar de Jesus - Copia.png" 
    alt="Logo" 
    className="w-14 h-13 object-contain"
  />
<a 
  href="https://www.solardejesus.com.br" 
  target="_blank" 
  rel="noopener noreferrer"
> 
  Instituição Espírita de Caridade Solar de Jesus 
</a>
</span>
<img 
    src="src/assets/maquina_costura.png" 
    alt="Logo" 
    className="w-25 h-20 object-contain"
  />
        <h1 className="text-4xl md:text-6xl lg:text-2xl font-bold text-white mb-6 leading-tight">
          Tecendo Amor,  <br/> 
          <span className="text-amber-500">Distribuindo Alegria</span>
          
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
          Junte-se a nós nessa corrente do bem. Confecção de enxovais, assistência social e acolhimento fraterno para quem mais precisa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#doar" className="bg-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-600 transition-all shadow-lg flex items-center justify-center gap-2">
            Faça sua Doação <Heart className="w-5 h-5 fill-current" />
          </a>
          <a href="#projetos" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
            Conheça os Projetos <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => {
  const stats = [
    { label: "Enxovais Entregues", value: "1,250+", icon: <Heart className="text-pink-500" /> },
    { label: "Famílias Atendidas", value: "450", icon: <Users className="text-blue-500" /> },
    { label: "Voluntários Ativos", value: "85", icon: <Sun className="text-amber-500" /> },
    { label: "Anos de História", value: "12", icon: <Calendar className="text-green-500" /> },
  ];

  return (
    <div className="bg-white py-12 -mt-20 relative z-30 shadow-xl rounded-xl max-w-6xl mx-auto mx-4 md:mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-b-4 border-amber-500">
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-4">
          <div className="flex justify-center mb-3">{React.cloneElement(stat.icon, { size: 32 })}</div>
          <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">{stat.value}</div>
          <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

const Projects = () => (
  <section id="projetos" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Projetos</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Atuamos em diversas frentes para promover a dignidade humana e o bem-estar social.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PROJECTS.map((project) => (
          <motion.div 
            key={project.id}
            whileHover={{ y: -10 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full"
          >
            <div className="bg-gray-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              {project.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{project.desc}</p>
            <div className="pt-6 border-t border-gray-100">
              <span className="inline-flex items-center text-sm font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                {project.stat}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Transparency = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="transparencia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6">
              <CheckCircle size={16} /> Transparência e Compromisso
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Para onde vai a sua doação?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              No Grupo Voluntários da Alegria, cada centavo é tratado com responsabilidade. 
              Mantemos uma gestão financeira transparente, disponibilizando relatórios periódicos 
              e garantindo que os recursos cheguem a quem realmente precisa.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-lg"><DollarSign className="text-green-600" size={20}/></div>
                <div>
                  <h4 className="font-bold text-gray-900">Prestação de Contas Mensal</h4>
                  <p className="text-sm text-gray-500">Relatórios disponíveis na secretaria da instituição.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-lg"><Users className="text-blue-600" size={20}/></div>
                <div>
                  <h4 className="font-bold text-gray-900">Gestão Colaborativa</h4>
                  <p className="text-sm text-gray-500">Decisões tomadas em conjunto pela diretoria e conselho.</p>
                </div>
              </div>
            </div>
             {/*
            <button className="mt-8 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all">
               Ver Relatórios Detalhados
            </button> Botão para acessar relatórios detalhados */}
          </div>

          {/* Chart Area */}
          <div className="bg-slate-50 p-8 rounded-3xl shadow-inner border border-slate-200">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Distribuição de Recursos (2025)</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={FINANCIAL_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                  >
                    {FINANCIAL_DATA.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color} 
                        strokeWidth={activeIndex === index ? 4 : 0}
                        stroke="#fff"
                        className="transition-all duration-300 focus:outline-none"
                      />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">*Dados atualizados trimestralmente</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const DonationSection = () => {
  const [copied, setCopied] = useState(false);
  const pixKey = "21.355.599/0001-56"; // Chave Pix CNPJ 

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="doar" className="py-24 bg-amber-500 text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Seja um Voluntário da Alegria !</h2>
        <p className="text-xl text-amber-100 mb-12 max-w-2xl mx-auto">
          Sua contribuição mantém a luz acesa. Ajude-nos a comprar tecidos para os enxovais e alimentos para as cestas básicas.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* PIX Card */}
          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src="src/assets/pix.png" alt="Pix" className="h-8" />
            </div>
            <p className="text-sm text-gray-500 mb-2">Chave CNPJ</p>
            <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-between mb-4 border border-gray-200">
              <code className="font-mono text-lg font-bold">{pixKey}</code>
              <button 
                onClick={handleCopy}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                title="Copiar Chave"
              >
                {copied ? <CheckCircle size={20} className="text-green-500" /> : <Copy size={20} className="text-gray-500" />}
              </button>
            </div>
            <p className="text-xs text-gray-400">Banco do Brasil | Ag:  1479-6 | CC: 7043-2</p>
            <p className="text-xs text-gray-400 mt-1">Razão Social: Inst. Esp. Caridade Solar de Jesus</p>
          </div>

          {/* Volunteer Card */}
          <div className="bg-amber-600/50 backdrop-blur-md border border-amber-400 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
            <div className="bg-white/20 p-4 rounded-full mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Seja Voluntário</h3>
            <p className="text-amber-100 mb-6">Doe seu tempo e talento na costura, no bazar ou na organização.</p>
            {/*<button className="bg-white text-amber-600 px-8 py-3 rounded-full font-bold hover:bg-amber-50 transition-colors w-full">
              Entre em contato agora.
               
            </button>*/}

              <a
                href="https://wa.me/5538999138667?text=Olá, gostaria de mais informações sobre como efetuar doações! Como posso judar o grupo ?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-amber-600 px-8 py-3 rounded-full font-bold hover:bg-amber-50 transition-colors w-full inline-block text-center"
              >
                Entre em contato agora.
              </a>

          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[rgb(38,38,38)]  text-slate-300 py-16" id="contato">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Sun className="h-8 w-8 text-amber-500" />
            {/*<img 
                   src="/public/Captura de tela 2025-11-23 172502.png" 
                   alt="Voluntários trabalhando" 
                   className="w-full h-full object-cover"
                   /> */ }
            <span className="text-2xl font-bold text-white">Voluntários<br/>da Alegria</span>
          </div>
         
            <p className="text-sm leading-relaxed text-slate-400">
              Instituição Espírita de Caridade Solar de Jesus. <br/>
              Promovendo o bem, a caridade e a transformação moral através do amor ao próximo.
            </p>
          
          <div className="flex gap-4 mt-6">
            <a href="https://www.instagram.com/voluntariasdaalegria1/" className="hover:text-amber-500 transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={24} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Navegação</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-amber-500 transition-colors">Página Inicial</a></li>
            <li><a href="#quem-somos" className="hover:text-amber-500 transition-colors">Quem Somos</a></li>
            <li><a href="#projetos" className="hover:text-amber-500 transition-colors">Projetos</a></li>
            <li><a href="#portal-transparencia" className="hover:text-amber-500 transition-colors">Portal da Transparência</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-amber-500 flex-shrink-0" size={18} />
              <span>Av. Coração de Jesus, Nº. 1645 - Bairro: Major Prates - <br></br>CEP: 39-400-000 <br/>Cidade: Montes Claros - Minas Gerais</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-amber-500 flex-shrink-0" size={18} />
              <span>(38) 99913-8667</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-amber-500 flex-shrink-0" size={18} />
              <span>centroespiritasolardejesus@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Novidades</h4>
          <p className="text-xs mb-4 text-slate-400">Receba notícias sobre nossos bazares e ações.</p>
          <form className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-amber-500"
            />
            <button type="submit" className="bg-amber-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-amber-600 transition-colors">
              Inscrever
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
        <p>&copy; 2026 Solar de Jesus. Todos os direitos reservados.</p>
        <p className="mt-2">Desenvolvido com ❤️ para a caridade.</p>
      </div>
    </div>
  </footer>
);

function VoluntariasDaAlegria() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-slate-50 selection:bg-amber-200">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        
        <section id="quem-somos" className="py-24 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            {/*<img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Mãos unidas" 
              className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500"
            />*/}

             <img 
              src="src/assets/ChatGPT _voluntarias.png" 
              alt="Mãos unidas" 
              className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-2">Quem Somos</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Amor em movimento, caridade em ação.</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Fundado nos princípios da Doutrina Espírita, o Grupo Voluntários da Alegria nasceu do desejo sincero de servir. 
              Acreditamos que a caridade não é apenas dar o que sobra, mas compartilhar o que temos de melhor: nosso tempo, nosso amor e nossa dedicação.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="text-green-500" size={20} /> Foco no acolhimento integral da família
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="text-green-500" size={20} /> Trabalho voluntário 100% gratuito
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="text-green-500" size={20} /> Transparência total nas doações
              </li>
            </ul>
            <a href="#contato" className="text-amber-600 font-bold hover:text-amber-700 inline-flex items-center gap-1">
              Saiba mais sobre nossa história <ExternalLink size={16} />
            </a>
          </div>
        </section>

        <Projects />
        <Transparency />
        <DonationSection />
      </main>
      <Footer />
    </div>
  );
}

export default VoluntariasDaAlegria;