import React from 'react'
import style from './header.module.css'
const Header = () => {
  return (
    <div className={style.header}>
       <h1>hello there</h1>
       <button className={style.btn}>ClickME!</button>
    </div>
  )
}

export default Header
