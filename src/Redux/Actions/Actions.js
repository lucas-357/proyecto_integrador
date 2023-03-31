import axios from 'axios';

export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';

export const getCharacterDetail = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const cleanDetail = () => ({ type: CLEAN_DETAIL });

export const addFav = (character) => ({
  type: 'ADD_FAV',
  payload: character,
});

export const removeFav = (id) => ({
  type: 'REMOVE_FAV',
  
payload: id,
});