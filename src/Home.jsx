import React, { useState, useEffect, useRef } from "react";
import { api } from "./api/api";

export const Component = () => {

   const inputRef = useRef(null);
   const countRef = useRef(0);

   const handleClick = () => {
      console.log(inputRef.current.value);
   };

   return (
      <>
         <h1>UseRef</h1>

         <p>Count: {countRef.current}</p>
         <input
            type="text"
            ref={inputRef}
         />
         <button onClick={handleClick}>Input Value</button>
      </>
   )
}

const Home = () =>  {
   const [count, setCount] = useState(0);  
   const [people, setPeople] = useState([]);
   useEffect(() => {
      document.title = `You clicked ${count} times`;
      
      async function loadApi () {
         try {
            const data = await api(count);
            setPeople(data);
         } catch {
            console.warn('Something went wrong!');
         }
      }

      loadApi();

      console.log('Display composant')

   }, [count])

   const handleClick = () => {
      setCount(prevCount => prevCount + 1);
   }

   return (
      <div>
         <Component />
         <br />
         <br />
         <p>You clicked {count} times</p>
         <button onClick={handleClick}>
         Click me
         </button>
      </div>
   );
};

export default Home;