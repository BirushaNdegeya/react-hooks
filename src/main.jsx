import React, { StrictMode } from "react";
import ReactDOMClient from 'react-dom/client';
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import DemoUseRef from "./demo/DemoUseRef";
import { 
   BrowserRouter as Router,  
   Routes,
   Route,
   NavLink
} from 'react-router-dom';
import './css/index.css';

const App = () => {
   return (
      <Router>
         <header>
            <nav>
               <NavLink to="/">Home</NavLink>
               <NavLink to="/about">About</NavLink>
               <NavLink to="/service">Service</NavLink>
            </nav>
         </header>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
         </Routes>
      </Router>
   );
};

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
   <StrictMode>
      <DemoUseRef />
   </StrictMode>
);
// pnpm -> have this in your local node