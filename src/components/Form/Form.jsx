import { useState } from "react"
import validate from "../validation/validation";
import "./Form.module.css";

const Form = ({login})=>{
   const [userData, setUserData] = useState({username: '',password:''});

   const [errors, setErrors]= useState({
    username: '',
    password: ''
    })

    const handleInputChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
        }))
    };
   
    const handleSumbmit = (event) =>{
        event.preventDefault();
        login(userData)
    }
    return(
        <form onSubmit={handleSumbmit}>
       <div class="inputContainer">
        <input onChange={handleInputChange} value={userData.username} type="Text" name="username" placeholder="Username" />
        {errors.username && <p style={{color:'red'}}>{errors.username}</p>}
        </div>
        <div class="inputContainer">
        <input onChange={handleInputChange} value={userData.password} type="password" name="password" placeholder="Password" />
        {errors.username && <p style={{color:'red'}}>{errors.username}</p>}
        </div>
        <button >LOGIN</button>
        </form>
    )
}
export default Form