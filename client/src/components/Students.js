import { useState, useEffect } from "react";

import {  Tab } from 'semantic-ui-react'
import TeacherClass from './TeacherClass'

function Students({ user }) {
    const [students, setStudents] = useState([])
    const [studentsNoTeacher, setSNT] = useState([])
    const [subjects, setSubjects] = useState(['Math', 'Science', 'History'])
    // const [tabName, setTabName]=useState('')

    let newTabRender = [];

    
   
       
    subjects.forEach((element) => {
         let tagName=element
        newTabRender.push({menuItem: element, render: () => {
            return(
                <Tab.Pane>  <TeacherClass user={user} tagName={tagName} /> </Tab.Pane>
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