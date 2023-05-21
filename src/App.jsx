import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar/Sidebar'

import Home from './components/Buttons/Home/Home'
import KatForm from './KatForm/KatForm'
import KatTest from './components/Buttons/KatTest/KatTest'
import RecintoEvento from './pages/RecintoEvento/RecintoEvento'

function App() {

  return (
  <div className="app-container">    
  <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/kat" element={<KatTest/>}/>
      <Route path="/katform" element={<KatForm/>}/>
      <Route path="/recinto" element={<RecintoEvento/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
