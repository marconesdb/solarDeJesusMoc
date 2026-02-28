// main.jsx
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>   {/* ← adicione aqui */}
    <App />
  </HelmetProvider>
);