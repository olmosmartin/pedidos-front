import React, {useState} from 'react';
import * as holaMundoServices from './api/holaMundoServices'

import Routes from './routes';
import './App.css';


function App() {
  const [dato, setDato] = useState()

  const cargarHola = async()=>{
    const res= await holaMundoServices.holaMundo();
    setDato(res.data);
}

const cargarOtros = async()=>{
  const res= await holaMundoServices.otro();
  setDato(res.data);
}


  return (
    <div className="App">
      <Routes/>
      <button onClick={cargarHola}>boton hola mundo</button>
      <button onClick={cargarOtros}>boton otros</button>
      {dato}
    </div>
  );
}

export default App;
