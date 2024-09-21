
import './App.css';
import Principal from './components/Principal';
import CV from './components/CV';
import Repositorio from './components/Repositorios';
import Blog from './components/Blog';
import Hobys from './components/Hobys';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/web" element={<Principal/>} />
      <Route path="/cv" element={<CV/>} />
      <Route path="/repositorio" element={<Repositorio/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/hobbies" element={<Hobys/>} />
    </Routes>
  );
}

export default App;
