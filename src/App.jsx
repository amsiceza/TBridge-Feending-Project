import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './components/Buttons/Home/Home'
import KatForm from './KatForm/KatForm'
import KatTest from './components/Buttons/KatTest/KatTest'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/kat" element={<KatTest/>}/>
      <Route path="/katform" element={<KatForm/>}/>
    </Routes>
    </BrowserRouter>


   
    </>
  )
}

export default App
