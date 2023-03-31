import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styles from './Card.module.css';
import Detail from '../Details/Detail';
import { addFav, removeFav } from '../../Redux/Actions/Actions';
import isFavorite from "../Favorite/Favorite";

export default function Card({ id, name, species, gender, image, onClose }) {

  const dispatch = useDispatch();
  const isFavorite = useSelector(state => state.isFavorite.includes(id));
  
   const handleAddToFavorites = () => {
   dispatch(addFav({ id, name, species, gender, image }));
};

 const handleRemoveFromFavorites = () => {
  dispatch(removeFav(id));
};

  return (
    <div className="Card">
      {isFavorite ? (
        <button className={buttonClass} onClick={handleAddToFavorites}>
          ❤️
        </button>
      ) : (
        <button className={buttonClass} onClick={handleRemoveFromFavorites}>
          🤍
        </button>
      )}
    
      <button onClick={() => onClose(id)}>X</button>
      <img src={image} alt="" />
      <h2>name: {name}</h2>
      <h2>species: {species}</h2>
      <h2>gender: {gender}</h2>
    </div>
  );
}

// import React, { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import styles from './Card.module.css';
// import Detail from '../Details/Detail';
// import { addFav, removeFav } from '../../Redux/Actions/Actions';


// export default function Card({ id, name, species, gender, image, onClose }) {
  
//   const dispatch = useDispatch();
//   const isFavorite = useSelector(state => state.myFavorites.includes(id));
  
//   const handleAddToFavorites = () => {
//     dispatch(addFav({ id, name, species, gender, image }));
//   };

//   const handleRemoveFromFavorites = () => {
//     dispatch(removeFav(id));
//   };

//   const buttonClass = isFavorite ? styles.favButtonActive : styles.favButtonInactive;

//   return (
//     <div className="Card">
//       {isFavorite ? (
//         <button className={buttonClass} onClick={handleRemoveFromFavorites}>
//           ❤️
//         </button>
//       ) : (
//         <button className={buttonClass} onClick={handleAddToFavorites}>
//           🤍
//         </button>
//       )}
    
//       <button onClick={() => onClose(id)}>X</button>
//       <img src={image} alt="" />
//       <h2>name: {name}</h2>
//       <h2>species: {species}</h2>
//       <h2>gender: {gender}</h2>
//     </div>
//   );
// }
