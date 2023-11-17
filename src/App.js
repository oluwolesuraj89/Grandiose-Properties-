import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Files/Home/LandingPage';
import Buy from './Files/Buy/Buy';
import Rent from './Files/Rent/Rent';
import Commercial from './Files/Commercial/Commercial';

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Buy" element={<Buy/>}/>
        <Route path="/Rent" element={<Rent/>}/>
        <Route path="/Commercial" element={<Commercial/>}/>
    </Routes> 
    </>
  );
}

export default App;
