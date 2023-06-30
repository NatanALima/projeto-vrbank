import './App.css';
import Navbar from './components/navBar/Navbar';
import Produtos from './components/Produtos/Produtos';
import FundosBanco from './components/FundosBanco/FundosBanco';
import Salas from './components/Salas/Salas';
import Extrato from './components/Extrato/Extrato';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className='mainContent'>
      <Router>
        <Navbar/>
        <main>
          <Routes>
            <Route index element={<Produtos/>}/>
            <Route path='fundosbanco' element={<FundosBanco/>}/>  
            <Route path='extrato' element={<Extrato/>}/>
            <Route path='salas' element={<Salas/>}/>
          </Routes>
        </main>
      </Router>
    </div>
    
    
  );
}

export default App;
