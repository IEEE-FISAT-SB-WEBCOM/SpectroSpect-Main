import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Workshop from './components/Workshop';
import Event from './components/Event';
import Speakers from './components/Speakers';
import WorkshopContent from './components/WorkshopContent';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div classNameName='app-container'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {WorkshopContent.map(item => <Route path={`Workshops/${item.ID}`} element={<Workshop ID={item.ID} NAME={item.Name} />}/>)}
        <Route path="/Speakers" element={<Speakers />} />
        <Route path="/Events" element={<Event />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
