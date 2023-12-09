import React from 'react'
import classes from './ImgList.module.css'
const ImgList = () => {
  return (
    <li className={classes.ImgList}>
    <img src="https://images.unsplash.com/photo-1612835362596-4b7b7b0b4b0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjB3b3JsZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" className={classes.img} />
    <a href="https://www.freepik.com/photos/background">Background photo created by kjpargeter - www.freepik.com</a>
    </li>
  )
}

export default ImgList