import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Framework from './pages/Framework';
import Assessment from './pages/Assessment';
import Reflection from './pages/Reflection';
import Coach from './pages/Coach';
import Toolkit from './pages/Toolkit';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/framework" element={<Framework />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/reflection" element={<Reflection />} />
            <Route path="/coach" element={<Coach />} />
            <Route path="/toolkit" element={<Toolkit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
