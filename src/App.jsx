// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from 'react'
import Headerc from './components/Headerc';
import Footerc from './components/Footerc';
import Navc from './components/Navc';
import Homepage from './pages/Homepage';
import { Routes, Route } from 'react-router';
import About from './pages/About';
import Contact from './pages/Contact';
import Hcomponent from './components/Hcomponent';
import Blog from './components/Blog';

function App() {
  return (
    <>
    <Navc/>
    <Headerc/>
    {/* <Hcomponent/> */}
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>

    </Routes>
  
    <Footerc/>
    

    </>
  )
}

export default App