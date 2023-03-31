import { useState } from "react";
import {useSelector} from 'react-redux';
import {Card} from "../../index"
import styles from "../Cards/Cards.module.css";

const isFavorite = () =>{
    const [selectedGender, setSelectedGender]= useState("all");
    const favorites=useSelector((state) => state.myfavorite);
    const filtredFavorite = selectedGender === "all"
    ?favorites
    : favorites.filter((favorite)=>favorite.gender === selectedGender);
    const onClose = (id) => {
        <button onClick={() => onClose(id)}>X</button>
      };
    
    return(
     <div className={styles.cards}>
        <div>
            <label>
                filter by gender:
                <select
                value = {selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}>
                    <option value ="all">All</option>
                    <option value = "male">Male</option>
                    <option value ="female">Female</option>
                    <option value = "genderless">Genderless</option>
                    <option value ="unknown">Unknown</option>
                </select>
            </label>
        </div>
    
     {filtredFavorite.map(({element})=>{
     
        <Card 
            key={element.id}
            id={element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            origin={element.origin.name}
            image={element.image}
            onClose={onClose}
            ></Card>
     }
     )}
      </div>
    )
}

export default isFavorite;