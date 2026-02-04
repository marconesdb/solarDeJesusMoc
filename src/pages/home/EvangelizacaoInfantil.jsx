import EvangelizacaoInfantil from '../img-cartaz-palestras/Evangelizacao.png';
import Natal from '../../../src/pages/img-cartaz-palestras/Natal.svg';
// import Aniversario from "../../../src/pages/img-cartaz-palestras/Aniversario.jpeg";
const Evangelizacao = () => {
  return (
    <div className="flex flex-col mt-12 md:flex-row items-start justify-center p-6 space-y-6 md:space-y-0 md:space-x-12">
      <div className="w-full max-w-[calc(100%+10px)] sm:max-w-sm md:max-w-lg lg:max-w-xl">
        <img
          src={EvangelizacaoInfantil}
          alt="Promo Image"
          className="w-full rounded-lg shadow-md"
        />
      </div>
      <div className="w-full max-w-[calc(100%+10px)] sm:max-w-sm md:max-w-lg lg:max-w-xl">
        <img
          src={Natal}
          alt="Promo Image"
          className="w-full rounded-lg shadow-md"
        />
    
      </div>

      {/* <div className="w-full max-w-[calc(100%+10px)] sm:max-w-sm md:max-w-lg lg:max-w-xl">
        <img
          src={Aniversario}
          alt="Promo Image"
          className="w-full rounded-lg shadow-md"
        />
    
      </div> */}
    </div>
  );
};

export default Evangelizacao;
