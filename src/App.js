import React from 'react';
import './style/App.css';
import Homepage from './pages/homepage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Flowpage from './pages/flowpage';
import Rules from './pages/rulespage';
import Loginpage from './pages/loginpage';
import Notestate from './context/notestate';
import Questionpage from './pages/questionpage';
import Signuppage from './pages/signuppage';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
   <Notestate>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/Signuppage" element={<Signuppage />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/homepage/:id/flow" element={<Flowpage />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/homepage/:id" element={<Questionpage />} />
      </Routes>
    </BrowserRouter>
   </Notestate>
  );
}


export default App;
