import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Workshop from './components/Workshop';
import Event from './components/Event';
import Speakers from './components/Speakers';


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div classNameName='app-container'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Workshops" element={<Workshop />} />
        <Route path="/Speakers" element={<Speakers />} />
        <Route path="/Events" element={<Event />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
