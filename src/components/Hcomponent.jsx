//Hooks component 20/9/2025 Depi
//Hooks let you use things like state, useEffect, etc., inside functional components.Before hooks, these features were only available in class components.
//✅ useState → manages count
//✅ useEffect → updates the page title every time count changes

import React , { useEffect, useState } from 'react';

function Hcomponent() {
    const [counter, setCounter] = useState(100);

useEffect(() => {
    console.log("component has been updated");

},[])

  return (
    <>
    <button onClick={() => setCounter (counter-1)}>-</button>
    <span>{counter}</span>
    <button onClick={() => setCounter (counter+1)}>+</button>



    <div>Hcomponent</div>
    </>
  )
}

export default Hcomponent