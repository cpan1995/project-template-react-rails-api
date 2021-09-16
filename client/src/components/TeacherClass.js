import { useState, useEffect } from "react";
import Student from './Student'
import { Segment, Divider, Grid, Image, Header, Container, Button, Input } from 'semantic-ui-react'
import GradeState from "./GradeState";

function TeacherClass({user, tagName}){
    const [students, setStudents] = useState([])
    const [studentsNoTeacher, setSNT] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    

    useEffect(() => {
        fetch('/me').then((r) => {
            if(r.ok){
                r.json().then((user) => {
                    fetch(`/${user.id}/students`)
                    .then(res => res.json())
                    .then(students => {
                        setStudents(students)
                    })
                    setCurrentUser(user)
                })
            }
        })
    }, [])

    // useEffect(() => {
    //     fetch(`/students_without_teachers`)
    //         .then(res => res.json())
    //         .then(students => setSNT(students))
    // }, [students])

//    potato =  students.map(student => {
//         student.school_classes.filter((class) => {
//             class.subject == tagName.toLowercase()
//         })
//     })
//     console.log(potato)
    let studentsContainers = [];
    let studentsNoTeacherContainer = [];
    // console.log(students)


    if(students.length!=0){
        studentsContainers = students.map((student,index) => {
            return <GradeState  key = {student.id + index} student = {student} tagName = {tagName} user={user}/>
            
            
        })
    }
    
    return(


            <Grid>
                <Grid.Column width = {6}>
                    
                    <Container>

                        <Header as='h1'>Students</Header>
                        {studentsContainers}
                        
                    </Container>

                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        Homework
                    </Segment>
                </Grid.Column>
                {/* <h3>Students in my Class</h3>

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
                        {studentsContainers}
                    </tbody>
                </table>
                <h3>Add Students to my class</h3>
                {studentsNoTeacher.map((student,index) => (
                    <Student key = {student+index} student={student} user={user} setStudents={setStudents} />
                ))} */}


                
            </Grid>


    )
}

export default TeacherClass