import useCharacter from '../../hooks/useCharacter';
const Detail = ()=>{
    const character = useCharacter();

    return(
        <div>
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <img src={character.name} alt={character.image}/>
        </div>
    )
}
export default Detail;