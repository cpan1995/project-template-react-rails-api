import React from 'react';
import Tabs from './Tabs'
import Classes from './Classes'
import Students from './Students'
import Complaints from './Complaints'
import { NavLink, Switch, Route, useHistory } from "react-router-dom"

function Main(){
    let history = useHistory();
   
    return(
        <div> 
            <img src= 'https://media.gettyimages.com/photos/red-brick-high-school-building-exterior-picture-id171306436?s=612x612'/>
            <h1>WELCOME STUDENTS AND FACULTY</h1>           
        </div>
    )
}

export default Main