import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Project1/Component/Common/Nav';
import Home from './Project1/Pages/Home';
import About from './Project1/Pages/About';
import Sample from './Project1/Pages/Sample';
import Contact from './Project1/Pages/Contact';
import Footer from './Project1/Component/Common/Footer';

function App() {
 


  return (
    <div>

      {/* ROUTER SECTION */}
      <Router>

        <Nav />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Samplepost' element={<Sample />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>


  );
}

export default App;
