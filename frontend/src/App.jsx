import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Workshop from './components/Workshop';
import Event from './components/Event';
import Speakers from './components/Speakers';
import WorkshopContent from './components/AllTheContent';
import Registration from './components/Registration';
import { useEffect } from 'react';

function App() {

  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  },[pathname])

  return (
    <>
      {/* <Navbar /> */}
      <div classNameName='app-container'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {WorkshopContent.map(item => <Route key={item.ID} path={`Workshops/${item.ID}`} element={<Workshop {...item}/>}/>)}
        <Route path="/Speakers" element={<Speakers />} />
        <Route path="/Events" element={<Event />} />
        <Route path="/Registration" element={<Registration/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
