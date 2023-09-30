import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LoginPage } from './pages/login';
import { CadastroFarmaciaPage } from './pages/cadastroDeFarmacias'
import { CadastroDeMedicamentosPage } from './pages/cadastroDeMedicamentos';
import { MedicamentosPage } from './pages/medicamentos';
import { MapaDeFarmaciasPage } from './pages/mapaDeFarmacias';


function App() {
  return (
    <div>

      <Router>
          <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/medicamentos" element={<MedicamentosPage/>}/>
            <Route path="/cadastrar-medicamentos" element={<CadastroDeMedicamentosPage/>}/>
            <Route path="/cadastrar-farmacias"element={<CadastroFarmaciaPage/>}/>
            <Route path="/map" element={<MapaDeFarmaciasPage/>}/>
          </Routes>
      </Router>  
    </div>
  )
}

export default App;
