import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rental from './pages/Rental';
import About from './pages/About';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:id" element={<Rental />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
