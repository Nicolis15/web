
import './App.css';
import Principal from './components/Principal';
import CV from './components/CV';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/web" element={<Principal/>} />
      <Route path="/cv" element={<CV />} />
    </Routes>
  );
}

export default App;
