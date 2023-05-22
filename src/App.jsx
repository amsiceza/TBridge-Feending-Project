import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";

import Home from './components/Buttons/Home/Home'
import KatForm from './KatForm/KatForm'
import KatTest from './components/Buttons/KatTest/KatTest'
import RecintoEvento from './pages/RecintoEvento/RecintoEvento'
import Register from './components/Register/Register'
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <div className="app-container">
        
        
          <div className="sidebar-boss-container">
            <Sidebar />
          </div>
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/kat" element={<KatTest />} />
              <Route path="/katform" element={<KatForm />} />
              <Route path="/recinto" element={<RecintoEvento />} />
              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login/>} />
            </Routes>
          </div>
        
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
