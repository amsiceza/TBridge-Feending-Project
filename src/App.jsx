import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar/Sidebar'

import KatTest from './components/Buttons/KatTest/KatTest'
import RecintoEvento from './pages/RecintoEvento/RecintoEvento'

function App() {

  return (
  <div className="app-container">    
  <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path="/Kat" element={<KatTest/>}/>
      <Route path="/recinto" element={<RecintoEvento/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
