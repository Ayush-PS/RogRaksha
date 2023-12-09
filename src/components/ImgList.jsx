import React from 'react'
import classes from './ImgList.module.css'
const ImgList = (props) => {
  return (
    <li className={classes.ImgList}>
    <img src={props.icon} alt="img" className={classes.img} />
    <a  className={classes.a} href={props.desc}>{props.children}</a>
    </li>
  )
}

export default ImgList