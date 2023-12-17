import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import Workshops from './components/Workshops'
import Event from './components/Events'
import Speakers from './components/Speakers'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path='/Workshops' element={<Workshops/>}></Route>
      <Route path="/Speakers" element={<Speakers/>}></Route>
      <Route path="/Events" element={<Event/>}></Route>
    </Routes>
    </>
    
  )
}

export default App