import React from "react"
import "./home.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="home">
            <h1>Hello Homepage</h1>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage