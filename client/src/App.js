import './App.css';
import Navbar from './components/navBar/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import ValidateLogin from './components/ValidateLogin';
function App() {
  const [isLogged, setIsLogged] = useState(true);
  
  return (
    <ValidateLogin>
      <div className='contentContainer'>
          <Navbar/>
          <main>
            <Outlet/>
          </main>
      </div>
    </ValidateLogin>
    
  );
}

export default App;
