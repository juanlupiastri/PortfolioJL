import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Components/Main.js'
import WorkPage from './Components/WorkPage';
import About from './Components/About';
import LogRocket from 'logrocket';
LogRocket.init('myovrh/portfolio-jl');

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Work" element={<WorkPage />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
