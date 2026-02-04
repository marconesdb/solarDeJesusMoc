import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Doacoes from './pages/doacoes/Doacoes'
import Contato from './pages/contato/Contato'
import Transmissao from './pages/Transmissao'
import QuemSomos from './pages/quemsomos/QuemSomos'
import DoutrinaEspirita from './pages/DoutrinaEspirita/DoutrinaEspirita'
import ObrasBasicas from './pages/DoutrinaEspirita/ObrasBasicas'
import ArtigosEspiritas from './pages/DoutrinaEspirita/ArtigosEspiritas'
import Oracoes from './pages/DoutrinaEspirita/Oracoes'
import Galeria from './pages/quemsomos/Galeria'
import NossosMomentos from './pages/quemsomos/NossosMomentos'
import NossosTrabalhos from './pages/quemsomos/NossosTrabalhos'
import Homenageados from './pages/quemsomos/Homenageados'
import NossaHistoria from './pages/quemsomos/NossaHistoria'
import Caridade from './pages/DoutrinaEspirita/ArtigosEspiritas/Caridade'
import Coragem from './pages/DoutrinaEspirita/ArtigosEspiritas/Coragem'
import DownloadPalestras from './pages/DoutrinaEspirita/DownloadPalestras'
import Venda from './pages/Venda'
import Pagina2 from './pages/Pagina2'
import Pagina3 from './pages/Pagina3'
import Pagina4 from './pages/Pagina4'
import Comprovante from './pages/Comprovante'


function App() {
 
  
  return (
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/quemsomos' element={<QuemSomos/>}/>
     <Route path='/galeria' element={<Galeria/>}/>
     <Route path='/nossosmomentos' element={<NossosMomentos/>}/>
     <Route path='/nossostrabalhos' element={<NossosTrabalhos/>}/>
     <Route path='/homenageados' element={<Homenageados/>}/>
     <Route path='/nossahistoria' element={<NossaHistoria/>}/>
     <Route path='/doutrinaespirita' element={<DoutrinaEspirita/>}/>
     <Route path='/obrasbasicas' element={<ObrasBasicas/>}/>
     <Route path='/downloadpalestras' element={<DownloadPalestras/>}/>
     <Route path='/artigosespiritas' element={<ArtigosEspiritas/>}/>
     <Route path='/caridade' element={<Caridade/>}/>
     <Route path='/coragem' element={<Coragem/>}/>
     <Route path='/oracoes' element={<Oracoes/>}/>
     <Route path='/transmissao' element={<Transmissao/>}/>
     <Route path='/doacoes' element={<Doacoes/>}/>
     <Route path='/contato' element={<Contato/>}/>
     <Route path='/venda' element={<Venda/>}/>
     <Route path='/pagina2' element={<Pagina2/>}/>
     <Route path='/pagina3' element={<Pagina3/>}/>
     <Route path='/pagina4' element={<Pagina4/>}/>
     {/* <Route path='/pagina5' element={<Pagina5/>}/> */}
     <Route path='/comprovante' element={<Comprovante/>}/>
     <Route path='*' element={<h1>Not Found</h1>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App