import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import KatTest from './components/Buttons/KatTest/KatTest'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/Kat" element={<KatTest/>}/>
    </Routes>
    </BrowserRouter>


   
    </>
  )
}

export default App
