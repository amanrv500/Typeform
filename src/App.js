import React from 'react';
import './App.css';
import Homepage from './pages/home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Flowpage from './pages/flowpage';
import Rules from './pages/rulespage';
import Loginpage from './pages/loginpage';
import Notestate from './context/notestate';

function App() {
  return (
   <Notestate>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/flow" element={<Flowpage />} />
          <Route path="/rules" element={<Rules />} />
      </Routes>
    </BrowserRouter>
   </Notestate>
  );
}


export default App;
