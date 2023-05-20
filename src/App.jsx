import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import KatTest from './components/Buttons/KatTest/KatTest'
import SideBar from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/Kat" element={<KatTest/>}/>
      <Route path="/sideBar" element={<SideBar/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
