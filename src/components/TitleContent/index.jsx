import React from 'react'
import styles from "../TitleContent/title.module.css"
import { Button } from '../Button';
 function TitleContent(props) {
  return (
    <div className={styles.content}>
        <h1>Pokedex</h1>
        <Button color='success' onClick={props.sayHello}>Start Game</Button>
    </div>
  )
}


export default TitleContent;
