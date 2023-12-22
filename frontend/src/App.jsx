import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Workshops from './components/Workshops';
import Event from './components/Events';
import Speakers from './components/Speakers';
import Navbar from './components/navbar';


function App() {
  return (
    <>
      <Navbar />
      <div className='app-container'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Workshops" element={<Workshops />} />
        <Route path="/Speakers" element={<Speakers />} />
        <Route path="/Events" element={<Event />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
