import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import News from './pages/News'
import Contacts from './pages/Contacts'
import NewsDetail from './pages/NewsDetail'
import Admissions from './pages/Admissions'
import Staff from './pages/Staff';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/admissions" element={<Admissions />} />
	  <Route path="/staff" element={<Staff />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App