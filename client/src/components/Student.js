import { Card, Icon, Button, Image } from 'semantic-ui-react'

function Student({ student, user, setStudents }) {

    function addStudent(username){
        fetch(`/teacher/${user.id}/${username}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                teacher_id: user.id,
            }),
        })
            .then((r) => r.json())
            .then((students) => setStudents(students))
    }
    
    return (
     
        <Card>

            <Image size='medium' src={`${student.avatar}`} />
            <Card.Content>
                <Card.Header>{`${student.first_name} ${student.last_name}`}</Card.Header>
            </Card.Content>
            <Button onClick={()=> addStudent(student.username)}>Add to your class</Button>

        </Card>
    )
}

export default Student