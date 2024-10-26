import './App.css';
import Loginpage from './pages/loginpage/Loginpage';
import Signpage from './pages/signpage/Signpage';
import Home from './pages/Home/home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Loginpage />} />
        <Route path='/signUp' element={<Signpage />} />
        <Route path = '/Home' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
