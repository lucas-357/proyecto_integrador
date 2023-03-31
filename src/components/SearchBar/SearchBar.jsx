import React, { useState } from "react";
const SearchBar = (props)=>{
   const [id, setId]= useState("");
   const handleCharge = (event)=>{
      setId(event.target.value);
   }
   return(
      <>
      <input type="Text" onChange={handleCharge}/>
      <button onClick={()=>props.onSearch(id)}>Buscar</button>
      </>
   )
}
export default SearchBar