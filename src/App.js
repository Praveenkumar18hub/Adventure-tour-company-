

import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Planner from './Components/Pages/Planner';
import Hosting from './Components/Pages/Hosting';
import SignUp from './Components/Pages/SignUp';
import Book from './Components/Book'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/planner' element={<Planner/>} />
          <Route path='/hosting' element={<Hosting/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/Book' element={<Book/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
