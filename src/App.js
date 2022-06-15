import React from 'react';
import { BrowserRouter,Route,Link,Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Typeformbar from './components/typeformbar';
import Typeform from './components/typeforms';
import Flow from './renderer/flow';

function App() {
  return (
    <div className='App'>
       <Routes>
        
      </Routes>
     <Navbar />
     <Typeformbar />
     <Typeform />
    </div>
  );
}


export default App;
