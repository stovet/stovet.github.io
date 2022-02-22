import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          
          <Route path="/" element={<Main />} />
          <Route path="/Projects" element={<Projects />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
