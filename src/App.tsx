import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Loading from './components/Loading';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />;

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Toaster position="bottom-right" />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;