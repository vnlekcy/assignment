import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Convert from './pages/Convert';
import VisitAll from './pages/VisitAll';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <>
    <Router>
      <nav className="bg-gray-100 p-4 shadow-md flex space-x-4">
        <Link 
          to="/" 
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Shorten URL
        </Link>
        <Link 
          to="/urls" 
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          View All URLs
        </Link>
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Convert />} />
          <Route path="/urls" element={<VisitAll />} />
        </Routes>
      </main>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
