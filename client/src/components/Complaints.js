import React, { useState, useEffect } from "react";
import ComplaintsGen from "./ComplaintsGen";
import { Segment, Divider, Image } from 'semantic-ui-react'

function Complaints() {
    const [userInfo, setUserInfo] = useState({})
    const [studentsInfo, setStudentsInfo] = useState([])
    const [currentComplaints, setComplaints] = useState({})

    useEffect(() => {
            fetch('/me').then((r) => {
                if(r.ok){
                    r.json().then((stuff) => {
                        console.log(stuff)
                        setUserInfo(stuff)
                    })
                }
            })
    }, [])

    let complaintsContainers = []

    if (userInfo["is_teacher"]){
        // complaintsContainers = userInfo['complaints'].map((element, index)=>{
        //    return (<ComplaintsGen key={index+element} index = {index} complaint= {element}/>)
        // })
        // studentsInfo.forEach((element) => {
        //     element['complaints'].map((element2, index) => {
        //         complaintsContainers.push(<ComplaintsGen key={index+element} name={element.first_name} profilePic = {element.avatar} complaint= {element2}/>)
        //     })
        // })
    }
    else{
        return (
            <Segment loading>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
        )
    }
    
    return(
        <Segment basic className = "complaintsContainerSegment">
            {/* {complaintsContainers} */}
        </Segment>
    )
}

export default Complaints