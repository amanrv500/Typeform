import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Typeformbar from './components/typeformbar';
import Typeform from './components/typeforms';

function App() {
  return (
    <div className='App'>
     <Navbar />
     <Typeformbar />
     <Typeform />
    </div>
  );
}


export default App;
