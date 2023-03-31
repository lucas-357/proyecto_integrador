import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Details/Detail';
import Form from './components/Form/Form';

function App() {
const [characters, setCharacters] = useState([]);
const location = useLocation();
const [access, setAccess] = useState(false);
const navigate = useNavigate();

const username = 'lucas@soyhenry.com'
const password = '123abc'
const login=(userData)=>{
   if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
 }, [access, navigate]);
 


 function onSearch(id){
   const url="https://rickandmortyapi.com/api";
   fetch(`${url}/character/${id}`)
   .then((response)=>response.json())
   .then((data)=>{
     if (data.name && !characters.find((char)=>char.id === data.id)){
       setCharacters((oldChar)=>[...oldChar,data]);
     }else if (characters.find((char)=>char.id === data.id)){
       window.alert("La carta ya esta agregada");
     }else{
       window.alert("La carta no existe");
     }
   })
 }

const onClose=(id)=>{
  setCharacters((oldChar)=>{
    return oldChar.filter((character)=>character.id !== id)
});
}
   return (
      <div className='App' style={{padding: '25px'}} >
        {location.pathname=== '/' ? <Form login={login}/> : <Nav onSearch={onSearch} />}
         <Routes>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='/detail/:detailId' element={<Detail/>}/>
          <Route path='Form' element={<Form/>}/>
         </Routes>
         
      </div>
   );
   
}

export default App;