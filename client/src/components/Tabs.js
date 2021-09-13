import React from 'react';
import { NavLink, useHistory } from "react-router-dom"
import { useState, useEffect } from "react";

function Tabs({handleLogout, user}) {

    // useEffect(() => {
    //     fetch('http://localhost:3000/isTeacher?')
    //     .then(res => res.json())
    //     .then(user => setUser(user))
    // }, [])

    let history = useHistory()

    function handleClick(){
        fetch('/logout', {
            method: 'DELETE'
        }).then(() => {
            handleLogout();
            history.push('/')
        })
    }

    return(
        <div className = "header">
            <h1 className = "title">Website Title</h1>
            <nav className = "tabs">
                <ul className = 'nav'>
                    <li className = 'links'><NavLink exact to="/home">Home</NavLink></li>
                    {user ? <li className = 'links'><NavLink to="/classes">Classes</NavLink></li> : <li className = 'links'><NavLink to="/students">Students</NavLink></li>}
                    <li className = 'links'><NavLink to="/complaints">Complaints</NavLink></li>
                    <li> 
                        <button onClick={handleClick}> LOGOUT HERE</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Tabs