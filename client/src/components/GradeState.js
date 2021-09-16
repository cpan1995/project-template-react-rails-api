import { useState, useEffect } from "react";
import { Segment, Divider, Grid, Image, Header, Container, Button, Input } from 'semantic-ui-react'

export default function GradeState({student, tagName, user}){
    const [currentStudent, setCurrentStudent] = useState(student)
    const [currentGrade, setCurrentGrade] = useState(0)
    const [currentSubjectId, setCurrentSubjectId] = useState(0)

    useEffect(() => {
        let classesId = 0;
        let grade = student.school_classes.map(element => {
            // console.log(tagName.toLowerCase())
            // console.log(element.subject.toLowerCase())
            if(element.subject.toLowerCase() === tagName.toLowerCase()){
                classesId = element.id
                return element.grade
            }
        }).filter(element => element)
        setCurrentGrade(grade)
        setCurrentSubjectId(classesId)
    }, [])

    console.log(student)

    function handleChange(e){
        const re = /^[0-9\b]+$/;
        if(e.target.value === '' || re.test(e.target.value)){
            setCurrentGrade(e.target.value)
        }
    }

    return (
        <div className = 'teacherClassesStudentsTabParent'>
            <div className = 'teacherClassesStudentsTab'>
                <b className = 'teacherClassesStudentsTabB'>Name:</b> 
                <p>{`${student.first_name} ${student.last_name}`}</p>
                <b className = 'teacherClassesStudentsTabB'>Grade:</b>
            </div>
            <Input placeholder = {`Current Grade is ${currentGrade}`} onChange = {handleChange} value={currentGrade}/>
            <Button>Edit</Button>
        </div>
    )

}