import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Staff from './pages/Staff';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollToTop />
      <Header />
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;