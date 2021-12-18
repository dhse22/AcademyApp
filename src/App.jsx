import './App.css';
import React from 'react';
import Componente from './components/Componente';
import Componentedos from './components/Componentedos';

function HolaMundo(nombre,tema) {
  var presentacion =
    (
                      <div>
                          <h2>Realizado por {nombre}</h2>
                          <h3>{tema}</h3>
                      </div>
    );
  return presentacion;
}


function App() {
  var nombre = "Diego Hernán Saavedra Espejo"
  var tema="React MiPrimeraApp"
  return (
    <div className="App">
      <header className="App-header">
        <p>
           {HolaMundo(nombre,tema)}
        </p>
        <section>
          <Componente />
        </section>
        <div>
          <Componentedos />
        </div>
      
      </header>
      
    </div>
  );
  
}

export default App;
