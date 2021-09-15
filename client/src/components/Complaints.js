import React, { useState, useEffect } from "react";
import ComplaintsGen from "./ComplaintsGen";
import { Segment, Divider } from 'semantic-ui-react'

function Complaints() {
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    console.log(user)
                    setUserInfo(user)
                })
            }
        });
    }, [])

    let complaintsContainers = []

    if (userInfo["is_teacher"]){
        complaintsContainers = userInfo['complaints'].map((element, index)=>{
           return (<ComplaintsGen key={index+element} index = {index} complaint= {element}/>)
        })
    }
    else{
        return (
            <div>
                You Need To Be A Teacher To Access This Page
            </div>
        )
    }
    
    return(
        <Segment basic>
            {complaintsContainers}
        </Segment>
    )
}

export default Complaints