import React from 'react'
let Styles = {Navstyle: {
  backgroundColor: 'light blue',
  padding :'10px'
  
}}

function Navc() {
  /* ways for styling react components


  1- Inline styling
  2- Csss stylesheet
  3- css modules
  4- styled components
  5- scss or sass
  6- css framework (bootstrapm tailwind)
  7- react ui libraries (material ui , shadcm ui, chakra ui)

  */


  return (
    <nav style={Navstyle}>
     <ul style={{listStyleType:'none',display:'flex'}}>
      <li><a href="#">Home page</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    
      </ul> 

    </nav>
  )
}

export default Navc