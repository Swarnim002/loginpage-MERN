import React, {useState} from 'react';
import "./signup.css";
import axios from "axios"
import { useHistory } from "react-router-dom"

const Signup = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name:"",
        contact:"",
        date:"",
        email:"",
        password:"",
        reEnterPass:""

    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const signup = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }


    return (
        <div className='signup'>
             <h1>Login</h1>
             <input className="input" type="text" name="Name" value={user.name} placeholder="Your Name"  onChange={ handleChange }></input>
             <input className="input" type="number" name="Contact-number" value={user.contact} placeholder="Your Contact Number"  onChange={ handleChange }></input>
             <input className="input" type="date" name="Today's Date" value={user.date} placeholder="Enter Today's Date"  onChange={ handleChange }></input>
             <input className="input" type="text" name="Email" value={user.email} placeholder="Your Email"  onChange={ handleChange }></input>
             <input className="input" type="password" name="password" value={user.password} placeholder="Enter your Password"  onChange={ handleChange } ></input>
             <input className="input" type="password" name="password" value={user.reEnterPass} placeholder="Confirm your Password"  onChange={ handleChange } ></input>
             <div className="button"> onClick={signup}</div>
             <div>or</div>
             <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Signup;