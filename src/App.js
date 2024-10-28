import './App.css';
import Loginpage from './pages/loginpage/Loginpage';
import Signpage from './pages/signpage/Signpage';
import Home from './pages/Home/home';
import Products from './pages/products/product';
import Navbar from './pages/components/Navbar/Navbar';
import Footer from './pages/components/Footer/footer';

import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation(); // Hook to get current route

  // Determine if Navbar should be displayed
  const showNavbar = location.pathname !== '/' && location.pathname !== '/signUp';
  const showFooter = location.pathname !== '/' && location.pathname !== '/signUp;'

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Loginpage />} />
        <Route path='/signUp' element={<Signpage />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
