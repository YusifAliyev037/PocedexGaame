import React from 'react'
import {PlayerCard} from '../PlayerCard';
import styles from "../PlayerGroup/playerGroup.module.css"

 function PlayerGrpup(props) {
  return (
    <div className={styles.container}>
      <p
        className={styles.title_winner}
        style={{ color: props.isWinner ? "green" : "red" }}
      >
        {" "}
        {props.isWinner ? "Winner" : "Lose"}
      </p>

      <p className={styles.title_power}> {props.power}</p>

      <div className={styles.list}>
        {props.pokemons?.map((pokemon) => (
          <PlayerCard
            key={"pokecard" + pokemon.id}
            {...pokemon}
            // type={pokemon.type}
            // name={pokemon.name}
          />
        ))}
      </div>
    </div>
  )
}


export default PlayerGrpup;
