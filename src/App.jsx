import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {KatTest} from './components/Buttons/KatTest/KatTest'

import Home from './components/Buttons/Home/Home'
import KatForm from './KatForm/KatForm'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Kat" element={<KatTest/>}/>
      <Route path="/Katform" element={<KatForm/>}/>
    </Routes>
    </BrowserRouter>


   
    </>
  )
}

export default App
