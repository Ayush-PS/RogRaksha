import React from 'react'
import classes from './Header.module.css'
import Button from './Button'
import logo from '../assets/img/logo.png'
const Header = () => {
    
  return (
    <div className={classes.header}>
    
<img src={logo} alt="logo" className={classes.logo}/>
<h1 className={classes.title}>Rog-Raksha</h1>

    <div className={classes.options}>
    <Button on={console.log("working")}>Home</Button>
    <Button on={console.log("working")}>Menu</Button>
    <Button on={console.log("working")}>Mediceines</Button>
    <Button on={console.log("working")}>doctor</Button>
    <Button on={console.log("working")}>Emergency</Button>
    </div>
       
    </div>
  )
}

export default Header