import React from 'react'
import styles from "../PlayerCard/playerCard.module.css"

const pokemonImage = (id)=>{
    const newID = id.toString();
    let resultID = id;
    
    if(newID.length === 1){
        resultID = "00" + id;
    }
    if(newID.length === 2){
        resultID = "0" + id;
    }

    return resultID;
}

 export const  PlayerCard=(props)=> {
    console.log(props);
  return (
    <div className={styles.card}>
      <p className={styles.card_title}> {props.name}</p>
      <img
      alt='pocemon'
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonImage(
          props.id
        )}.png`}
      />
      <p className={styles.card_info}>Type: {props.type}</p>
      <p className={styles.card_info}>EXP {props.base_experience}</p>
    

      
        
      
    </div>
  )
}

