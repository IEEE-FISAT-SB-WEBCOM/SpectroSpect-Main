import { Route, Routes, useLocation, Navigate} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Workshop from './components/Workshop';
import Event from './components/Event';
import Speakers from './components/Speakers';
import WorkshopContent from './components/DB';
import Registration from './components/Registration';
import { useEffect } from 'react';
import WorkshopMain from './components/WorkshopMain'

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
        <Route path="/Workshops" element={<WorkshopMain />} />
        {WorkshopContent.map(item => <Route key={item.ID} path={`Workshops/${item.ID}`} element={<Workshop {...item}/>}/>)}
        <Route path="/Speakers" element={<Speakers />} />
        <Route path="/Events" element={<Event />} />
        <Route path="/Registration" element={<Registration/>}/>
        <Route
        path="*"
        element={<Navigate to="/" replace />}
        />
      </Routes>
      </div>
    </>
  );
}

export default App;
