import { useState, useEffect } from "react";

import {  Tab } from 'semantic-ui-react'
import TeacherClass from './TeacherClass'

function Students() {
    const [students, setStudents] = useState([])
    const [studentsNoTeacher, setSNT] = useState([])
    const [subjects, setSubjects] = useState(['Math', 'Science', 'History'])
    const [currentUser, setCurrentUser] = useState({})
    // const [tabName, setTabName]=useState('')

    let newTabRender = [];
    
    useEffect(() => {
        fetch('/me').then((r) => {
            if(r.ok){
                r.json().then((user) => {
                    setCurrentUser(user)
                })
            }
        })
    }, [])
       
    subjects.forEach((element, index) => {
        let tagName=element
        newTabRender.push({menuItem: element, render: () => {
            return(
                <Tab.Pane>  <TeacherClass key = {element+index} user = {currentUser} tagName = {tagName}/> </Tab.Pane>
            )
        }})
    })



    return (
        <div className='allstudents'>
            <Tab panes={newTabRender}/>
        </div>
    )
}

export default Students