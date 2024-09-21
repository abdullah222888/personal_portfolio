import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import Education from './components/Education';
import Services from './components/Services';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/education' element={<Education />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
