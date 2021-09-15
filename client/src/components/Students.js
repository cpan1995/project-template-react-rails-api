import { useState, useEffect } from "react";
import Student from './Student'

function Students({ user }) {
    const [students, setStudents] = useState([])
    const [studentsNoTeacher, setSNT] = useState([])
   

    useEffect(() => {
        fetch(`/${user.id}/students`)
            .then(res => res.json())
            .then(students => setStudents(students))
    }, [])

    useEffect(() => {
        fetch(`/students_without_teachers`)
            .then(res => res.json())
            .then(students => setSNT(students))
    }, [students])

    return (
        <div className='allstudents'>
            <h3>Students in my Class</h3>
            <table class="ui celled padded table">
                <thead>
                    <tr>
                        <th class="single line">Frist Name</th>
                        <th>Last Name</th>
                        <th>Subject</th>
                        <th>Grade</th>
                        <th>Homework</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student)=> {
                        return (
                            <tr>
                        <td>{student.first_name}</td>
                        <td>{student.last_name}</td>
                        {/* <td>{student.school_classes[0].subject}</td>
                        <td>{student.school_classes[0].grade}</td>
                        <td>{student.school_classes[0].homeworks[0]}</td> */}
                        </tr>)
                    })}

                </tbody>
            </table>
            <h3>Add Students to my class</h3>
            {studentsNoTeacher.map((student) => (
                    <Student student={student} user={user} setStudents={setStudents}/>
                ))}
        </div>
    )
}

export default Students