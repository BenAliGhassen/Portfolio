import { useEffect, useState } from 'react';
import './Styles/Dark.css'
import './Styles/LightStyle.css'
import NavBar from './Component/Reusable/NavBar';
import Home from './Pages/Home';



function App() {
const [mode , setMode] = useState(localStorage.getItem('mode') || 'dark')

useEffect(() => {
  localStorage.setItem('mode', mode);
}, [mode]);


  return (
    <div className={ mode === 'light' ? 'lightgen' : 'darkgen'} >
       <NavBar setMode={setMode} mode={mode}/>
       <div >

      <Home/>



      </div>
    </div>
  );
}

export default App;
