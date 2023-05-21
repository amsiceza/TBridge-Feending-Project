import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";

import Home from './pages/Home/Home'
import KatForm from './components/KatForm/KatForm'
import KatTest from './components/Buttons/KatTest/KatTest'
import RecintoEvento from './pages/RecintoEvento/RecintoEvento'
import Register from './components/Register/Register'

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
