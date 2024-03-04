import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
   return (
      <nav>
         <Link>Home Screen</Link>
         <Link>Profile Screen</Link>
         <Link>Setting Screen</Link>
      </nav>
   );
};

export default Header;