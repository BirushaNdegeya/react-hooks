import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
   return (
      <nav>
         <Link to="/">Home Screen</Link>
         <Link to="profile">Profile Screen</Link>
         <Link to="setting">Setting Screen</Link>
      </nav>
   );
};

export default Header;