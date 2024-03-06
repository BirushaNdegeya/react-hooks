import React, { useEffect, useState } from "react";
import Button from "./Button";

const Counter = () => {
   const [count, setCount] = useState(0);
   const [measure, setMeasure] = useState(window.innerWidth);
   const increase = () => {
      setCount(prevCount => prevCount + 1);
   }
   const decrease = () => {
      setCount(prevCount => prevCount - 1);
   }
   useEffect(() => {
      document.title = `I am at ${count}`;
      document.getElementById('status').innerText = `I am at ${count}`;

      if (count > 3) {
         document.getElementById('status').style.color = 'green';
      } else {
         document.getElementById('status').style.color = 'red';
      }
      window.addEventListener(('resize'), () => {
         const curWidth = window.innerWidth;
         setMeasure(curWidth);
      })
   })
   return (
      <main>
         <h1>Use Effect</h1>
         <h1>{measure}</h1>
         <h1 id="status"></h1>
         <h1>Count : {count}</h1>
         <Button text="increment" action={increase} />
         <Button text="decrement" action={decrease} />
      </main>
   );
};

export default Counter;