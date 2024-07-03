import './App.css';
import Navbar from './components/navBar/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import ValidateLogin from './components/RoutesValidate/ValidateLogin';
import BancoProvider from './Context/BancoContext';
function App() {
  const [isLogged, setIsLogged] = useState(true);
  
  return (
    <ValidateLogin>
      <BancoProvider>
        <div className='contentContainer'>
            <Navbar/>
            <main>
              <Outlet/>
            </main>
        </div>
      </BancoProvider>
    </ValidateLogin>
    
  );
}

export default App;
