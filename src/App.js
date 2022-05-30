import logo from './logo.svg';
import './App.css';


import Body from './components/global/main/body.js';
import Tools from './components/global/tools/tools.js';
import FontSizes from './components/global/tools/font-sizes.js';
import FourOneFour from './404.js';
import './components/global/secrets.js';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


function App() {
  return (
    <div id="home" >
      
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/fontSizes" element={<FontSizes />} />
        <Route path="*" element={<FourOneFour />}/>
      </Routes>
    </div>


  );
}

export default App;
