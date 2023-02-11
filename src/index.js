import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import Nav from './components/Nav'
import {BrowserRouter as R, Routes, Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <R>
    <Nav />
    <Routes>
    <Route exact path='/rexchairs' element={<App />} />
    </Routes>
  </R>
);