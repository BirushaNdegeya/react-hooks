import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/index.css';

const App = () => {
   return (
      <>
         <h1>Hooks In React</h1>
         <Home />
      </>
   );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <StrictMode>
      <App />
   </StrictMode>
)