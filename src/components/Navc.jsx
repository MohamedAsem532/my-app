import React from 'react'
// import './Navc.css'             //for css stylesheet method
import styles from './Navc.module.css'  //for css modules method
import styled from 'styled-components'  //for styled components method

// Create a Title component that'll render an <h1> tag with some styles
const Navcomponent = styled.nav`
  background-color: darkcyan;
  
`;


/* ways for styling react components
  1- Inline styling
  2- Css stylesheet
  3- css modules
  4- styled components
  5- scss or sass
  6- css framework (bootstrap, tailwind)
  7- react ui libraries (material ui , shadcn ui, chakra ui)
*/




//((For inline styling))

// let Styles = {Navstyle: {
//   backgroundColor: 'lightblue',
//   padding :'10px'
  
// },
// ulStyle: {
//   listStyleType: 'none',
//   display: 'flex'
// },liStyle: {
//   marginRight: '20px'                  
// },linkStyle: {
//   textDecoration: 'none',
//   color: 'black'
// }}                              




function Navc() {


  return (
    <Navcomponent className={styles.nav}>   {/*for css modules method*/}
     <ul className={styles.ul}>
      <li ><a className={styles.link} href="#">Home page</a></li>
      <li><a className={styles.link} href="#">About</a></li>
      <li><a className={styles.link} href="#">Contact</a></li>

      </ul>

    </Navcomponent>
  )
}

export default Navc