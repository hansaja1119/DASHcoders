import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import SearchPage from './Pages/LandingPage/LandingPage.jsx';
import Footer from './Components/Footer/Footer.jsx';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/"/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

