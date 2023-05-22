import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from '../src/pages/Home/Home'

import KatTest from './components/Buttons/KatTest/KatTest';
import RecintoEvento from './pages/RecintoEvento/RecintoEvento';
import Register from './components/Register/Register';
import Header from "./components/Header/Header";
import Login from './components/Login/Login';
import ProgramacionEvento from "./pages/ProgramacionEvento/ProgramacionEvento";

function App() {
  const token = localStorage.getItem('token'); // Obtener el token del local storage

  return (
    <div>
      <BrowserRouter>
      {token && !window.location.pathname.includes('/register') ? ( // Ternario para condicionar la renderización del Sidebar
            <Header/>
          ): null}
        <div className="app-container">
          {token && !window.location.pathname.includes('/register') ?( // Ternario para condicionar la renderización del Sidebar
            <div className="sidebar-boss-container">
              <Sidebar />
            </div>
          ):null}
          
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/kat" element={<KatTest />} />
              <Route path="/program" element={<ProgramacionEvento/>} />
              <Route path="/recinto" element={<RecintoEvento />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

