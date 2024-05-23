import './App.css';
import Autenticacao from './components/Autenticacao/Autenticacao';
import Navbar from './components/navBar/Navbar';
import Produtos from './components/Produtos/Produtos';
import Banco from './components/Banco/Banco';
import Salas from './components/Salas/Salas';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [isLogged, setIsLogged] = useState(true);
  
  return (
    <>
      {!isLogged ? <Autenticacao/> :
        <div className='contentContainer'>
          <Router>
            <Navbar/>
            <main>
              <Routes>
                <Route index path='/*' element={<Produtos/>}/>
                <Route path='banco' element={<Banco/>}/>
                <Route path='salas' element={<Salas/>}/>
              </Routes>
            </main>
          </Router>
        </div>
      }
      
    </>
    
    
  );
}

export default App;
