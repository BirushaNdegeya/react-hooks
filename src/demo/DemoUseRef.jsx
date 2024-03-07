import React, { Fragment, useEffect, useRef, useState } from 'react';

function MonRobot() {
   // const boutonRef = useRef(null);
   const robotRef = useRef(null);
 
   const faireSauterRobot = () => {
     // Fais sauter le robot ici !
     robotRef.current.style.transform = "translateX(50px)";
   };
 
   return (
     <div>
       <button onClick={faireSauterRobot}>
         Appuie pour faire sauter le robot !
       </button>
       <div ref={robotRef}>🤖</div>
     </div>
   );
 }




const Chronometre = () => {
   const monValeurRef = useRef(null);
   const [temps, setTemps] = useState(0);

   const demarrer = () => {
      console.log('Demarrer');
      monValeurRef.current = setInterval(() => {
         setTemps((prevTemps) => prevTemps + 1);
      }, 1000);
   };

   const arreter = () => {
      console.log('arreter');
      clearInterval(monValeurRef.current )
   }

   return (
      <Fragment>
         <h1>Chronometre UseRef</h1>
         <h1>Temps ecoule : {temps}</h1>
         <button onClick={demarrer}>Demarrer</button>
         <button onClick={arreter}>Arreter</button>
      </Fragment>
   )
}


const DemoUseRef = () => {
   const myRef = useRef(null);
   const monRef = useRef(null);

   useEffect(() => {
      myRef.current.focus();
      monRef.current.style.color = 'red';
   }, []);

   return (
      <Fragment>
         <input
            type='text'
            placeholder='Ton Nom'
         />
         <input
            type='text'
            ref={myRef}
            placeholder='Ton Post-Nom'
         />
         <input
            type='text'
            ref={monRef}
            placeholder='Ton Prenom'
         />
         <Chronometre />
         <MonRobot />
      </Fragment>
   );
};


export default DemoUseRef;