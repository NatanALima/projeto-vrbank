import './App.css';
import Navbar from './components/navBar/Navbar';
import Produtos from './components/Produtos/Produtos';
import Banco from './components/Banco/Banco';
import Salas from './components/Salas/Salas';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className='backgContent'>
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
    
    
  );
}

export default App;
