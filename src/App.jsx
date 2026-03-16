import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landing from './pages/Landing';
import Framework from './pages/Framework';
import Reflection from './pages/Reflection';
import Coach from './pages/Coach';
import Toolkit from './pages/Toolkit';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/framework" element={<Framework />} />
          <Route path="/reflection" element={<Reflection />} />
          <Route path="/coach" element={<Coach />} />
          <Route path="/toolkit" element={<Toolkit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
