import { useState, useEffect } from "react";
import Student from './Student'

function Students ({ user }) {
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch(`/${user.id}/students`)
        .then(res => res.json())
        .then(students => setStudents(students))
    }, [])

    return(
        <div className = 'allstudents'>
            <ul className ='studentslist'>
                {students.map((student) => (
                    <Student student={student}/>
                ))}
            </ul>
        </div>
    )
}

export default Students