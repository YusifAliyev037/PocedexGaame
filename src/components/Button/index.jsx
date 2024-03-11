import React from 'react'
import style from "../Button/button.module.css"
  export function Button(props) {
    const {
        children,
         color ="success",
          size= "md",
           disabled,
           onClick
        }= props
    return (
    <button className={`${style.btn} ${style[color]} ${style[size]}`}
    disabled={disabled} onClick={onClick}>
        {children}
        
    </button>
  )
}


