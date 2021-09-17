import { useState, useEffect } from "react";
import { Segment, Divider, Grid, Image, Header, Container, Button, Input } from 'semantic-ui-react'
import Homework from "./Homework";

export default function HomeworksContainers({homeworks, tagName}){
    const [currentHomeworks, setCurrentHomeworks] = useState(Array.from(homeworks))
    const [currentUser, setCurrentUser] = useState({})
    const [newTask, setNewTask] = useState("")

    useEffect(()=>{
        setCurrentHomeworks(Array.from(homeworks))
    },[homeworks])

    // useEffect(() => {
    //     fetch('/me').then((r) => {
    //         if(r.ok){
    //             r.json().then((user) => {
    //                 setCurrentUser(user)
    //             })
    //         }
    //     })
    // }, [])


    function handleHomeworksCallback(toDeleteHomework){
        let newHomeworks = currentHomeworks.filter(task => task!=toDeleteHomework)
        setCurrentHomeworks(newHomeworks)
    }

    function addNewTask(){
        console.log(newTask)
        if (newTask!=""){
            fetch(`/school_classes/${newTask}/${tagName}`,{
                method: "POST",
                body: JSON.stringify({
                    homework2: newTask
                })
            })
            .then(()=>{
                let tempArray = [...currentHomeworks]
                tempArray.push(newTask)
                if(tempArray[0]==null){
                    tempArray = [];
                }
                setCurrentHomeworks(tempArray)
                setNewTask('')
            })
        }
    }

    function handleInputChange(e){
        setNewTask(e.target.value)
    }

    let homeworkRender = []
    
    if(currentHomeworks.length != 0){
        homeworkRender = currentHomeworks.map((homework) => {
            return(
                <Homework homework = {homework} tagName= {tagName} handleHomeworksCallback={handleHomeworksCallback}/>
            )
        })
    }

    console.log(currentHomeworks)

    return(
        <div>
            <Container text className = "homeworkContainer">
                {homeworkRender}
            </Container>
            <Input fluid placeholder = 'Add Task' value={newTask} onChange = {handleInputChange}></Input>
            <Button fluid onClick = {addNewTask}>Add New Homework</Button>
        </div>

    )

}